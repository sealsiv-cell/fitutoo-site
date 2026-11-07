/**
 * FitU signups -> Google Sheets
 *
 * Routes each website signup to the right spreadsheet and tab:
 *   apex-cohort        -> "FitU Apex Cohort Signups"      / Cohort
 *   academy, apparel   -> "FitU Apex Cohort Signups"      / Academy & Apparel
 *   elite-application  -> "FitU VIP Training Applications" / Applications
 *   elite-interest     -> "FitU VIP Training Applications" / Interested
 *
 * Setup (once):
 * 1. Go to https://script.google.com, click New project, name it "FitU signups".
 * 2. Replace everything in Code.gs with this file and click Save.
 * 3. (Optional) set SECRET below to any random phrase, and use the same value
 *    for GOOGLE_SHEET_SECRET in Vercel.
 * 4. Deploy > New deployment > type "Web app".
 *    Execute as: Me.  Who has access: Anyone.  Approve the permissions.
 * 5. Copy the Web app URL into GOOGLE_SHEET_WEBHOOK_URL in Vercel, then redeploy.
 */

var SECRET = ""; // optional; must match GOOGLE_SHEET_SECRET

var APEX_SHEET_ID = "1M24fxrAHRL6iMwNUAwxNREtW80FcwcZK09b192Ih8sk";
var VIP_SHEET_ID = "1O1eQmiWcHcVvBSlVgF9BXE2YjP0hupBVtx2hgSHHWnQ";

// For each list: which spreadsheet and tab, which column holds the email
// (used to find the next empty row), and the fields to write, in column order.
var ROUTES = {
  "apex-cohort": { id: APEX_SHEET_ID, tab: "Cohort", emailCol: 2, fields: ["timestamp", "email", "name", "placement", "page"] },
  "academy": { id: APEX_SHEET_ID, tab: "Academy & Apparel", emailCol: 2, fields: ["timestamp", "email", "name", "list", "placement", "page"] },
  "apparel": { id: APEX_SHEET_ID, tab: "Academy & Apparel", emailCol: 2, fields: ["timestamp", "email", "name", "list", "placement", "page"] },
  "elite-application": { id: VIP_SHEET_ID, tab: "Applications", emailCol: 3, fields: ["timestamp", "name", "email", "phone", "goals", "placement", "status"] },
  "elite-interest": { id: VIP_SHEET_ID, tab: "Interested", emailCol: 3, fields: ["timestamp", "name", "email", "placement"] },
};
var DEFAULT_ROUTE = "apex-cohort";

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var data = JSON.parse(e.postData.contents);
    if (SECRET && data.secret !== SECRET) return json_({ ok: false, error: "unauthorized" });

    var route = ROUTES[data.list] || ROUTES[DEFAULT_ROUTE];
    data.status = "New";
    data.timestamp = data.timestamp ? new Date(data.timestamp) : new Date();

    var sheet = SpreadsheetApp.openById(route.id).getSheetByName(route.tab);
    var row = nextEmptyRow_(sheet, route.emailCol);
    var values = route.fields.map(function (f) {
      var v = data[f];
      if (v instanceof Date) return v;
      v = v == null ? "" : String(v);
      // Stop spreadsheet formula injection.
      return /^[=+\-@]/.test(v) ? "'" + v : v;
    });
    sheet.getRange(row, 1, 1, values.length).setValues([values]);
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

// The tabs have checkbox columns filled down, so appendRow would skip to the
// bottom. Find the first row after the header whose email cell is empty.
function nextEmptyRow_(sheet, emailCol) {
  var last = Math.max(sheet.getLastRow(), 1);
  var col = sheet.getRange(1, emailCol, last, 1).getValues();
  for (var i = col.length - 1; i >= 0; i--) {
    if (String(col[i][0]).trim() !== "") return i + 2;
  }
  return 2;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

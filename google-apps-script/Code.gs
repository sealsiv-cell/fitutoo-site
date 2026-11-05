/**
 * FitU signups -> Google Sheet
 *
 * 1. Open your Google Sheet, then Extensions > Apps Script.
 * 2. Replace everything in Code.gs with this file and click Save.
 * 3. (Optional) set SECRET below to any random phrase, and use the same value
 *    for GOOGLE_SHEET_SECRET in Vercel.
 * 4. Deploy > New deployment > type "Web app".
 *    Execute as: Me.  Who has access: Anyone.
 * 5. Copy the Web app URL into GOOGLE_SHEET_WEBHOOK_URL in Vercel.
 */

var SECRET = ""; // optional; must match GOOGLE_SHEET_SECRET
var SHEET_NAME = "Signups";
var HEADERS = ["timestamp", "email", "name", "phone", "goals", "list", "placement", "page"];

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var data = JSON.parse(e.postData.contents);
    if (SECRET && data.secret !== SECRET) return json_({ ok: false, error: "unauthorized" });

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
    if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);

    sheet.appendRow(HEADERS.map(function (h) {
      var v = data[h] == null ? "" : String(data[h]);
      // Stop spreadsheet formula injection.
      return /^[=+\-@]/.test(v) ? "'" + v : v;
    }));
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

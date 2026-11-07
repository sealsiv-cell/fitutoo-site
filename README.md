# Fitutoo.com

The FitU website: home, FitU Apex App cohort signup, Elite Personal Training / VIP Coaching, the FitU Too Wellness Academy and Apparel.

Built with Next.js and hosted on Vercel.

## Edit content

Most of the things you'll want to change are in **`lib/site.ts`**:

- `links.skoolAcademy`: your Skool URL. While it's `#`, the Academy page shows an early-access form instead of a Skool button.
- `links.apexApp`, `links.instagram`, `links.facebook`
- `elite.price`, `elite.paymentPlans`, `elite.spotsLeft` (set this to `null` to hide "Only N spots left")
- `testimonials`: add **real** client testimonials here. The section on the Elite page stays hidden while this list is empty.
- `apparelBrands`: names, blurbs, shop links and images for each sub-brand.

Page copy lives in `app/<page>/page.tsx`. Images are in `public/images`.

## Connect the Google Sheets (signups)

Every form posts to `/api/signup`, which sends the signup to a Google Apps Script web app. The script adds a row to the right sheet:

| Form | Spreadsheet | Tab |
|---|---|---|
| Apex cohort (`apex-cohort`) | FitU Apex Cohort Signups | Cohort |
| Academy, Apparel | FitU Apex Cohort Signups | Academy & Apparel |
| VIP application (`elite-application`) | FitU VIP Training Applications | Applications |
| VIP "send me the details" (`elite-interest`) | FitU VIP Training Applications | Interested |

The spreadsheet IDs are already filled in at the top of `google-apps-script/Code.gs`.

1. Go to [script.google.com](https://script.google.com) while signed in as the owner of both sheets. Click **New project** and name it "FitU signups".
2. Paste in `google-apps-script/Code.gs` and click Save.
3. Click **Deploy > New deployment**, choose **Web app**, set *Execute as* to **Me** and *Who has access* to **Anyone**, then click Deploy and approve the permissions.
4. Copy the Web app URL.
5. In Vercel, open **Project > Settings > Environment Variables** and add `GOOGLE_SHEET_WEBHOOK_URL` with that URL. Then redeploy.
6. Optional: set `SECRET` in Code.gs and `GOOGLE_SHEET_SECRET` in Vercel to the same random phrase.

When you switch to Mailchimp later, only `app/api/signup/route.ts` needs to change.

## Deploy on Vercel

1. In Vercel, click **Add New > Project** and import this GitHub repo. The defaults are fine.
2. Add the environment variable from the section above.
3. Under **Settings > Domains**, add `fitutoo.com` and `www.fitutoo.com`.
4. In GoDaddy, open **DNS** for fitutoo.com and set the records Vercel shows you. Usually that's:
   - an `A` record for `@` pointing to `76.76.21.21`
   - a `CNAME` record for `www` pointing to `cname.vercel-dns.com`

   Delete any existing `A` record for `@` and any GoDaddy "parked" or forwarding entries first.

## Run locally

```bash
npm install
cp .env.example .env.local   # then fill in the sheet URL
npm run dev
```

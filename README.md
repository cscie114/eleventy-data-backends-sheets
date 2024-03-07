# eleventy-data-backends-csv

Illustrating how to use data from Google Sheets in eleventy (11ty).

- [Google Sheets cscie114-demo-data]([https://www.11ty.dev/docs/data-custom/](https://docs.google.com/spreadsheets/d/18Pnw-kjaJhlcVuQZkNoCBTFTouT3CPpeEJb0JvewqPI/edit?usp=drive_link))
- [google-spreadsheet](https://www.npmjs.com/package/google-spreadsheet) npm package

## Run
This will need some setup on your end.
Create your own copy of the spreadsheet.
Follow [instructions for setting up authentication on the Google side](https://theoephraim.github.io/node-google-spreadsheet/#/guides/authentication).

Create an .env file with the following entries:
```
GOOGLE_SPREADSHEET_ID="<your spreadsheet id>"
GOOGLE_SERVICE_ACCOUNT_EMAIL="<email goes here>"
GOOGLE_PRIVATE_KEY="<key goes here>"
```
And then run:
```
npm install
npm run start
```
```

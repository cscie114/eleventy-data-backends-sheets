require("dotenv").config();
const EleventyFetch = require("@11ty/eleventy-fetch");
const creds = require("../../config/google-creds.json");

module.exports = async function () {
    const data = await getDataFromSheets();
    return data;
}

async function getDataFromSheets() {
  console.log("in getDataFromSheets");
  const { GoogleSpreadsheet } = require("google-spreadsheet");

  // Initialize the sheet - doc ID is the long id in the sheets URL
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SPREADSHEET_ID);

  // Initialize Auth - see https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
  await doc.useServiceAccountAuth(creds);

  await doc.loadInfo(); // loads document properties and worksheets
  console.log(doc.title);

//  const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
  const sheetSubjects = doc.sheetsByTitle['links-detail'];
  console.log(sheetSubjects.title);
  console.log(sheetSubjects.rowCount);
  console.log(sheetSubjects.gridProperties);
 
  const rows = await sheetSubjects.getRows();
  let sheetsData = [];
  console.log(rows.length); // 2
  rows.forEach((r) => {
   if(r.title && r.url) {
    let urlObj = new URL(r.url);
    let host = urlObj.hostname;
    console.log(urlObj);
    console.log(host);
    sheetsData.push({"hostname": host, "url": r.url, "title": r.title, "description": r.description, "image": r.image});
    console.log(`${r.url}`);
   }
  })
  return(sheetsData);
}

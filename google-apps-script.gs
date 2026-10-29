const SPREADSHEET_ID="1OcIq332_G7ECLt9RKjCFknBtrFFO_cMU";
const RSVP_SHEET_NAME="RSVP";

function doPost(event){
  const data=JSON.parse(event.postData.contents);
  const spreadsheet=SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet=spreadsheet.getSheetByName(RSVP_SHEET_NAME)||spreadsheet.insertSheet(RSVP_SHEET_NAME);

  if(sheet.getLastRow()===0){
    sheet.appendRow(["Timestamp","Name","Email","Attendance","Guests","Message"]);
  }

  sheet.appendRow([
    new Date(),
    data.name||"",
    data.email||"",
    data.attendance||"",
    data.guests||"",
    data.message||""
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({success:true}))
    .setMimeType(ContentService.MimeType.JSON);
}

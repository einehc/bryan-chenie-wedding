const SPREADSHEET_ID="11HhtO90yfpTv36akDXkOHAmBiC5A7BcIdkRGPJV8NGo";
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

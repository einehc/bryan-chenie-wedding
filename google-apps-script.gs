
function setupRSVPSheet() {
  const ss = SpreadsheetApp.openById(
    "11HhtO90yfpTv36akDXkOHAmBiC5A7BcIdkRGPJV8NGo"
  );

  let sheet = ss.getSheetByName("RSVP");

  if (!sheet) {
    sheet = ss.insertSheet("RSVP");
  }

  const headers = [
    "Timestamp",
    "Name",
    "Email",
    "Attendance",
    "Guests",
    "Message"
  ];

  sheet.getRange(1, 1, 1, 6).setValues([headers]);
  sheet.setFrozenRows(1);
}

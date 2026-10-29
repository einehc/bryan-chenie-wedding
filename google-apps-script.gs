
function setupRSVPSheet() {
  const ss = SpreadsheetApp.openById(
    "1OcIq332_G7ECLt9RKjCFknBtrFFO_cMU"
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

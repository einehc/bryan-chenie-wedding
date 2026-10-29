
const SPREADSHEET_ID = "1OcIq332_G7ECLt9RKjCFknBtrFFO_cMU";
const RSVP_SHEET_NAME = "RSVP";

function doGet() {
  return ContentService.createTextOutput(
    "Bryan & Chenie Wedding RSVP endpoint is running."
  );
}

function setupRSVPSheet() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = ss.getSheetByName(RSVP_SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(RSVP_SHEET_NAME);
  }

  const headers = [
    "Timestamp", "Name", "Email",
    "Attendance", "Guests", "Message"
  ];

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
  } else {
    sheet.getRange(1, 1, 1, headers.length)
      .setValues([headers]);
  }

  sheet.setFrozenRows(1);
  return "RSVP sheet is ready.";
}

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      throw new Error("No RSVP submission data received.");
    }

    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = ss.getSheetByName(RSVP_SHEET_NAME);

    if (!sheet) {
      sheet = ss.insertSheet(RSVP_SHEET_NAME);
    }

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp", "Name", "Email",
        "Attendance", "Guests", "Message"
      ]);
    }

    sheet.appendRow([
      new Date(),
      data.name || "",
      data.email || "",
      data.attendance || "",
      data.guests || "",
      data.message || ""
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ success: true })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    console.error(error);

    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        message: String(error.message || error)
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

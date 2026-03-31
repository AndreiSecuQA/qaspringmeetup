// ─────────────────────────────────────────────────────────────
// QA Spring Meetup 2026 — Google Apps Script
//
// Setup instructions:
// 1. Go to https://sheets.google.com and create a new spreadsheet
//    named "QA Meetup 2026 - Registrations"
// 2. Add these headers in Row 1:
//    Timestamp | Prenume | Nume | Email | Telefon | Rol | Companie | Interes | Sursa | Newsletter
// 3. Go to Extensions → Apps Script
// 4. Paste this entire file, save (Ctrl+S)
// 5. Click Deploy → New deployment → Web app
//    - Execute as: Me
//    - Who has access: Anyone
// 6. Click Deploy, copy the Web App URL
// 7. Paste that URL in register.html replacing REPLACE_WITH_YOUR_APPS_SCRIPT_URL
// ─────────────────────────────────────────────────────────────

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data  = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.timestamp  || new Date().toISOString(),
      data.firstName  || '',
      data.lastName   || '',
      data.email      || '',
      data.phone      || '',
      data.role       || '',
      data.company    || '',
      data.interest   || '',
      data.source     || '',
      data.newsletter ? 'Da' : 'Nu'
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function — run manually to verify the sheet connection
function testWrite() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.appendRow([
    new Date().toISOString(),
    'Test',
    'User',
    'test@example.com',
    '',
    'student',
    '',
    'automation',
    'linkedin',
    'Da'
  ]);
}

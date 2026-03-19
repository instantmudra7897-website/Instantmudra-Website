function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([data.name, data.phone, data.amount, data.type, data.income, data.emis, new Date()]);
  return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
}
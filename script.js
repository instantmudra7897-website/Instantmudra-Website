/**
 * InstantMudra — Lead Capture (Google Apps Script)
 * Captures ALL website form fields + marketing attribution.
 *
 * IMPORTANT: After updating this code in script.google.com,
 * click Deploy > Manage deployments > Edit > New version > Deploy.
 * The old deployment keeps running old code until you do this.
 */
function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName('Leads') || ss.getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    var HEADERS = ['Timestamp','Name','Phone','Email','State','Loan Type','Amount',
      'Property Type','Property Location','Property Value',
      'Business Vintage','Turnover','GST','ITR','Monthly Income','Existing EMIs',
      'Source','UTM Source','UTM Medium','UTM Campaign','GCLID','Referrer'];
    if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);

    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.name || '', data.phone || '', data.email || '', data.state || '',
      data.product || '', data.amount || '',
      data.proptype || '', data.proploc || '', data.propval || '',
      data.vintage || '', data.turnover || '', data.gst || '', data.itr || '',
      data.income || '', data.emis || '',
      data.source || 'Website Form',
      data.utm_source || '', data.utm_medium || '', data.utm_campaign || '',
      data.gclid || '', data.referrer || ''
    ]);
    return ContentService.createTextOutput('Success').setMimeType(ContentService.MimeType.TEXT);
  } catch (err) {
    return ContentService.createTextOutput('Error: ' + err).setMimeType(ContentService.MimeType.TEXT);
  }
}

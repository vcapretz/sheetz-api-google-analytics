/**
*@author Vitor Capretz <capretzvitor@gmail.com>
*/

function flatten(arr) {
    return arr.reduce(function (flat, toFlatten) {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
}

function filterAccounts(nome_conta) {
    var accounts = listAccountsSummaries();
    var regex = new RegExp(nome_conta, 'i');

    return accounts.items.filter(function (account) {
        if (regex.test(account.name)) {
            return account;
        }
    });
}

function createHeaders(headers, sheet){
    var row = 1;
    var column = 1;
  
    sheet.getRange('A1:Z').setValue("");
  
    headers.forEach(function(header){
        sheet.getRange(row, column++).setValue(header);
    });
}

function getSheet(name) {
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = spreadsheet.getSheetByName(name);

    if (sheet == null) {
        sheet = spreadsheet.insertSheet().setName(name);
    }

    return sheet;
}

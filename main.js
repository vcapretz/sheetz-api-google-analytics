/**
*@author Vitor Capretz <capretzvitor@gmail.com>
*/

function createSheetsHeaders(){
    var sheets = {};

    sheets.sheetAccounts = createSheetAccounts();
    sheets.sheetUsers = createSheetUsers(); 
    sheets.sheetGoals = createSheetGoals();
    sheets.sheetFilters = createSheetFilters();
    sheets.sheetViews = createSheetViews();
    sheets.sheetAdWords = createSheetAdWords();
    sheets.sheetDefinition = createSheetCustomDefinitions();

    return sheets; 
}

function fill(accounts) {
    var general_information_profile = [];
    var general_information_property = [];

    var sheets = createSheetsHeaders();

    accounts.forEach(function(account){
        var filters = listFilters(account.id).items;
      
        account.webProperties.forEach(function(webProperty){
          
            var info = {
                accountName: account.name,
                accountId: account.id,
                propertyId: webProperty.id,
                propertyName: webProperty.name,
                propertyLevel: webProperty.level,
                propertyUrl: webProperty.websiteUrl
            };

            general_information_property.push(info);

            webProperty.profiles.forEach(function(profile){
                
                var info_profile = {
                    accountName: account.name,
                    accountId: account.id,
                    propertyId: webProperty.id,
                    propertyName: webProperty.name,
                    propertyLevel: webProperty.level,
                    propertyUrl: webProperty.websiteUrl, 
                    profileName: profile.name, 
                    profileId: profile.id, 
                    profileType: profile.type,
                    filters: filters
                };
              
                general_information_profile.push(info_profile);
            });
        });
    });

    fillProfilesInformation(general_information_property, sheets.sheetViews);
    fillAdWordsInformation(general_information_property, sheets.sheetAdWords);
    fillCustomDefinitions(general_information_property, sheets.sheetDefinition);
    
    fillAccountsInformation(general_information_profile, sheets.sheetAccounts);
    fillUsersPermissions(general_information_profile, sheets.sheetUsers);
    fillGoalsInformation(general_information_profile, sheets.sheetGoals);
    fillViewsFilter(general_information_profile, sheets.sheetFilters);
    
}

function init() {
    var sheetSettings = getSheet('Configuration');
    var nome_conta = sheetSettings.getRange(2, 1).getValue();
  
    var accounts = filterAccounts(nome_conta);

    fill(accounts);
}

function onOpen() {
    SpreadsheetApp.getUi().createMenu('Import').addItem('General', 'init').addToUi();
}

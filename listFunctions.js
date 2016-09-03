/**
*@author Vitor Capretz <capretzvitor@gmail.com>
*/

function listAccountsSummaries() {
    Utilities.sleep(0.3 * 1000);
    return Analytics.Management.AccountSummaries.list();
}

function listUsersProfiles(accountId, webPropertyId, profileId) {
    Utilities.sleep(0.3 * 1000);
    return Analytics.Management.ProfileUserLinks.list(accountId, webPropertyId, profileId);
}

function listGoals(accountID, webPropertyID, propertyId) {
    Utilities.sleep(0.3 * 1000);
    return Analytics.Management.Goals.list(accountID, webPropertyID, propertyId);
}

function listFiltersPerView(accountID, webPropertyID, propertyId) {
    Utilities.sleep(0.3 * 1000);
    return Analytics.Management.ProfileFilterLinks.list(accountID, webPropertyID, propertyId);
}

function listFilters(accountID) {
    Utilities.sleep(0.3 * 1000);
    return Analytics.Management.Filters.list(accountID);
}

function listDimensions(accountId, webPropertyId) {
    Utilities.sleep(0.3 * 1000);
    return Analytics.Management.CustomDimensions.list(accountId, webPropertyId);
}

function listMetrics(accountId, webPropertyId) {
    Utilities.sleep(0.3 * 1000);
    return Analytics.Management.CustomMetrics.list(accountId, webPropertyId);
}

function listAdWordsLinks(accountId, webPropertyId) {
    Utilities.sleep(0.3 * 1000);
    return Analytics.Management.WebPropertyAdWordsLinks.list(accountId, webPropertyId);
}

function listViews(accountId, webPropertyId) {
   
    Utilities.sleep(0.3 * 1000);
    return Analytics.Management.Profiles.list(accountId, webPropertyId);
}

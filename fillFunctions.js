/**
*@author Vitor Capretz <capretzvitor@gmail.com>
*/

function fillUsersPermissions(profiles, sheet){
    var permissions = [];

    profiles.forEach(function(info){
        var usersProfile = listUsersProfiles(info.accountId, info.propertyId, info.profileId);

        if(!usersProfile || usersProfile.error){
            Logger.log(usersProfile.error.message);
            return;
        }

        usersProfile.items.forEach(function(el){
            el.accountId = info.accountId;
            el.accountName = info.accountName;
            el.propertyId = info.propertyId;
            el.propertyName = info.propertyName;
        });

        permissions = permissions.concat(usersProfile.items);
    });

    permissions.forEach(function(user, index){
        var row = [user.userRef.id, user.userRef.email, user.accountId, user.accountName, user.propertyId, user.propertyName, user.entity.profileRef.id, user.entity.profileRef.name, (user.permissions.effective.indexOf('MANAGE_USERS') > -1 ? 'MANAGE_USERS' : ''), (user.permissions.effective.indexOf('EDIT') > -1 ? 'EDIT' : ''), (user.permissions.effective.indexOf('COLLABORATE') > -1 ? 'COLLABORATE' : ''), (user.permissions.effective.indexOf('READ_AND_ANALYZE') > -1 ? 'READ_AND_ANALYZE' : '')];

        sheet.getRange(index + 2, 1, 1, row.length).setValues([row]);
    });
}

function fillAccountsInformation(profiles, sheet){
    profiles.forEach(function(info, index){
        var row = [info.accountName, info.accountId, info.propertyName, info.propertyId, info.propertyLevel, info.propertyUrl, info.profileName, info.profileId, info.profileType];

        sheet.getRange(index + 2, 1, 1, row.length).setValues([row]);
    });
}

function fillGoalsInformation(profiles, sheet){
    var goals = [];

    profiles.forEach(function (info){
        var goals_per_view = listGoals(info.accountId, info.propertyId, info.profileId);
      
        if(!goals_per_view || goals_per_view.error){
            Logger.log(goals_per_view.error.message);
            return;
        }

        goals_per_view.items.map(function(el){
            el.accountId = info.accountId;
            el.profileId = info.profileId;
            el.profileName = info.profileName;
        });

        goals = goals.concat(goals_per_view.items);

    });

    goals.forEach(function(goal, index){
        var row = [goal.accountId, goal.profileId, goal.profileName, goal.name, goal.id, goal.active];

        sheet.getRange(index + 2, 1, 1, row.length).setValues([row]);
    });
}

function fillViewsFilter(profiles, sheet){
    var filters = [];
    
    profiles.forEach(function(info){
        var filters_per_view = listFiltersPerView(info.accountId, info.propertyId, info.profileId);
        
        if(filters_per_view.items.length < 1){
            return;
        }
      
        filters_per_view.items.forEach(function(el){
            el.accountId = info.accountId;
            el.profileId = info.profileId;
            el.profileName = info.profileName;
          
            el.filterRef.filter_type = info.filters.filter(function(filtro) {
              return el.filterRef.id === filtro.id;
            })[0].type;
          
        });
        
        filters = filters.concat(filters_per_view.items);

    });
  
    filters.forEach(function(filter, index){
        var row = [filter.accountId, filter.profileId, filter.profileName, filter.rank, filter.filterRef.name, filter.filterRef.filter_type];

        sheet.getRange(index + 2, 1, 1, row.length).setValues([row]);
    });
}

function fillCustomDefinitions(properties, sheet){
    var definitions = [];

    properties.forEach(function(info){
        var customDimensions = listDimensions(info.accountId, info.propertyId);
        var customMetrics = listMetrics(info.accountId, info.propertyId);

        if(customDimensions && !customDimensions.error){
            customDimensions.items.forEach(function(el){
                el.accountId = info.accountId;
                el.propertyId = info.propertyId;
                el.propertyName = info.propertyName;
                el.definition_type = "Dimensão";
              
            });

            definitions = definitions.concat(customDimensions.items);
        }

        if(customMetrics && !customMetrics.error){
            customMetrics.items.forEach(function(el){
                el.accountId = info.accountId;
                el.propertyId = info.propertyId;
                el.propertyName = info.propertyName;
                el.definition_type = "Métrica";
              
            });

            definitions = definitions.concat(customMetrics.items);
        }
    });

    definitions.forEach(function(definition, index){
        var row = [definition.accountId, definition.propertyId, definition.propertyName, definition.definition_type, definition.index, definition.name, definition.scope, definition.active];

        sheet.getRange(index + 2, 1, 1, row.length).setValues([row]);
    });
}

function fillAdWordsInformation(properties, sheet){
    var adwords_links = [];
    var count = 2;

    properties.forEach(function(info){
        var adwords_information =  listAdWordsLinks(info.accountId, info.propertyId);

        if(!adwords_information || adwords_information.error){
            Logger.log(adwords_information.error.message);
            return;
        }

        adwords_information.items.accountId = info.accountId;
        adwords_links = adwords_links.concat(adwords_information.items);
    });
    
    adwords_links.forEach(function(link){
        var property = link.entity.webPropertyRef;
        var adWordsAccounts = link.adWordsAccounts;

        link.adWordsAccounts.forEach(function(ad_account){
            var row = [link.accountId, property.id, property.name, link.id, link.name, ad_account.customerId, ad_account.autoTaggingEnabled];
            sheet.getRange(count, 1, 1, row.length).setValues([row]);

            count++;
        });
    });
}

function fillProfilesInformation(properties, sheet){
    var profiles = [];

    properties.forEach(function(info){
        var filter_information = listViews(info.accountId, info.propertyId);

        if(!filter_information || filter_information.error){
            Logger.log(filter_information.error.message);
            return;
        }
        
        profiles = profiles.concat(filter_information.items);

    });

    profiles.forEach(function(profile, index){
        var row = [profile.accountId, profile.webPropertyId, profile.internalWebPropertyId, profile.id, profile.name, profile.websiteUrl, profile.defaultPage, profile.type, profile.eCommerceTracking, profile.enhancedECommerceTracking, profile.botFilteringEnabled, profile.excludeQueryParameters, profile.siteSearchCategoryParameters, profile.siteSearchQueryParameters, profile.currency, profile.timezone, profile.created, profile.updated];
        
        sheet.getRange(index + 2, 1, 1, row.length).setValues([row]);
    });
}

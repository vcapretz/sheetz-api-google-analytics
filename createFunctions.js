/**
*@author Vitor Capretz <capretzvitor@gmail.com>
*/

function createSheetAdWords(){

    var sheetAdWords = getSheet('Informações de Links com AdWords');
    var headers = ['Account Id', 'Property Id', 'Property Name', 'Link ID', 'Link Name', 'AdWords Account ID', 'Auto Tagging Enabled'];
    
    createHeaders(headers, sheetAdWords);

    return sheetAdWords;
}

function createSheetAccounts(){

    var sheetAccounts = getSheet('Informações das Contas');
    var headers = ['Conta', 'ID da Conta', 'Propriedade', 'ID da Propriedade', 'Tipo Propriedade', 'URL', 'Perfil', 'ID do Perfil', 'Tipo do Perfil'];

    createHeaders(headers, sheetAccounts);

    return sheetAccounts;
}

function createSheetUsers(){

    var sheetUsers = getSheet('Informações dos Usuários');
    var headers = ['ID do Usuário', 'E-mail', 'ID da Conta', 'Conta', 'ID da Propriedade', 'Propriedade', 'ID do Perfil', 'Perfil'];

    createHeaders(headers, sheetUsers);

    return sheetUsers;
}

function createSheetGoals(){
    
    var sheetGoals = getSheet('Informações das Metas');
    var headers = ['ID da Conta', 'ID do Perfil', 'Perfil', 'Nome da Meta', 'ID da Meta', 'Ativa'];

    createHeaders(headers, sheetGoals);

    return sheetGoals;
}

function createSheetCustomDefinitions(){
    
    var sheetDefinitions = getSheet('Definições Customizadas');
    var headers = ['ID da Conta', 'ID do Perfil', 'Perfil', 'Tipo da definição', 'Index', 'Nome', 'Escopo', 'Ativo'];

    createHeaders(headers, sheetDefinitions);

    return sheetDefinitions;
}

function createSheetViews(){

    var sheetViews = getSheet('Informações de Vistas');
    var headers = ['Account Id', 'Property Id', 'Internal Property Id', 'View (Profile) Id', 'View (Profile) Name', 'Website URL', 'Default Page', 'Type',
        'E-commerce Tracking', 'Enhanced E-commerce Tracking', 'Bot Filtering Enabled', 'Exclude Query Parameters', 'Site Search Category Parameters', 'Site Search Query Parameters', 'Currency',
        'Timezone', 'Created', 'Updated'];

    createHeaders(headers, sheetViews);
    
    return sheetViews;
}

function createSheetFilters(){

    var sheetFilters = getSheet('Informações dos Filtros');
    var headers = ['ID da Conta', 'ID do Perfil', 'Perfil', 'Ordem', 'Nome do Filtro', 'Tipo'];

    createHeaders(headers, sheetFilters);

    return sheetFilters;
}

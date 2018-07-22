/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when upgrading.
*/
Ext.require('Ext.chart.*');
Ext.locales = {
    de_DE: {
        "flag": "de",
        "name": "Deutsch (Deutschland)",
        "dateformat": "d.m.Y H:i:s T"
    },
    en_US: {
        "flag": "us",
        "name": "English (USA)",
        "dateformat": "n/j/Y H:i:s T"
    }
};

Ext.getLocaleFlag = function () {
    return Ext.locales["en_US"].flag;
};

Ext.getDateFormat = function () {
    return Ext.locales["en_US"].dateformat;
};

Ext.application({
    name: 'StockManagement',

    views: [
    'ConnectionButton',
    'Viewport',
    'FadingButton',
    'SystemNoticeButton',
    'TimeDisplay'
    ],
    controllers: [
        'Base',
        'App',
        'Security',
        'Stocks'
    ],
    requires: [
    ],
    stores: [
        'StockManagement.store.TimesheetStore',
        'StockManagement.store.StockStore',
        'StockManagement.store.options.CurrencyStore'
    ],
    /**
     * launch is called immediately upon availability of our app
     */
    launch: function (args) {
        var me = this;
        Ext.globalEvents.fireEvent('beforeviewportrender');
    }
});

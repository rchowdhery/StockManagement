//Ext.define('StockManagement.view.Viewport', {
//    extend: 'Ext.container.Viewport',
//    requires:[
//        'Ext.layout.container.Fit',
//        'StockManagement.view.Main'
//    ],

//    layout: {
//        type: 'fit'
//    },

//    items: [{
//        xtype: 'app-main'
//    }]
//});


/**
 * Main application Viewport
 * Uses a {@link Ext.layout.container.Border} layout for ccontent organization
 */
Ext.define('StockManagement.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: [
        'Ext.layout.container.Border',
        'StockManagement.view.layout.North',

        'StockManagement.view.layout.West',
        'StockManagement.view.layout.Center',
        'StockManagement.view.layout.South',
        'StockManagement.view.timesheet.TimesheetList',
        'StockManagement.view.inventory.StockList'
    ],

    layout: {
        type: 'border'
    },
    items: [
        { xtype: 'layout.north' },
        { xtype: 'layout.west' },
        { xtype: 'layout.center' },
        { xtype: 'layout.south' }
    ]
});
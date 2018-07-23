/**
 * Main application Viewport
 * Uses a {@link Ext.layout.container.Border} layout for ccontent organization
 */
Ext.define('StockManagement.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: [
        'StockManagement.view.timesheet.TimesheetList',
        'StockManagement.view.inventory.StockList',
        'StockManagement.view.layout.Center',
        'StockManagement.view.layout.North',
        'StockManagement.view.layout.South',
        'StockManagement.view.layout.West',
        'Ext.layout.container.Border'
    ],

    layout: { type: 'border' },
    items: [
        { xtype: 'layout.north' },
        { xtype: 'layout.west' },
        { xtype: 'layout.center' },
        { xtype: 'layout.south' }
    ]
});
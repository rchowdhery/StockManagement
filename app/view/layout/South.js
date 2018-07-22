/**
 * "Header" for the application (logo, title, etc.)
 */
Ext.define('StockManagement.view.layout.South', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.layout.south',
    region: 'south',
    cls: 'statusbar',
    bbar: Ext.create('StockManagement.view.layout.Statusbar'),
    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            
        });
        me.callParent(arguments);
    }
});
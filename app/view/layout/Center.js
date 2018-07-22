/**
 * Main content region for application
 */
Ext.define('StockManagement.view.layout.Center', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.layout.center',
    region: 'center',
    layout: 'fit',
    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {

        });
        me.callParent(arguments);
    }
});
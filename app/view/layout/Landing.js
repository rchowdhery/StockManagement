/**
 * Generic landing page for application
 */
Ext.define('StockManagement.view.layout.Landing', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.layout.landing',
    title: 'Welcome!',
    bodyPadding: 10,
    requires: [
    'StockManagement.view.dashboard.Clustered'
    ],
    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            items: [

     {
         xtype: 'clustered-column'
     }
            ]
        });
        me.callParent(arguments);
    }
});
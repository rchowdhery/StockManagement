/**
 * "Header" for the application (logo, title, etc.)
 */
Ext.define('StockManagement.view.layout.North', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.layout.north',
    region: 'north',
    bodyPadding: 5,
    html: '<img src="images/0dd2a051754e067e06eb9fcc60288079.png" />',
    cls: 'header',
    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {

        });
        me.callParent(arguments);
    }
});
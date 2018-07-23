/**
 * "Header" for the application (logo, title, etc.)
 */
Ext.define('StockManagement.view.layout.North', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.layout.north',
    region: 'north',
    bodyPadding: 3,
    html: '<img src="images/Primary_logo_on_transparent_339x63.png" />',
    cls: 'header',
    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {

        });
        me.callParent(arguments);
    }
});
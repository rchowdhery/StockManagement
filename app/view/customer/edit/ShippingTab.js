/**
 * Main panel for displaying details for {@link CarTracker.model.Car} records
 */
Ext.define('StockManagement.view.customer.edit.ShippingTab', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.customer.edit.shippingTab',
    layout: 'form',
    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'fieldset',
                    title: 'Shipping Info',
                    collapsible: true,
                    defaults: {
                        layout: 'hbox',
                        margins: '0 10 0 10'
                    }
                }
            ]
        });
        me.callParent(arguments);
    }
})
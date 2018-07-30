/**
 * Form used for creating and editing Staff Members
 */
Ext.define('StockManagement.view.vendor.edit.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.vendor.edit.form',
    id: 'VendorForm',
    requires: [
        'Ext.tab.Panel',
        'Ext.form.FieldContainer',
        'Ext.form.FieldSet',
        'Ext.form.field.Date',
        'Ext.form.field.Text',
        'Ext.form.field.ComboBox',
        'Ext.form.field.HtmlEditor',
        'Ext.form.field.File',
        'Ext.layout.container.Form',
        'Ext.ux.form.ItemSelector',
        'StockManagement.ux.form.field.RemoteComboBox',
        'StockManagement.ux.form.field.plugin.ClearTrigger',
        'StockManagement.view.vendor.edit.InformationTab'
    ],
    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            fieldDefaults: {
                allowBlank: false,
                labelAlign: 'top',
                flex: 1,
                margins: 5
            },
            items: [
                {
                    xtype: 'tabpanel',
                    bodyPadding: 5,
                    deferredRender: false,
                    items: [
                        {
                            xtype: 'vendor.edit.informationTab',
                            title: 'Vendor Information'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});
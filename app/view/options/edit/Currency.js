/**
 * Form used for creating and editing Staff Members
 */
Ext.define('StockManagement.view.options.edit.Currency', {
    extend: 'Ext.form.Panel',
    alias: 'widget.options.edit.currency',
    id: 'CurrencyForm',
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
        'StockManagement.ux.form.field.plugin.ClearTrigger'
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
                    xtype: 'panel',
                    layout: 'form',
                    bodyPadding: 5,
                    deferredRender: false,
                    items: [
                        {
                            xtype: 'fieldcontainer',
                            items: [
                                {
                                    xtype: 'textfield',
                                    name: 'StockNumber',
                                    fieldLabel: 'Product Name'
                                },
                                {
                                    xtype: 'ux.form.field.remotecombobox',
                                    name: 'Model',
                                    fieldLabel: 'Category',
                                    displayField: 'LongName',
                                    valueField: 'ModelID',
                                    //store: {
                                    //    type: 'option.model'
                                    //},
                                    plugins: [
                                        { ptype: 'cleartrigger' }
                                    ],
                                    editable: false,
                                    forceSelection: true
                                }
                            ]
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});
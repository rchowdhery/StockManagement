/**
 * Main panel for displaying details for {@link CarTracker.model.Car} records
 */
Ext.define('StockManagement.view.customer.edit.InformationTab', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.customer.edit.informationTab',
    layout: 'form',
    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'fieldset',
                    title: 'Item Info',
                    collapsible: true,
                    defaults: {
                        layout: 'hbox',
                        margins: '0 10 0 10'
                    },
                    items: [
                        {
                            xtype: 'fieldcontainer',
                            items: [
                                {
                                    xtype: 'textfield',
                                    name: 'CustomerName',
                                    fieldLabel: 'Customer Name'
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'CompanyName',
                                    fieldLabel: 'Company Name'
                                }
                            ]
                        },
                        {
                            xtype: 'fieldcontainer',
                            items: [
                                {
                                    xtype: 'email',
                                    name: 'EmailId',
                                    fieldLabel: 'Email Id'
                                },
                                {
                                    xtype: 'phone',
                                    name: 'PhoneNumber',
                                    fieldLabel: 'Phone Number'
                                }
                            ]
                        },
                        {
                            xtype: 'fieldcontainer',
                            items: [
                                {
                                    xtype: 'textfield',
                                    name: 'TINNumber',
                                    fieldLabel: 'TIN Number'
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'VATNumber',
                                    fieldLabel: 'VAT Number'
                                }
                            ]
                        },
                        {
                            xtype: 'fieldcontainer',
                            items: [
                                {
                                    xtype: 'textfield',
                                    name: 'Street',
                                    fieldLabel: 'Street'
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'ZipCode',
                                    fieldLabel: 'Zip Code'
                                }
                            ]
                        },
                        {
                            xtype: 'fieldcontainer',
                            items: [
                                {
                                    xtype: 'ux.form.field.remotecombobox',
                                    name: 'City',
                                    fieldLabel: 'City',
                                    displayField: 'CityID',
                                    valueField: 'CityID',
                                    plugins: [
                                        { ptype: 'cleartrigger' }
                                    ],
                                    editable: false,
                                    forceSelection: true
                                },
                                {
                                    xtype: 'ux.form.field.remotecombobox',
                                    name: 'State',
                                    fieldLabel: 'State',
                                    displayField: 'StateID',
                                    valueField: 'StateID',
                                    plugins: [
                                        { ptype: 'cleartrigger' }
                                    ],
                                    editable: false,
                                    forceSelection: true
                                },
                            ]
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
})
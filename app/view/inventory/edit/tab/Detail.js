/**
 * Main panel for displaying details for {@link CarTracker.model.Car} records
 */
Ext.define('StockManagement.view.inventory.edit.tab.Detail', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.inventory.edit.tab.detail',
    layout: 'form',
	initComponent: function() {
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
                        },
                        //{
                        //    xtype: 'fieldcontainer',
                        //    items: [
                        //        {
                        //            xtype: 'numberfield',
                        //            name: 'Year',
                        //            fieldLabel: 'Year',
                        //            minValue: 1920
                        //        },
                        //        {
                        //            xtype: 'ux.form.field.remotecombobox',
                        //            name: 'Category',
                        //            fieldLabel: 'Category',
                        //            displayField: 'LongName',
                        //            valueField: 'CategoryID',
                        //            //store: {
                        //            //    type: 'option.category'
                        //            //},
                        //            plugins: [
                        //                { ptype: 'cleartrigger' }
                        //            ],
                        //            editable: false,
                        //            forceSelection: true
                        //        },
                        //        {
                        //            xtype: 'ux.form.field.remotecombobox',
                        //            name: 'Color',
                        //            fieldLabel: 'Color',
                        //            displayField: 'LongName',
                        //            valueField: 'ColorID',
                        //            //store: {
                        //            //    type: 'option.color'
                        //            //},
                        //            plugins: [
                        //                { ptype: 'cleartrigger' }
                        //            ],
                        //            editable: false,
                        //            forceSelection: true
                        //        }
                        //    ]
                        //},
                        {
                            xtype: 'fieldcontainer',
                            items: [
                                {
                                    xtype: 'ux.form.field.remotecombobox',
                                    name: 'Status',
                                    fieldLabel: 'Status',
                                    displayField: 'LongName',
                                    valueField: 'StatusID',
                                    //store: {
                                    //    type: 'option.status'
                                    //},
                                    plugins: [
                                        { ptype: 'cleartrigger' }
                                    ],
                                    editable: false,
                                    forceSelection: true
                                },
                                {
                                    xtype: 'ux.form.field.remotecombobox',
                                    name: 'Status',
                                    fieldLabel: 'Measurement Unit',
                                    displayField: 'LongName',
                                    valueField: 'StatusID',
                                    //store: {
                                    //    type: 'option.status'
                                    //},
                                    plugins: [
                                        { ptype: 'cleartrigger' }
                                    ],
                                    editable: false,
                                    forceSelection: true
                                }

                                
                            ]
                        },
                        //{
                        //    xtype: 'fieldcontainer',
                        //    items: [
                        //        {
                        //            xtype: 'textfield',
                        //            name: 'Fuel',
                        //            fieldLabel: 'Fuel'
                        //        },
                        //        {
                        //            xtype: 'textfield',
                        //            name: 'Engine',
                        //            fieldLabel: 'Engine'
                        //        },
                        //        {
                        //            xtype: 'textfield',
                        //            name: 'Transmission',
                        //            fieldLabel: 'Transmission'
                        //        },
                        //        {
                        //            xtype: 'ux.form.field.remotecombobox',
                        //            name: 'DriveTrain',
                        //            fieldLabel: 'Drive Train',
                        //            displayField: 'LongName',
                        //            valueField: 'DriveTrainID',
                        //            //store: {
                        //            //    type: 'option.drivetrain'
                        //            //},
                        //            plugins: [
                        //                { ptype: 'cleartrigger' }
                        //            ],
                        //            editable: false,
                        //            forceSelection: true
                        //        }
                        //    ]
                        //},
                        {
                            xtype: 'fieldcontainer',
                            items: [
                                {
                                    xtype: 'htmleditor',
                                    name: 'Description',
                                    fieldLabel: 'Description',
                                    height: 120
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    title: 'Sales Info',
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
                                    xtype: 'numberfield',
                                    name: 'StockNumber',
                                    fieldLabel: 'Initial Stock Level:'
                                },
                                {
                                    xtype: 'numberfield',
                                    name: 'StockNumber',
                                    fieldLabel: 'Initial Stock Level'
                                }
                            ]
                        },
                        {
                            xtype: 'fieldcontainer',
                            items: [
                                {
                                    xtype: 'numberfield',
                                    name: 'SalePrice',
                                    fieldLabel: 'Sale Price'
                                   // disabled: !CarTracker.LoggedInUser.inRole( 1 )
                                },
                                {
                                    xtype: 'checkbox',
                                    name: 'SaleDate',
                                    fieldLabel: 'Per Item',
                                    labelSeparator: '',
                                    hideLabel: true,
                                    boxLabel: 'Per Item'
                                  //  disabled: !CarTracker.LoggedInUser.inRole( 1 )
                                }
                            ]
                        },
                        //{
                        //    xtype: 'fieldcontainer',
                        //    items: [
                        //        {
                        //            xtype: 'ux.form.field.remotecombobox',
                        //            name: 'SalesPeople',
                        //            fieldLabel: 'Sales People',
                        //            displayField: 'LastName',
                        //            valueField: 'StaffID',
                        //            //store: {
                        //            //    type: 'staff'
                        //            //},
                        //            plugins: [
                        //                { ptype: 'cleartrigger' }
                        //            ],
                        //            multiSelect: true,
                        //            editable: false,
                        //            forceSelection: true
                        //           // disabled: !CarTracker.LoggedInUser.inRole( 1 )
                        //        }
                        //    ]
                        //}
                    ]
                }
            ]
        });
        me.callParent( arguments );
	}
})
/**
 * Grid for displaying Customer details
 */
Ext.define('StockManagement.view.vendor.VendorList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.vendor.VendorList',
    requires: [
        'Ext.grid.column.Boolean',
        'Ext.grid.column.Date',
        'Ext.grid.column.Number'
    ],
    title: 'Vendors',
    iconCls: 'icon_tag',
    store: 'VendorStore',
    closable: true,
    viewConfig: {
        deferEmptyText: false,
        emptyText: 'Sorry, no records matched your search criteria!',
        markDirty: false
    },

    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            columns: {
                defaults: {},
                items: [
                    {
                        text: 'Vendor Name',
                        dataIndex: 'VendorName',
                        width: 150
                    },
                    {
                        text: 'Company Name',
                        dataIndex: 'CompanyName',
                        width: 150
                    },
                    {
                        text: 'Email Id',
                        dataIndex: 'EmailId',
                        width: 200
                    },
                    {
                        text: 'Phone Number',
                        dataIndex: 'PhoneNumber',
                        width: 170
                    },
                    {
                        text: 'GST Number',
                        dataIndex: 'GSTNumber'
                    },

                    {
                        text: 'Street',
                        dataIndex: 'Street',
                        width: 200
                    },
                    {
                        text: 'City',
                        dataIndex: 'City',
                        width: 100
                    },
                    {
                        text: 'State',
                        dataIndex: 'State',
                        width: 100
                    },
                    {
                        text: 'Zip Code',
                        dataIndex: 'ZipCode',
                        width: 100
                    },
                    {
                        text: 'Country',
                        dataIndex: 'Country',
                        width: 100
                    }
                ]
            },
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    ui: 'footer',
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'add',
                            iconCls: 'icon_add',
                            text: 'Add Vendor'
                        },
                        '-',
                        {
                            xtype: 'button',
                            itemId: 'search',
                            iconCls: 'icon_search',
                            text: 'Search Vendor'
                        },
                        '-',
                        {
                            xtype: 'button',
                            itemId: 'clear',
                            iconCls: 'icon_delete',
                            text: 'Clear Search'
                        }
                    ]
                },
                {
                    xtype: 'pagingtoolbar',
                    ui: 'footer',
                    defaultButtonUI: 'default',
                    dock: 'bottom',
                    displayInfo: true,
                    store: me.getStore()
                }
            ]
        });
        me.callParent(arguments);
    }
});
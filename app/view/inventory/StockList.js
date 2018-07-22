/**
 * Grid for displaying Staff details
 */
Ext.define('StockManagement.view.inventory.StockList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.inventory.StockList',
    requires: [
        'Ext.grid.column.Boolean',
        'Ext.grid.column.Date',
        'Ext.grid.column.Number'
    ],
    title: 'Stocks',
    iconCls: 'icon_tag',
    store: 'StockStore',
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
                        text: 'Prod. Name',
                        dataIndex: 'ProductName',
                        width: 150
                    },
                    {
                        text: 'Prod. Category',
                        dataIndex: 'ProductCategory',
                        width: 100
                    },
                    {
                        text: 'Min. Stock Level',
                        dataIndex: 'MinStockLevel',
                        width: 200
                    },
                    {
                        text: 'Meas. Unit',
                        dataIndex: 'MeasUnit'
                    },
                    {
                        text: 'Status',
                        dataIndex: 'Status'
                    },

                    {
                        text: 'Internal Part No.',
                        dataIndex: 'IntPartNumber',
                        width: 200
                    },
                    {
                        text: 'Description',
                        dataIndex: 'Description',
                        width: 300
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
                            text: 'Add to Inventory'
                        },
                        '-',
                        {
                            xtype: 'button',
                            itemId: 'search',
                            iconCls: 'icon_search',
                            text: 'Search Inventory'
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
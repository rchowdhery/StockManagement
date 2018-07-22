/**
 * Grid for displaying Staff details
 */
Ext.define('StockManagement.view.options.CurrencyList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.options.CurrencyList',
    requires: [
        'Ext.grid.column.Boolean',
        'Ext.grid.column.Date',
        'Ext.grid.column.Number'
    ],
    iconCls: 'web-icon money_dollar',
    store: 'CurrencyStore',
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
                        text: 'Name',
                        dataIndex: 'Name'
                    },
                    {
                        text: 'Symbol',
                        dataIndex: 'Symbol'
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
                            text: 'Add Currency'
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
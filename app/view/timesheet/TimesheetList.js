/**
 * Grid for displaying Staff details
 */
Ext.define('StockManagement.view.timesheet.TimesheetList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.timesheet.TimesheetList',
    requires: [
        'Ext.grid.column.Boolean',
        'Ext.grid.column.Date',
        'Ext.grid.column.Number'
    ],
    title: 'Timesheet',
    iconCls: 'icon_workflow',
    store: 'TimesheetStore',
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
                        text: 'Date',
                        dataIndex: 'Date',
                        width: 100,
                        renderer: Ext.util.Format.dateRenderer('Y-m-d')
                    },
                    {
                        text: 'Emp. Name',
                        dataIndex: 'Emp_Name',
                        width: 100
                    },
                    {
                        text: 'Designation',
                        dataIndex: 'Designation',
                        width: 200
                    },
                    {
                        text: 'In Time',
                        dataIndex: 'In_Time'
                    },
                    {
                        text: 'Out Time',
                        dataIndex: 'Out_Time'
                    },

                    {
                        text: 'Worked Hours (Total)',
                        dataIndex: 'Worked_Hours_Total',
                        width: 200
                    },
                    {
                        text: 'Salary/Day',
                        dataIndex: 'Salary_PerDay'
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
                            itemId: 'search',
                            iconCls: 'icon_search',
                            text: 'Search Users'
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
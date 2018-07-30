/**
 * Main top-level navigation for application
 */
Ext.define('StockManagement.view.layout.Menu', {
    extend: 'Ext.menu.Menu',
    alias: 'widget.layout.menu',
    floating: false,
    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    text: 'Executive Dashboard',
                    itemId: 'dashboard',
                    iconCls: 'icon_dashboard'
                },
                {
                    xtype: 'menuseparator'
                },
                {
                    text: 'Options',
                    iconCls: 'icon_gear',
                    menu: [
                        {
                            text: 'Item Categories',
                            itemId: 'option/categories',
                            iconCls: 'icon_make'
                        },
                        {
                            text: 'Currencies',
                            itemId: 'option/currencies',
                            iconCls: 'web-icon money_dollar'
                        },
                        {
                            text: 'Payment Methods',
                            itemId: 'option/paymentmethods',
                            iconCls: 'icon_category'
                        },
                        {
                            text: 'Payment Terms',
                            itemId: 'option/paymentterms',
                            iconCls: 'icon_color'
                        },
                        {
                            text: 'Sales Types',
                            itemId: 'option/salestypes',
                            iconCls: 'icon_feature'
                        },
                        {
                            text: 'Taxes',
                            itemId: 'option/taxes',
                            iconCls: 'icon_position'
                        },
                        {
                            text: 'Measurement Units',
                            itemId: 'option/measurementunits',
                            iconCls: 'icon_status'
                        },
                        {
                            text: 'Admin Roles',
                            itemId: 'option/adminroles',
                            iconCls: 'icon_role'
                        }
                    ]
                },
                {
                    xtype: 'menuseparator'
                },
                {
                    text: 'Employee Timesheet',
                    itemId: 'timesheetList',
                    iconCls: 'icon_workflow'
                },
                {
                    xtype: 'menuseparator'
                },
                {
                    text: 'Manage Employee',
                    itemId: 'staff22',
                    iconCls: 'icon_category'
                },
                {
                    xtype: 'menuseparator'
                },
                                {
                                    text: 'Manage Stocks',
                                    itemId: 'stockList',
                                    iconCls: 'icon_tag',
                                    menu: [
                                        {
                                            text: 'Sales by Make',
                                            itemId: 'report/make',
                                            iconCls: 'icon_piechart'
                                        },
                                        {
                                            text: 'Sales by Month',
                                            itemId: 'report/month',
                                            iconCls: 'icon_barchart'
                                        }
                                    ]
                                },
                {
                    xtype: 'menuseparator'
                },
                {
                    text: 'Customers',
                    itemId: 'customerList',
                    iconCls: 'icon_user'
                },
                {
                    xtype: 'menuseparator'
                },
                {
                    text: 'Vendors',
                    itemId: 'vendorList',
                    iconCls: 'icon_model'
                },
                {
                    xtype: 'menuseparator'
                },
                {
                    text: 'Company Account',
                    itemId: 'staf42',
                    iconCls: 'icon_barchart'
                },
                {
                    xtype: 'menuseparator'
                },
                                {
                                    text: 'Employee Payslips',
                                    itemId: 'staf434',
                                    iconCls: 'icon_edit'
                                },
                {
                    xtype: 'menuseparator'
                },
                {
                    text: 'Reports',
                    iconCls: 'icon_report',
                    menu: [
                        {
                            text: 'Sales by Make',
                            itemId: 'report/make',
                            iconCls: 'icon_piechart'
                        },
                        {
                            text: 'Sales by Month',
                            itemId: 'report/month',
                            iconCls: 'icon_barchart'
                        }
                    ]
                },
                {
                    xtype: 'menuseparator'
                },
                {
                    text: 'Logout',
                    itemId: 'logout',
                    iconCls: 'icon_login'
                }
            ]
        });
        me.callParent(arguments);
    }
});
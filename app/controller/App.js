/**
 * Main controller for all top-level application functionality
 */
Ext.define('StockManagement.controller.App', {
    extend: 'StockManagement.controller.Base',
    views: [
        'Viewport',
        'layout.Menu',
        'layout.South',
        'layout.Center',
        'layout.Landing',
        'layout.Statusbar',
        'options.CurrencyList',
        'timesheet.TimesheetList'
    ],
    refs: [
        {
            ref: 'Viewport',
            selector: '[xtype=viewport]'
        },
        {
            ref: 'Menu',
            selector: '[xtype=layout.menu]'
        },
        {
            ref: 'CenterRegion',
            selector: '[xtype=layout.center]'
        }
    ],
    init: function () {
        this.listen({
            component: {
                'menu[xtype=layout.menu] menuitem': {
                    click: this.addHistory
                }
            },
            global: {
                aftervalidateloggedin: this.setupApplication
            },
            store: {}
        });
    },
    /**
     * Entry point for our application. Will render the viewport, and do any other setup required for our application
     */
    setupApplication: function () {

        var me = this;
        // create the viewport, effectively creating the view for our application
        // Ext.setLocale('en_US');
        Ext.create('StockManagement.view.Viewport');
        config = {
            xtype: 'layout.landing'
        };
        me.updateCenterRegion(config);
        // init Ext.util.History on app launch; if there is a hash in the url,
        // our controller will load the appropriate content
        //Ext.util.History.init(function(){
        //    var hash = document.location.hash;
        //    me.fireEvent( 'tokenchange', hash.replace( '#', '' ) );
        //})
        // add change handler for Ext.util.History; when a change in the token
        // occurs, this will fire our controller's event to load the appropriate content
        //Ext.util.History.on( 'change', function( token ){
        //    me.fireEvent( 'tokenchange', token );
        //});
    },
    /**
     * Add history token to Ext.util.History
     * @param {Ext.menu.Item} item
     * @param {Object} e
     * @param {Object} opts
     */
    addHistory: function (item, e, opts) {
        var me = this,
            token = item.itemId;
        this.dispatch(token);
        //if (!Ext.isEmpty(token) && token != 'logout') {
        //    Ext.util.History.add(token);
        //}
    },
    /**
     * Handles token change and directs creation of content in center region
     * @param {String} token
     */
    dispatch: function (token) {
        var me = this,
            allowedRole = 1,
            config;
        // switch on token to determine which content to create
        switch (token) {
            case 'timesheetList':
                config = {
                    xtype: 'timesheet.TimesheetList'
                };
                Ext.create('StockManagement.store.TimesheetStore', {
                    pageSize: 10
                });
                break;
            case 'stockList':
                config = {
                    xtype: 'inventory.StockList'
                };
                Ext.create('StockManagement.store.StockStore', {
                    pageSize: 10
                });
                break;
            case 'customerList':
                config = {
                    xtype: 'customer.CustomerList'
                };
                Ext.create('StockManagement.store.CustomerStore', {
                    pageSize: 10
                });
                break;
            case 'vendorList':
                config = {
                    xtype: 'vendor.VendorList'
                };
                Ext.create('StockManagement.store.VendorStore', {
                    pageSize: 10
                });
                break;
                
            case 'option/currencies':
                config = {
                    xtype: 'options.CurrencyList',
                    title: 'Manage Currencies',
                    iconCls: 'web-icon money_dollar',
                    store: Ext.create('StockManagement.store.options.CurrencyStore', {
                        pageSize: 30
                    })
                };
                break;
            case 'option/model':
                config = {
                    xtype: 'option.list',
                    title: 'Manage Car Models',
                    iconCls: 'icon_model',
                    store: Ext.create('CarTracker.store.option.Models', {
                        pageSize: 30
                    }),
                    extraColumns: {
                        text: 'Make',
                        dataIndex: 'Make',
                        renderer: function (value, metaData, record, rowIndex, colIndex, store, view) {
                            return record.get('_Make')
                        },
                        editor: {
                            xtype: 'ux.form.field.remotecombobox',
                            displayField: 'LongName',
                            valueField: 'MakeID',
                            store: {
                                type: 'option.make'
                            },
                            allowBlank: false
                        }
                    }
                };
                break;
            case 'option/category':
                config = {
                    xtype: 'option.list',
                    title: 'Manage Car Categories',
                    iconCls: 'icon_category',
                    store: Ext.create('CarTracker.store.option.Categories', {
                        pageSize: 30
                    })
                };
                break;
            case 'option/color':
                config = {
                    xtype: 'option.list',
                    title: 'Manage Car Colors',
                    iconCls: 'icon_color',
                    store: Ext.create('CarTracker.store.option.Colors', {
                        pageSize: 30
                    })
                };
                break;
            case 'option/feature':
                config = {
                    xtype: 'option.list',
                    title: 'Manage Car Features',
                    iconCls: 'icon_feature',
                    store: Ext.create('CarTracker.store.option.Features', {
                        pageSize: 30
                    })
                };
                break;
            case 'option/position':
                config = {
                    xtype: 'option.list',
                    title: 'Manage Staff Positions',
                    iconCls: 'icon_position',
                    store: Ext.create('CarTracker.store.option.Positions', {
                        pageSize: 30
                    })
                };
                break;
            case 'option/status':
                config = {
                    xtype: 'option.list',
                    title: 'Manage Statuses',
                    iconCls: 'icon_status',
                    store: Ext.create('CarTracker.store.option.Statuses', {
                        pageSize: 30
                    })
                };
                break;
            case 'option/drivetrain':
                config = {
                    xtype: 'option.list',
                    title: 'Manage Drive Trains',
                    iconCls: 'icon_drivetrain',
                    store: Ext.create('CarTracker.store.option.DriveTrains', {
                        pageSize: 30
                    })
                };
                break;
            case 'option/userrole':
                config = {
                    xtype: 'option.list',
                    title: 'Manage Admin Roles',
                    iconCls: 'icon_role',
                    store: Ext.create('CarTracker.store.option.UserRoles', {
                        pageSize: 30
                    })
                };
                break;
            case 'staff':
                config = {
                    xtype: 'staff.list'
                };
                break;
            case 'inventory':
                allowedRole = 2;
                config = {
                    xtype: 'car.list'
                };
                break;
            case 'dashboard':
                allowedRole = 2;
                config = {
                    xtype: 'executive.dashboard'
                };
                break;
            case 'report/make':
                config = {
                    xtype: 'report.make.dashboard',
                    title: 'Sales by Make',
                    iconCls: 'icon_piechart',
                    store: Ext.create('CarTracker.store.report.Makes', {
                        pageSize: 30
                    })
                };
                break;
            case 'report/month':
                config = {
                    xtype: 'report.month.dashboard',
                    title: 'Sales by Month',
                    iconCls: 'icon_barchart',
                    store: Ext.create('CarTracker.store.report.Months', {
                        pageSize: 30000
                    })
                };
                break;
            default:
                config = {
                    xtype: 'layout.landing'
                };
                break;
        }
        // make sure user is in a role sufficient for the accessed section
        // if they aren't just load landing content and display a nasty message
        //if (!CarTracker.LoggedInUser.inRole(allowedRole)) {
        //    config = {
        //        xtype: 'layout.landing'
        //    };
        //    Ext.Msg.alert('Attention', 'You have attempted to access a section of the site that you do not have permissions to access. Naughty, naughty!');
        //}
        //config = {
        //    xtype: 'executive.dashboard'
        //};
        me.updateCenterRegion(config);
    },
    /**
     * Updates center region of app with passed configuration
     * @param {Object} config
     * @private
     */
    updateCenterRegion: function (config) {
        var me = this;
        var center = me.getCenterRegion();
        center.add(config);
        var currentActiveComponent = Ext.ComponentQuery.query(Ext.String.format("[xtype={0}]", config.xtype))[0];
        if (currentActiveComponent) {
            center.setActiveTab(currentActiveComponent);
        }
    },
    /**
     * After a REST response is completed, this method will marshall the response data and inform other methods with relevant data
     * @param {Object} request
     * @param {Boolean} success The actual success of the AJAX request. For success of {@link Ext.data.Operation}, see success property of request.operation
     */
    handleRESTResponse: function (request, success) {
        var me = this,
            rawData = request.proxy.reader.rawData;
        // in all cases, let's hide the body mask
        Ext.getBody().unmask();
        // if proxy success
        if (success) {
            // if operation success
            if (request.operation.wasSuccessful()) {

            }
                // if operation failure
            else {
                // switch on operation failure type
                switch (rawData.type) {
                    case 'validation':
                        me.showValidationMessage(rawData.data, rawData.success, rawData.message, rawData.type);
                        break;
                    case 'notloggedin':
                        me.showLoggedOutMessage(rawData.message);
                        break;
                }
            }
        }
            // otherwise, major failure...
        else {

        }
    },
    /**
     * Displays errors from JSON response and tries to mark offending fields as invalid
     * @param {Array} data
     * @param {Boolean} success
     * @param {String} message
     * @param {String} type
     */
    showValidationMessage: function (data, success, message, type) {
        var me = this,
            errorString = '<ul>';
        // looping over the errors
        for (var i in data) {
            var error = data[i];
            errorString += '<li>' + error.message + '</li>';
            // match form field with same field name
            var fieldMatch = Ext.ComponentQuery.query('field[name=' + error.field + ']');
            // match?
            if (fieldMatch.length) {
                // add extra validaiton message to the offending field
                fieldMatch[0].markInvalid(error.message);
            }
        }
        errorString += '</ul>';
        // display error messages in modal alert
        Ext.Msg.alert(message, errorString);
    },
    /**
     * Displays errors from JSON response and tries to mark offending fields as invalid
     * @param {String} message
     */
    showLoggedOutMessage: function (message) {
        // display error messages in modal alert
        Ext.Msg.alert('Attention', message, function () {
            // reload page
            window.location.reload(true);
        });
    }
});
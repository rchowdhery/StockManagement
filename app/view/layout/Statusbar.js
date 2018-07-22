Ext.define('StockManagement.view.layout.Statusbar', {
    extend: 'Ext.ux.statusbar.StatusBar',
    //alias: 'widget.layout.statusBar',
    defaultText: ("Ready."),
    defaultIconCls: 'x-status-valid',
    iconCls: 'x-status-valid',
    autoClear: 3000,
    requires: [
        "StockManagement.view.ConnectionButton",
        "StockManagement.view.TimeDisplay",
        "StockManagement.view.SystemNoticeButton",
        "StockManagement.view.FadingButton"
    ],
    initComponent: function () {
        this.connectionButton = Ext.create("StockManagement.view.ConnectionButton");
        this.connectionButton.on("click", this.onConnectionButtonClick, this);
        this.timeDisplay = Ext.create("StockManagement.view.TimeDisplay");
        this.currentUserDisplay = Ext.create("Ext.toolbar.TextItem");

        this.showMessageLog = Ext.create("Ext.Button", {
            iconCls: 'web-icon application_osx_terminal',
            cls: 'x-btn-icon',
            handler: function () {
                StockManagement.getApplication().toggleMessageLog();
            }
        });

        this.systemNoticeButton = Ext.create("StockManagement.view.SystemNoticeButton", {
            hidden: true
        });

        Ext.apply(this, {
            items: [
                this.currentUserDisplay,
                { xtype: 'tbseparator' },
                this.timeDisplay,
                { xtype: 'tbseparator' },
                this.showMessageLog,
                { xtype: 'tbseparator' },
                this.connectionButton,
                this.systemNoticeButton

            ]
        });

        this.setDisconnected();

        this.callParent();
    },
    getConnectionButton: function () {
        return this.connectionButton;
    },
    setCurrentUser: function (username) {
        this.currentUserDisplay.setText(("Logged in as") + ": " + "Rajiv Chowdhery");
    },
    startLoad: function (message) {
        if (message !== null) {
            this.showBusy({ text: message, iconCls: "x-status-busy" });
        } else {
            this.showBusy();
        }
    },
    endLoad: function () {
        this.clearStatus({ useDefaults: true });
    },
    setConnected: function () {
        var user = PartKeepr.getApplication().getLoginManager().getUser();

        this.setCurrentUser(user.get("username"));
        this.connectionButton.setConnected();
    },
    setDisconnected: function () {
        this.connectionButton.setDisconnected();
        //this.currentUserDisplay.setText(("Not logged in"));
        this.currentUserDisplay.setText(("Logged in as") + ": " + "Rajiv");
    },
    onConnectionButtonClick: function () {
        var loginManager = PartKeepr.getApplication().getLoginManager();
        if (loginManager.isLoggedIn()) {
            loginManager.logout();
        } else {
            loginManager.login();
        }
    }
});
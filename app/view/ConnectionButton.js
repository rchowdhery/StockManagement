/**
 * Implements a simple connection button which can cycle between disconnected and connected state.
 */
Ext.define('StockManagement.view.ConnectionButton', {
    extend: 'Ext.Button',

    /**
     * The icon class to use when the button is in "connected" state
     * @var string
     */
    connectedIconCls: 'web-icon connect',

    /**
     * The icon class to use when the button is in "disconnected" state
     * @var string
     */
    disconnectedIconCls: 'web-icon disconnect',

    cls: 'x-btn-icon',
    iconCls: 'web-icon disconnect',
    tooltip: "Disconnected",

    setConnected: function ()
    {
        this.setIconCls(this.connectedIconCls);
        this.setTooltip(("Connected"));
    },
    setDisconnected: function ()
    {
        this.setIconCls(this.disconnectedIconCls);
        this.setTooltip(("Disconnected"));
    }
});

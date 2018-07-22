/**
 * Window for adding/editing {@link CarTracker.model.Car} records
 */
Ext.define('StockManagement.view.inventory.edit.Window', {
    extend: 'Ext.window.Window',
    alias: 'widget.inventory.edit.window',
    requires: [
        'StockManagement.view.options.edit.Currency'
    ],
    width: 500,
    modal: true,
    layout: 'fit',
    resizable: true,
    draggable: true,
    iconCls: 'icon_tag',
    windowContent: null,
    constrainHeader: true,
    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: this.windowContent
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    ui: 'footer',
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'cancel',
                            text: 'Cancel',
                            iconCls: 'icon_delete'
                        },
                        '->',
                        {
                            xtype: 'button',
                            itemId: 'save',
                            text: 'Save',
                            iconCls: 'icon_save'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});
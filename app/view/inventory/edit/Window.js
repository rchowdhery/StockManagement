/**
 * Window for adding/editing {@link CarTracker.model.Car} records
 */
Ext.define('StockManagement.view.inventory.edit.Window', {
    extend: 'Ext.window.Window',
    alias: 'widget.inventory.edit.window',
    requires: [
        'StockManagement.view.inventory.edit.Form'
    ],
    iconCls: 'icon_tag',
    width: 500,
    modal: true,
    resizable: true,
    draggable: true,
    constrainHeader: true,
    layout: 'fit',
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'inventory.edit.form'
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
        me.callParent( arguments );
    }
});
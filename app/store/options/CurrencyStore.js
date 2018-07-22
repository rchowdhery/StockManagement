Ext.define('StockManagement.store.options.CurrencyStore', {
    extend: 'Ext.data.Store',
    storeId: 'CurrencyStore',
    autoLoad: true,
    fields: [
        {
            name: 'CurrencyId',
            type: 'number'
        },
        {
            name: 'Name',
            type: 'string'
        },
        {
            name: 'Symbol',
            type: 'string'
        }
    ],
    data: [
        {
            CurrencyId: 1,
            Name: 'INR',
            Symbol: '₨'
        },
        {
            CurrencyId: 2,
            Name: 'USD',
            Symbol: '$'
        },
        {
            CurrencyId: 3,
            Name: 'EUR',
            Symbol: '€'
        },
        {
            CurrencyId: 4,
            Name: 'EGP',
            Symbol: '£'
        },
        {
            CurrencyId: 5,
            Name: 'CNY',
            Symbol: '¥'
        }
    ]
});
Ext.define('StockManagement.store.VendorStore', {
    extend: 'Ext.data.Store',
    storeId: 'VendorStore',
    autoLoad: true,
    fields: [
        {
            name: 'VendorName',
            type: 'string'
        },
        {
            name: 'CompanyName',
            type: 'string'
        },
        {
            name: 'EmailId',
            type: 'string'
        },
        {
            name: 'PhoneNumber',
            type: 'string'
        },
        {
            name: 'GSTNumber',
            type: 'string'
        },
        {
            name: 'Street',
            type: 'string'
        },
        {
            name: 'ZipCode',
            type: 'string'
        },
        {
            name: 'State',
            type: 'string'
        },
        {
            name: 'City',
            type: 'City'
        },
        {
            name: 'Country',
            type: 'string'
        }
    ],
    data: [
        {
            VendorName: 'OLIVIA',
            CompanyName: 'MOSFET',
            EmailId: 'Olivia.gorge@outlook.com',
            PhoneNumber: '011 1234-1254-098',
            GSTNumber: '25000000005',
            Street: '504 Rosewood Lane',
            ZipCode: '31061',
            State: 'Milledgeville',
            City: 'GA',
            Country: 'United State'
        },
        {
            VendorName: 'OLIVIA',
            CompanyName: 'MOSFET',
            EmailId: 'Olivia.gorge@outlook.com',
            PhoneNumber: '011 1234-1254-098',
            GSTNumber: '25000000005',
            Street: '504 Rosewood Lane',
            ZipCode: '31061',
            State: 'Milledgeville',
            City: 'GA',
            Country: 'United State'
        },
        {
            VendorName: 'OLIVIA',
            CompanyName: 'MOSFET',
            EmailId: 'Olivia.gorge@outlook.com',
            PhoneNumber: '011 1234-1254-098',
            GSTNumber: '25000000005',
            Street: '504 Rosewood Lane',
            ZipCode: '31061',
            State: 'Milledgeville',
            City: 'GA',
            Country: 'United State'
        },
        {
            VendorName: 'OLIVIA',
            CompanyName: 'MOSFET',
            EmailId: 'Olivia.gorge@outlook.com',
            PhoneNumber: '011 1234-1254-098',
            GSTNumber: '25000000005',
            Street: '504 Rosewood Lane',
            ZipCode: '31061',
            State: 'Milledgeville',
            City: 'GA',
            Country: 'United State'
        },
        {
            VendorName: 'OLIVIA',
            CompanyName: 'MOSFET',
            EmailId: 'Olivia.gorge@outlook.com',
            PhoneNumber: '011 1234-1254-098',
            GSTNumber: '25000000005',
            Street: '504 Rosewood Lane',
            ZipCode: '31061',
            State: 'Milledgeville',
            City: 'GA',
            Country: 'United State'
        },
        {
            VendorName: 'OLIVIA',
            CompanyName: 'MOSFET',
            EmailId: 'Olivia.gorge@outlook.com',
            PhoneNumber: '011 1234-1254-098',
            GSTNumber: '25000000005',
            Street: '504 Rosewood Lane',
            ZipCode: '31061',
            State: 'Milledgeville',
            City: 'GA',
            Country: 'United State'
        }
    ]
});
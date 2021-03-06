﻿Ext.define('StockManagement.store.CustomerStore', {
    extend: 'Ext.data.Store',
    storeId: 'CustomerStore',
    autoLoad: true,
    fields: [
        {
            name: 'CustomerName',
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
            name: 'TINNumber',
            type: 'string'
        },
        {
            name: 'VATNumber',
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
            CustomerName: 'OLIVIA',
            CompanyName: 'MOSFET',
            EmailId: 'Olivia.gorge@outlook.com',
            PhoneNumber: '011 1234-1254-098',
            TINNumber: '25000000005',
            VATNumber: 'A12300',
            Street: '504 Rosewood Lane',
            ZipCode: '31061',
            State: 'Milledgeville',
            City: 'GA',
            Country: 'United State'
        },
        {
            CustomerName: 'OLIVIA',
            CompanyName: 'MOSFET',
            EmailId: 'Olivia.gorge@outlook.com',
            PhoneNumber: '011 1234-1254-098',
            TINNumber: '25000000005',
            VATNumber: 'A12300',
            Street: '504 Rosewood Lane',
            ZipCode: '31061',
            State: 'Milledgeville',
            City: 'GA',
            Country: 'United State'
        },
        {
            CustomerName: 'OLIVIA',
            CompanyName: 'MOSFET',
            EmailId: 'Olivia.gorge@outlook.com',
            PhoneNumber: '011 1234-1254-098',
            TINNumber: '25000000005',
            VATNumber: 'A12300',
            Street: '504 Rosewood Lane',
            ZipCode: '31061',
            State: 'Milledgeville',
            City: 'GA',
            Country: 'United State'
        },
        {
            CustomerName: 'OLIVIA',
            CompanyName: 'MOSFET',
            EmailId: 'Olivia.gorge@outlook.com',
            PhoneNumber: '011 1234-1254-098',
            TINNumber: '25000000005',
            VATNumber: 'A12300',
            Street: '504 Rosewood Lane',
            ZipCode: '31061',
            State: 'Milledgeville',
            City: 'GA',
            Country: 'United State'
        },
        {
            CustomerName: 'OLIVIA',
            CompanyName: 'MOSFET',
            EmailId: 'Olivia.gorge@outlook.com',
            PhoneNumber: '011 1234-1254-098',
            TINNumber: '25000000005',
            VATNumber: 'A12300',
            Street: '504 Rosewood Lane',
            ZipCode: '31061',
            State: 'Milledgeville',
            City: 'GA',
            Country: 'United State'
        },
        {
            CustomerName: 'OLIVIA',
            CompanyName: 'MOSFET',
            EmailId: 'Olivia.gorge@outlook.com',
            PhoneNumber: '011 1234-1254-098',
            TINNumber: '25000000005',
            VATNumber: 'A12300',
            Street: '504 Rosewood Lane',
            ZipCode: '31061',
            State: 'Milledgeville',
            City: 'GA',
            Country: 'United State'
        }
    ]
});
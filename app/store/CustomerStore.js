Ext.define('StockManagement.store.CustomerStore', {
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
            EmailId: '10',
            PhoneNumber: 'Pieces',
            TINNumber: 'New',
            VATNumber: 'A12300',
            Street: '',
            ZipCode: '',
            State: '',
            City: '',
            Country
        },
        {
            ProductName: '2N7000G',
            ProductCategory: 'NPN',
            MinStockLevel: '20',
            MeasUnit: 'Centimeter',
            Status: 'Old',
            IntPartNumber: 'A33300',
            Description: 'MOSFET; N-Ch; RRS 60VDC; RDS(ON) 5 Ohms; ID 200mA; TO-92 (TO-226); PD 350mW; -55degc'
        },
        {
            ProductName: '2N7000G',
            ProductCategory: 'MOSFET',
            MinStockLevel: '50',
            MeasUnit: 'Pieces',
            Status: 'New',
            IntPartNumber: 'A12300',
            Description: 'MOSFET; N-Ch; VDSS 60VDC; RDS(ON) 5 Ohms; ID 200mA; TO-92 (TO-226); PD 350mW; -55degc'
        },
        {
            ProductName: '2N7000G',
            ProductCategory: 'MOSFET',
            MinStockLevel: '19',
            MeasUnit: 'Pieces',
            Status: 'Outdated',
            IntPartNumber: 'A12300',
            Description: 'MOSFET; N-Ch; VDSS 60VDC; RDS(ON) 5 Ohms; ID 200mA; TO-92 (TO-226); PD 350mW; -55degc'
        },
        {
            ProductName: '2N7000G',
            ProductCategory: 'MOSFET',
            MinStockLevel: '12',
            MeasUnit: 'Pieces',
            Status: 'Repaired',
            IntPartNumber: 'A12300',
            Description: 'MOSFET; N-Ch; VDSS 60VDC; RDS(ON) 5 Ohms; ID 200mA; TO-92 (TO-226); PD 350mW; -55degc'
        },
        {
            ProductName: '2N7000G',
            ProductCategory: 'NPN',
            MinStockLevel: '20',
            MeasUnit: 'Centimeter',
            Status: 'Old',
            IntPartNumber: 'A33300',
            Description: 'MOSFET; N-Ch; RRS 60VDC; RDS(ON) 5 Ohms; ID 200mA; TO-92 (TO-226); PD 350mW; -55degc'
        },
        {
            ProductName: '2N7000G',
            ProductCategory: 'MOSFET',
            MinStockLevel: '50',
            MeasUnit: 'Pieces',
            Status: 'New',
            IntPartNumber: 'A12300',
            Description: 'MOSFET; N-Ch; VDSS 60VDC; RDS(ON) 5 Ohms; ID 200mA; TO-92 (TO-226); PD 350mW; -55degc'
        },
        {
            ProductName: '2N7000G',
            ProductCategory: 'MOSFET',
            MinStockLevel: '19',
            MeasUnit: 'Pieces',
            Status: 'Outdated',
            IntPartNumber: 'A12300',
            Description: 'MOSFET; N-Ch; VDSS 60VDC; RDS(ON) 5 Ohms; ID 200mA; TO-92 (TO-226); PD 350mW; -55degc'
        }
    ]
});
Ext.define('StockManagement.store.StockStore', {
    extend: 'Ext.data.Store',
    storeId: 'StockStore',
    autoLoad: true,
    fields: [
        {
            name: 'ProductName',
            type: 'string'
        },
        {
            name: 'ProductCategory',
            type: 'string'
        },
        {
            name: 'MinStockLevel',
            type: 'string'
        },
        {
            name: 'MeasUnit',
            type: 'string'
        },
        {
            name: 'Status',
            type: 'string'
        },
        {
            name: 'IntPartNumber',
            type: 'string'
        },
        {
            name: 'Description',
            type: 'string'
        }
    ],
    data: [
        {
            ProductName: '2N7000G',
            ProductCategory: 'MOSFET',
            MinStockLevel: '10',
            MeasUnit: 'Pieces',
            Status: 'New',
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
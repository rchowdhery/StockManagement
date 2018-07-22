Ext.define('StockManagement.store.TimesheetStore', {
    extend: 'Ext.data.Store',
    storeId: 'TimesheetStore',
    autoLoad: true,
    fields: [
        {
            name: 'Date',
            type: 'date'
        }, {
            name: 'Emp_Name',
            type: 'string'
        }, {
            name: 'Designation',
            type: 'string'
        }, {
            name: 'In_Time',
            type: 'string'
        }, {
            name: 'Out_Time',
            type: 'string'
        },
            {
                name: 'Worked_Hours_Total',
                type: 'number'
            }, {
                name: 'Salary_PerDay',
                type: 'number'
            }
    ],
    data: [
        {
            Date: '04/11/2010',
            Emp_Name: 'Rajiv',
            Designation: 'Senior Consultant',
            In_Time: '09:30',
            Out_Time: '18:30',
            Worked_Hours_Total: 24,
            Salary_PerDay: 2000
        }, {
            Date: '04/11/2010',
            Emp_Name: 'Neeraj',
            Designation: 'Senior Consultant',
            In_Time: '09:40',
            Out_Time: '18:50',
            Worked_Hours_Total: 44,
            Salary_PerDay: 3000
        }, {
            Date: '04/11/2010',
            Emp_Name: 'Smith',
            Designation: 'Delivery Manager',
            In_Time: '08:50',
            Out_Time: '15:40',
            Worked_Hours_Total: 34,
            Salary_PerDay: 2500
        },
            {
                Date: '04/11/2010',
                Emp_Name: 'Rajiv',
                Designation: 'Senior Consultant',
                In_Time: '09:30',
                Out_Time: '18:30',
                Worked_Hours_Total: 24,
                Salary_PerDay: 2000
            }, {
                Date: '04/11/2010',
                Emp_Name: 'Neeraj',
                Designation: 'Senior Consultant',
                In_Time: '09:40',
                Out_Time: '18:50',
                Worked_Hours_Total: 44,
                Salary_PerDay: 3000
            }, {
                Date: '04/11/2010',
                Emp_Name: 'Smith',
                Designation: 'Delivery Manager',
                In_Time: '08:50',
                Out_Time: '15:40',
                Worked_Hours_Total: 34,
                Salary_PerDay: 2500
            },
            {
                Date: '04/11/2010',
                Emp_Name: 'Rajiv',
                Designation: 'Senior Consultant',
                In_Time: '09:30',
                Out_Time: '18:30',
                Worked_Hours_Total: 24,
                Salary_PerDay: 2000
            }, {
                Date: '04/11/2010',
                Emp_Name: 'Neeraj',
                Designation: 'Senior Consultant',
                In_Time: '09:40',
                Out_Time: '18:50',
                Worked_Hours_Total: 44,
                Salary_PerDay: 3000
            }, {
                Date: '04/11/2010',
                Emp_Name: 'Smith',
                Designation: 'Delivery Manager',
                In_Time: '08:50',
                Out_Time: '15:40',
                Worked_Hours_Total: 34,
                Salary_PerDay: 2500
            },
            {
                Date: '04/11/2010',
                Emp_Name: 'Rajiv',
                Designation: 'Senior Consultant',
                In_Time: '09:30',
                Out_Time: '18:30',
                Worked_Hours_Total: 24,
                Salary_PerDay: 2000
            }, {
                Date: '04/11/2010',
                Emp_Name: 'Neeraj',
                Designation: 'Senior Consultant',
                In_Time: '09:40',
                Out_Time: '18:50',
                Worked_Hours_Total: 44,
                Salary_PerDay: 3000
            }, {
                Date: '04/11/2010',
                Emp_Name: 'Smith',
                Designation: 'Delivery Manager',
                In_Time: '08:50',
                Out_Time: '15:40',
                Worked_Hours_Total: 34,
                Salary_PerDay: 2500
            }]
});
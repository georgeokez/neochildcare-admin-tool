import React from 'react'
import DataGridTable from 'src/components/units/DataGridTable';

const CustomerResults = ({customers}) => {

const columns= [
  { field: 'id', headerName: 'ID', width: 75 },
  { field: 'firstname', headerName: 'First name', width: 140 },
  { field: 'lastname', headerName: 'Last name', width: 120 },
  { field: 'email', headerName: 'Email', width:250 },
  {
    field: 'fullName',
    headerName: 'Full name',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue('firstname') || ''} ${params.getValue('lastname') || ''}`,
  },
  { field: 'phone', headerName: 'Phone Number', width:150 },
  { field: 'createdAt', headerName: 'Date Created', width:150 },
  { field: 'updatedAt', headerName: 'Date Updated', width:150 },
  { field: 'customerPaid', headerName: 'Customer Paid', width:100 },
  { field: 'followUpEmailSent', headerName: 'Follow Up Email Sent', width:100 },
  { field: 'followUpCallSent', headerName: 'Follow Up Call Sent', width:100 },
  { field: 'nutritionistScheduled', headerName: 'Nutritionist Scheduled', width:100 },
  { field: 'nutritionalAssesment', headerName: 'Nutritionist Assessment', width:100 },
];


const rows = customers;

  return (
    <div>
       <DataGridTable 
        columns={columns} 
        rows = {rows} 
        pageSize = {10}/>
    </div>
  )
}

export default CustomerResults

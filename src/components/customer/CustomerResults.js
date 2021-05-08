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
  { field: 'promoCode', headerName: 'Promo Code', width:150 },
  { field: 'phone', headerName: 'Phone Number', width:150 },
  { field: 'createdAt', headerName: 'Date Created', width:150 },
  { field: 'updatedAt', headerName: 'Date Updated', width:150 },
  { field: 'customerPaid', headerName: 'Customer Paid', width:150 },
  { field: 'followUpEmailSent', headerName: 'Follow Up Email Sent', width:220 },
  { field: 'followUpCallSent', headerName: 'Follow Up Call Sent', width:180 },
  { field: 'nutritionistScheduled', headerName: 'Nutritionist Scheduled', width:220 },
  { field: 'nutritionalAssesment', headerName: 'Nutritionist Assessment', width:180 },
  { field: 'remark', headerName: 'Remark', width:250 },
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

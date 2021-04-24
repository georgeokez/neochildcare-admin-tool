import React from 'react'
import DataGridTable from 'src/components/samples/DataGridTable';

const DoctorListResults = ({doctors}) => {



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
  { field: 'profession', headerName: 'Profession', width:180 },
  { field: 'daysAvailable', headerName: 'Days Available', width:400 },
];


const rows = doctors;

  return (
    <div>
       <DataGridTable 
        columns={columns} 
        rows = {rows} 
        pageSize = {10}/>
    </div>
  )
}

export default DoctorListResults

import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

export default function DataGridTable({columns, rows, pageSize}) {
  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid 
        rows={rows} 
        columns={columns} 
        pageSize={pageSize} 
        autoHeight />
    </div>
  );
}
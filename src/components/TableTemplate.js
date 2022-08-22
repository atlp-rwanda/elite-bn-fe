import React from 'react'
import { DataGrid,GridToolbar } from '@mui/x-data-grid';
import Box from '@mui/material/Box';


const TableTemplate = ({columns,rows,...rest}) => {


          return (
        <Box sx={{ height: 500, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={7}
            rowsPerPageOptions={[7]}
            checkboxSelection
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
            components={{
                Toolbar: GridToolbar,
              }}
          />
        </Box>
      );
    }
export default TableTemplate

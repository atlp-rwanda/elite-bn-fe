
import React,{useEffect, useState,Component} from 'react'
import { Grid, Button} from '@material-ui/core';
import { getListItemSecondaryActionClassesUtilityClass, Typography } from '@mui/material';
import Chip, { ChipProps } from "@material-ui/core/Chip";
import {DoneTwoTone, DoneOutline, Block,Edit} from '@mui/icons-material';



import TableTemplate from '../src/components/TableTemplate';
import api from '../utils/api'
import Search from '../src/components/Search';




function Table() {
const [dataRows, setDataRows]=useState([])

  const jwt= localStorage.getItem("jwt")
  const getData=async()=>{
 const requests= await api.get("api/v1/trip/allTrips",{headers: {jwt}})
 setDataRows(requests&&requests.data&&requests.data.getAlltrips?requests.data.getAlltrips:[])
 console.log("The requests we have are:", requests)
  }

useEffect(() => {
getData()
}, [])

    const handleApprove=()=>console.log("I am approving")

    const columns = [
      { field: 'newId', headerName: 'ID', width: 90 },
      {
        field: 'requesterName',
        headerName: 'Requester',
        width: 200,
        editable: true,
      },
      {
        field: 'departDate',
        headerName: 'Departure Time',
        width: 150,
        editable: true,
      },
      {
        field: 'returnDate',
        headerName: 'Return Date',
        width: 100,
        editable: true,
      },
      {
        field: 'tripReasons',
        headerName: 'Trip Reasons',
        width: 200,
       
      },
      {
        field: 'from',
        headerName: 'From',
      },
      {
        field: 'location',
        headerName: 'Destination',
      },

{
      field: 'tripStatus',
      headerName: 'Trip Status',
      width: 100,
      editable: true,
      renderCell: (params) => {
        return <Chip variant="outlined" size="small" 
         label={params.row.tripStatus?params.row.tripStatus:"No Status"} 
         style={{
            backgroundColor: params.row.tripStatus=='pending'? 'yellow':params.row.tripStatus=='rejected'?'red':'green'
         }}
         />;
      }
   
    },


{
    field: 'actions',
    headerName: 'Actions',
    width: 250,
    editable: true,
    renderCell: (params) => {
        return (
            <Grid container>
            <Grid item>
             <Button 
             onClick={handleApprove}
             >
              <DoneOutline/>
             </Button>
            </Grid>
            <Grid item>
             <Button 
             onClick={handleApprove}
             >
              <Block/>
             </Button>
            </Grid>

            <Grid item>
             <Button 
             onClick={handleApprove}
             >
              <Edit/>
             </Button>
            </Grid>
            </Grid>
      )
      }
}
    ];
dataRows.map((row, index)=>{
  row.id=index
  row.newId=index+1
  row.requesterName=`${row.requester.firstName} ${row.requester.lastName}`
  row.location=row.destination.locationName
})
    


  return (
    <div>
      <Typography 
      variant='h5' 
      color='primary'
      sx={{mt: 2, mb: 2}} 
     >
      Travel Requests
    </Typography>

    <div style={{width:700}}
    ><Search/></div>
   

        
    <TableTemplate
      columns={columns} 
      rows={dataRows}
    />
    </div>
  )
}


export default Table




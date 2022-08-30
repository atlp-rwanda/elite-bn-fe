import React, { useState } from 'react'
import TableTemplate from '../src/components/TableTemplate'
import { Grid, Button } from '@material-ui/core'
import { Alert, getListItemSecondaryActionClassesUtilityClass } from '@mui/material'
import Chip, { ChipProps } from '@material-ui/core/Chip'
import { DoneTwoTone, DoneOutline, Block, Edit } from '@mui/icons-material'
import axios from 'axios'
import api from './api'
import { useEffect } from 'react'
import { withTheme } from 'styled-components'

const TravelRequests = () => {
  const [rows, setRows] = useState([])
  const [message, setMessage] = useState('')

  useEffect(() => {
    FetchRequests()
  }, [])

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'requester',
      headerName: 'requester',
      width: 200,
      editable: true,
    },
    {
      field: 'departDate',
      headerName: 'departDate',
      width: 100,
      editable: true,
    },
    {
      field: 'returnDate',
      headerName: 'returnDate',
      type: 'number',
      width: 100,
      editable: true,
    },
    {
      field: 'tripReasons',
      headerName: 'tripReasons',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 200,
    },
    {
      field: 'location',
      headerName: 'location',
      description: 'This column has a value getter and is not sortable.',
      // sortable: false,
      width: 150,
      editable: true,
    },

    {
      field: 'tripStatus',
      headerName: 'tripStatus',
      width: 200,
      editable: true,
    },

    {
      field: 'actions',
      headerName: 'actions',
      width: 300,
      editable: true,
      renderCell: (params) => {
        return (
          <Grid container>
            <Grid item>
              <Button>
                <DoneOutline />
              </Button>
            </Grid>
            <Grid item>
              <Button onClick={() => HandleReject(params.row.id)}>
                <Block />
              </Button>
            </Grid>
          </Grid>
        )
      },
    },
  ]

  const HandleReject = async (id) => {
    try {
      const token = localStorage.getItem('jwt')

      await api.patch(`api/v1/request/reject/${id}`, {}, { headers: { token } })
      setMessage(<Alert>Request successfully rejected</Alert>)
    } catch (err) {
      setMessage(<Alert severity="error">{err.response.data.response}</Alert>)
      console.log(err)
    }
  }

  const FetchRequests = async () => {
    try {
      const token = localStorage.getItem('jwt')

      const requests = await api.get('api/v1/trip/allTrips', {
        headers: { token: `Bearer ${token}` },
      })
      const data = requests.data.getAlltrips

      const newRows = data.map((element, index) => {
        return {
          id: element.id,
          from: element.from,
          departDate: element.departDate,
          returnDate: element.returnDate,
          tripReasons: element.tripReasons,
          tripType: element.tripType,
          tripStatus: element.tripStatus,
          requester: element.requester.firstName,
          location: element.destination.locationName,
        }
      })
      setRows(newRows)
    } catch (err) {
      err.response.data.response
        ? setMessage(<Alert severity="error">{err.response.data.response}</Alert>)
        : setMessage(<Alert severity="error">Unauthorized login again</Alert>)
    }
  }

  return (
    <div>
      {message}
      <TableTemplate columns={columns} rows={rows} />
    </div>
  )
}

export default TravelRequests

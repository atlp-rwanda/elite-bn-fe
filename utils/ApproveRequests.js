/* eslint-disable */
import React, { useState } from 'react'
import TableTemplate from '../src/components/TableTemplate'
import { Grid, Button } from '@material-ui/core'
import { Alert } from '@mui/material'
import { DoneTwoTone, DoneOutline, Block, Edit } from '@mui/icons-material'
import axios from 'axios'
import api from './api'
import { useEffect } from 'react'
import { withTheme } from 'styled-components'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { response } from 'msw'
const TravelRequests = () => {
    const [rows, setRows] = useState([])
    const [message, setMessage] = useState('')
    const [open, setOpen] = useState(false)
    const [selectedId, setSelectedId] = useState(0)

    useEffect(() => {
        async () => {
            try {
                const token = localStorage.getItem('jwt')
                const requests = await api.get('api/v1/trip/allTrips', {
                    headers: { token: `Bearer ${token}` },
                })

                const data = requests.data.getAlltrips
                const newRows = data.map((element, index) => {
                    return {
                        id: index,
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
                    : setMessage(<Alert severity="error">Token expired please login again</Alert>)
                console.log(err)
            }
        }
    }, [])
    const handleApprove = () => {
        HandleApprove1(selectedId)
        setTimeout(() => {
            handleClose()
        }, 1000)
    }
    const columns = [
        { field: 'id', headerName: 'TripId', width: 90 },
        {
            field: 'requester',
            headerName: 'Requester',
            width: 200,
            editable: true,
        },
        {
            field: 'departDate',
            headerName: 'DEPARTURE DATE',
            width: 200,
            editable: true,
        },
        {
            field: 'returnDate',
            headerName: 'RETURN DATE',
            width: 200,
            editable: true,
        },
        {
            field: 'from',
            headerName: 'LOCATION FROM',
            description: 'This column has a value getter and is not sortable.',
            width: 200,
            editable: true,
        },
        {
            field: 'destination',
            headerName: 'DESTINATION',
            description: 'This column has a value getter and is not sortable.',
            width: 200,
            editable: true,
        },
        {
            field: 'tripReasons',
            headerName: 'TRIP REASONS',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 200,
        },
        {
            field: 'tripStatus',
            headerName: 'TRIP STATUS',
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
                            <Button onClick={() => console}>
                            {/* <Button onClick={() => handleClickOpen(params.row.id)}> */}
                                <DoneOutline />
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button >
                                <Block />
                            </Button>
                        </Grid>
                    </Grid>
                )
            },
        },
    ]
    const HandleApprove1 = async (id) => {
        try {
            const token = localStorage.getItem('jwt')
            await axios.patch(
                `${process.env.REACT_APP_BACKEND_URL}api/v1/request/approve/${id}`,
                {},
                { headers: { token } }
            )
            setMessage(<Alert>APPROVED</Alert>)
        } catch (err) {
            setMessage(<Alert severity="error">{err.response.data.response}</Alert>)
            console.log(err)
        }
    }
    //   const FetchRequests = async () => {
    //     try {
    //       const token = localStorage.getItem('jwt')
    //       const requests = await api.get('api/v1/trip/allTrips', {
    //         headers: { token: `Bearer ${token}` },
    //       })

    //       const data = requests.data.getAlltrips
    //       const newRows = data.map((element, index) => {
    //         return {
    //           id: index,
    //           from: element.from,
    //           departDate: element.departDate,
    //           returnDate: element.returnDate,
    //           tripReasons: element.tripReasons,
    //           tripType: element.tripType,
    //           tripStatus: element.tripStatus,
    //           requester: element.requester.firstName,
    //           location: element.destination.locationName,
    //         }
    //       })
    //       setRows(newRows)
    //     } catch (err) {
    //       err.response.data.response
    //         ? setMessage(<Alert severity="error">{err.response.data.response}</Alert>)
    //         : setMessage(<Alert severity="error">Token expired please login again</Alert>)
    //       console.log(err)
    //     }
    //   }
    const handleClose = () => {
        setOpen(false)
    }
    const handleClickOpen = (id) => {
        setSelectedId(id)
        setOpen(true)
    }
    const console = () => {
        console.log('Hollllaaaaaaa')
    }
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title"></DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to approve this trip ?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleApprove} autoFocus>
                        Approve
                    </Button>
                </DialogActions>
            </Dialog>
            {message}
            <TableTemplate columns={columns} rows={rows} />
        </div>
    )
}
export default TravelRequests

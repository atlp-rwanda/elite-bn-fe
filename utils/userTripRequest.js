import React, { useState, useEffect } from 'react';
import { Grid, Button } from '@material-ui/core';
import { Alert, getListItemSecondaryActionClassesUtilityClass } from '@mui/material';
import Chip, { ChipProps } from '@material-ui/core/Chip';
import {
  DoneTwoTone, DoneOutline, Block, Edit
} from '@mui/icons-material';
import axios from 'axios';
import { withTheme } from 'styled-components';
import api from './api';
import TableTemplate from '../src/components/TableTemplate';

const TravelRequests = () => {
  const [rows, setRows] = useState([]);
  const [message, setMessage] = useState('');
  useEffect(() => {
    FetchRequests();
  }, []);
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
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
  ];
  const FetchRequests = async () => {
    try {
      const token = localStorage.getItem('jwt');
      const reqts = await axios.get(`${process.env.REACT_APP_BACKEND_URL}api/v1/trip/`, {
        headers: { token },
      });
      const data = reqts.data.getTrip;
      const newRows = data.map((element, index) => ({
        id: element.id,
        from: element.from,
        departDate: element.departDate,
        returnDate: element.returnDate,
        tripReasons: element.tripReasons,
        tripType: element.tripType,
        tripStatus: element.tripStatus,
        requester: element.requester.firstName,
        destination: element.destination.locationName,
        action: 'fg',
      }));
      setRows(newRows);
      setMessage(<Alert>SUCCESS</Alert>);
    } catch (err) {
      setMessage(<Alert severity="error">{err.response.data.response}</Alert>);
    }
  };
  return (
    <div>
      {message}
      <TableTemplate columns={columns} rows={rows} />
    </div>
  );
};
export default TravelRequests;

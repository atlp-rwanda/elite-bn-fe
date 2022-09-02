import * as React from 'react';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import { Grid } from '@material-ui/core';
import { TripRequest } from '../components/TripPage';
import api from '../../utils/api';

const Item = styled(Paper)(({ theme }) => ({

  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const theme = createTheme({
  palette: {
    neutral: {
      main: '#FFC107',
      contrastText: '#fff',
    },
  },
});

export default function Requests() {
  const [trips, getTrip] = React.useState('');

  React.useEffect(() => {
    getRequestedTrip();
  }, []);

  const getRequestedTrip = async () => {
    try {
      const token = localStorage.getItem('jwt');
      const tripsA = await api.get('api/v1/trip/', {
        headers: { token },
      });
      const allTrip = tripsA.data.getTrip;
      console.log(allTrip);
      getTrip(allTrip);
    } catch (err) {
      console.log(err);
    }
  };

  const [page, setPage] = React.useState(1);

  const handlePageChange = (e, p) => {
    setPage(p);
  };

  return (
    <Container fixed >
      <Item className="book-grid" >
          <Stack spacing={2} direction="row" sx={{ pt: 3, display: { justifyContent: 'space-between' } }}>
          <ThemeProvider theme={theme}>
            <Button variant="contained" color="neutral" className='button'>Create a trip request</Button>
          </ThemeProvider>
          </Stack>
        <Typography variant="h6" component="h6" pt={8} sx={{ textAlign: 'center', fontWeight: 800, fontSize: 30 }}>
          Trip requests you made
        </Typography>

        <TripRequest trips={trips}/>

      </Item>
      <Grid container justifyContent="center" alignItems='center' direction='column'>
        <Pagination count={5} color="primary" onChange={handlePageChange} style={{ marginTop: '2em', marginBottom: '2em' }}> </Pagination>
      </Grid>

    </Container>

  );
}

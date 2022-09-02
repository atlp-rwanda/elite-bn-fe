import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { Typography } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import api from '../../utils/api'

const theme = createTheme({
  palette: {
    neutral: {
      main: '#FFC107',
      contrastText: '#fff',
    },
  },
})

export function TripRequest(props) {
  const displayTrips = (props) => {
    const { menu, trips } = props

    const getComments = async (id, index) => {
      try {
        const token = localStorage.getItem('jwt')
        const tripComments = await api.get(`api/v1/trip/${id}/comments`, {
          headers: { token },
        })
        trips[index][`commentsCount`] = tripComments.data.tripComment
      } catch (err) {
        console.log(err)
      }
    }

    if (trips.length > 0) {
      return trips.map((trip, index) => {
        getComments(trip.id, index)

        return (
          <Card
            sx={{
              display: 'flex',
              boxShadow: 'none',
              padding: '30px 0',
              borderRadius: 0,
              borderBottom: '5px solid #CCCCCC',
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: 300, borderRadius: '10px' }}
              image={trip.accommodation.accomodationImage}
              alt="Heza Accommodation"
            />
            <Box
              sx={{ display: 'flex', flexDirection: 'column', width: '70%', padding: '0 0 0 10px' }}
            >
              <CardContent
                sx={{ padding: '0 0 15px 0', display: 'flex', justifyContent: 'space-between' }}
              >
                <Box>
                  <Typography
                    component="div"
                    variant="h6"
                    color="primary.main"
                    sx={{ textAlign: 'start' }}
                  >
                    {trip.accommodation.accomodationName}
                  </Typography>
                  <Typography
                    variant="p"
                    color="text.secondary"
                    component="div"
                    sx={{ textAlign: 'start' }}
                  >
                    <ion-icon name="location"></ion-icon>
                    {trip.destination.locationName}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      border: `1px solid green`,
                      color: 'green',
                      borderRadius: '20px',
                      padding: '2px 10px',
                      fontSize: '0.8rem',
                      textTransform: 'none',
                    }}
                  >
                    {trip.tripStatus}
                  </Typography>
                </Box>
              </CardContent>

              <Box sx={{ float: 'left', pl: 1, pb: 2, textAlign: 'start', maxWidth: '500px' }}>
                <Typography
                  variant="p"
                  color="text.secondary"
                  component="div"
                  sx={{ textAlign: 'start', display: 'inline-block', paddingRight: '30px' }}
                >
                  <span style={{ color: 'black' }}>From: </span>
                  {trip.from}
                </Typography>
                <Typography
                  variant="p"
                  color="text.secondary"
                  component="div"
                  sx={{ textAlign: 'start', display: 'inline-block', paddingRight: '30px' }}
                >
                  <span style={{ color: 'black' }}>To: </span>
                  {trip.destination.locationName}
                </Typography>
              </Box>
              <Box sx={{ float: 'left', pl: 1, pb: 2, textAlign: 'start', maxWidth: '500px' }}>
                <Typography
                  variant="p"
                  color="text.secondary"
                  component="div"
                  sx={{ textAlign: 'start', display: 'inline-block', paddingRight: '30px' }}
                >
                  <span style={{ color: 'black' }}>Departure date: </span>
                  {trip.departDate}
                </Typography>
                <Typography
                  variant="p"
                  color="text.secondary"
                  component="div"
                  sx={{ textAlign: 'start', display: 'inline-block', paddingRight: '30px' }}
                >
                  <span style={{ color: 'black' }}>Return date: </span>
                  {trip.returnDate}
                </Typography>
              </Box>
              <Box sx={{ float: 'left', pl: 1, pb: 2, textAlign: 'start', maxWidth: '500px' }}>
                <Typography
                  variant="p"
                  color="text.secondary"
                  component="div"
                  sx={{ textAlign: 'start', display: 'inline-block', paddingRight: '30px' }}
                >
                  <span style={{ color: 'black' }}>Trip Reasons: </span>
                  {trip.tripReasons}
                </Typography>
              </Box>
              <Box sx={{ float: 'left', pl: 1, pb: 2, textAlign: 'start', maxWidth: '500px' }}>
                <Typography
                  variant="p"
                  color="text.secondary"
                  component="div"
                  sx={{ textAlign: 'start', display: 'inline-block', paddingRight: '30px' }}
                >
                  <span style={{ color: 'black' }}> Trip type:</span> {trip.tripType}
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '20px 0 0 0' }}>
                <Typography
                  variant="p"
                  color="text.secondary"
                  component="div"
                  sx={{
                    textAlign: 'start',
                    margin: ' auto 0 0 0',
                    fontWeight: '600',
                    cursor: 'pointer',
                  }}
                >
                  {Math.ceil(Math.random() * 10)} Comments
                </Typography>

                <Box>
                  <ThemeProvider theme={theme}>
                    <Button
                      variant="contained"
                      color="neutral"
                      size="medium"
                      sx={{ marginRight: '10px', textTransform: 'none' }}
                    >
                      Update
                    </Button>
                  </ThemeProvider>

                  <Button
                    sx={{ textTransform: 'none' }}
                    variant="outlined"
                    color="error"
                    size="medium"
                  >
                    Delete
                  </Button>
                </Box>
              </Box>
            </Box>
          </Card>
        )
      })
    } else {
      return <h3>NO trip request</h3>
    }
  }
  return <>{displayTrips(props)}</>
}

import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid, Typography } from '@mui/material';
import { Colors } from '../../theme/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';



const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
     '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const theme = createTheme({
    palette: {
      neutral: {
        main: '#FFC107',
        contrastText: '#fff',
      },
    },
  });
  const [role, setRole] = React.useState('');
  const handleChange = (event) => {
    setRole(event.target.value);
  };
  return (
    <Grid>
    <Box>

  <Stack spacing={2} direction="row" >      <ThemeProvider theme={theme}>
      <Button color="neutral" variant="contained" onClick={handleClickOpen}> Assign Role </Button>

        </ThemeProvider>
  </Stack>
  <div>

  </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle align='center' color={Colors.primary}>Assign New Role</DialogTitle>
        <DialogContent>
        <div>
      <FormControl sx={{ m: 1 }} variant="standard">
        <Typography> Email</Typography>
        <InputLabel htmlFor="demo-customized-textbox"></InputLabel>
        <BootstrapInput id="demo-customized-textbox" />
      </FormControl>
      <FormControl sx={{ m: 1 }} variant="standard">
      <Typography>  Role</Typography>
        <InputLabel id="demo-customized-select-label"></InputLabel>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={role}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Manager</MenuItem>
          <MenuItem value={20}>Requester</MenuItem>
          <MenuItem value={30}>Travel Administrator</MenuItem>
 
        </Select>
      </FormControl>

    </div>
 
        </DialogContent>
        <DialogActions style={{justifyContent: 'center'}}>
        <ThemeProvider theme={theme}>
        <Button color="neutral" variant="contained" onClick={handleClose}>Save</Button>
        </ThemeProvider>
        </DialogActions>
      </Dialog>
    </Box>
    <Box>

<Stack spacing={2} direction="row" >      <ThemeProvider theme={theme}>
    <Button color="neutral" variant="contained" onClick={handleClickOpen}> Assign Role </Button>

      </ThemeProvider>
</Stack>
<div>

</div>
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle align='center' color={Colors.primary}>Assign New Role</DialogTitle>
      <DialogContent>
      <div>
    <FormControl sx={{ m: 1 }} variant="standard">
      <Typography> Email</Typography>
      <InputLabel htmlFor="demo-customized-textbox"></InputLabel>
      <BootstrapInput id="demo-customized-textbox" />
    </FormControl>
    <FormControl sx={{ m: 1 }} variant="standard">
    <Typography>  Role</Typography>
      <InputLabel id="demo-customized-select-label"></InputLabel>
      <Select
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        value={role}
        onChange={handleChange}
        input={<BootstrapInput />}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Manager</MenuItem>
        <MenuItem value={20}>Requester</MenuItem>
        <MenuItem value={30}>Travel Administrator</MenuItem>

      </Select>
    </FormControl>

  </div>

      </DialogContent>
      <DialogActions style={{justifyContent: 'center'}}>
      <ThemeProvider theme={theme}>
      <Button color="neutral" variant="contained" onClick={handleClose}>Save</Button>
      </ThemeProvider>
      </DialogActions>
    </Dialog>
  </Box>
    </Grid>
  );
}

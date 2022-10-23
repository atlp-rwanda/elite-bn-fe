import * as React from 'react';

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function BasicDatePicker() {
  const [value, setValue] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (

  <Box>
    <Box>
    <div>
    <Button variant="outlined" onClick={handleClickOpen}>
      Likes
    </Button>
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Accomodation</DialogTitle>
      <DialogContent>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Accomodation Number" variant="outlined" />

    </Box>
    

      </DialogContent>
      <DialogActions>
        
        <Button onClick={handleClose}>Get all Likes</Button>
      </DialogActions>
    </Dialog>
  </div>
      </Box>
      <Box>
      <div>
    <Button variant="outlined" onClick={handleClickOpen}>
      UnLike
    </Button>
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Accomodation</DialogTitle>
      <DialogContent>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Accomodation Number" variant="outlined" />

    </Box>
    

      </DialogContent>
      <DialogActions>
        
        <Button onClick={handleClose}>Get all Unlikes</Button>
      </DialogActions>
    </Dialog>
  </div>
        </Box>
    </Box>

  );
}

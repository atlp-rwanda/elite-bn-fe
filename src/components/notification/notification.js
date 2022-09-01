import React, { useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { io } from 'socket.io-client';
import api from '../../../utils/api'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
  getAllnotifications,
  getSingleNotifications,
  thisNotification,
} from '../../redux/features/notification';
function Notifications() {
 
const socket = io(process.env.REACT_APP_BACKEND_URL, {
  transports: ['websocket'],
  auth: {
    token: localStorage.getItem('jwt'),
  },
});
const [anchorEl, setAnchorEl] = React.useState(null);
const open = Boolean(anchorEl);
const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};
const handleClose = () => {
  setAnchorEl(null);
};


 const dispatch = useDispatch();
 
 console.log(socket)
  socket.on("notifications", (data)=>console.log(data)) 
  socket.on("connect_error", (err) => {
    console.log(err)
    alert(`${err.message}`);
    }); 

    useEffect(() => {
      const renderState = async () => {
        await api
          .get('/api/v1/notifications')
          .then((res) => {
            const notification = res.data
  
            console.log(notification)
            dispatch(getAllnotifications(notification));
          })
          .catch((err) => {
          });
      };
      renderState();
    }, []);
    const { notifications } = useSelector(thisNotification);

console.log(count)
  return (
  
    <div>
    <Badge badgeContent={1} color="primary">
    <NotificationsIcon 
color="action" 
id="demo-positioned-button"
aria-controls={open ? 'demo-positioned-menu' : undefined}
aria-haspopup="true"
aria-expanded={open ? 'true' : undefined}
onClick={handleClick}
/>
</Badge>


  <Menu
    id="demo-positioned-menu"
    aria-labelledby="demo-positioned-button"
    anchorEl={anchorEl}
    open={open}
    onClose={handleClose}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
  >
    <MenuItem onClick={handleClose}>
      <Card>
    {JSON.stringify(notifications?.payload?.data)}
    </Card>
    </MenuItem>
  </Menu>
</div>
  )
}

export default Notifications

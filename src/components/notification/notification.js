import React, { useEffect } from 'react'
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
function Notifications() {
  return (
    <div>
<Badge badgeContent={5} color="primary">
  <NotificationsIcon color="action" />
</Badge>
    </div>
  )
}

export default Notifications

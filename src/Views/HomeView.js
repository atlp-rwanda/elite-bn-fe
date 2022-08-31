import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { TextField } from '@material-ui/core'
import Notifications from '../components/notification/notification'
function HomeView() {
  return (
    <div>
      <Notifications />
      <h1>Welcome to barefoot</h1>
    </div>
  )
}
export default HomeView

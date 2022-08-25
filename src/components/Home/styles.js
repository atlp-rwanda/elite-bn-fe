
import { makeStyles } from '@material-ui/core/styles';
const Image="https://images.pexels.com/photos/2869227/pexels-photo-2869227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
const useStyles = makeStyles((theme) => ({
palette:{
  primary:{
    main:'red'
  },
  secondary:'yellow'
},
       list :{
        display:"flex",
      
       },
       paperContainer: {
        backgroundImage: `url(${Image})`,
        backgroundSize: 'cover',
        minHeight:'100vh',
        backgroundRepeat:'no-repeat',
        backgroundPosition: 'center',
        margin: -24,
        padding: 24,
        height: 800,
    },
title:{
  paddingTop:theme.spacing(10),
  fontFamily:'Roboto',
  color:'#fff'
},
small:{
  paddingTop:30,
  fontFamily:'Roboto',
},
inch:{
  paddingTop:30,
  fontFamily:'Roboto'
},
arrow:{
  paddingTop:20,
  fontSize:30,
  color:'#FAB33F'
},
root:{
  "& #childId": {
      paddingLeft: theme.spacing(15)
  }
},



    }))

    export default useStyles
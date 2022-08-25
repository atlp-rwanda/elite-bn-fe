
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
        backgroundRepeat:'no-repeat',
     
        height: 800,
    },
    paper:{
      backgroundImage: `url(${Image})`,
    },
title:{
  paddingTop:theme.spacing(10),
  fontFamily:'Roboto',
  color:'#fff'
},
card:{
  display:'flex'
},
small:{
  paddingTop:30,
  fontFamily:'Roboto',
},
inch:{
  paddingTop:30,
  fontFamily:'Roboto'
},
service:{
  paddingTop:20,
 fontSize:35,
  fontFamily:'Roboto',
  color:'#FAB33F',
  fontWeight:700
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

serviceRoot:{

  backgroundColor:'#D9D9D9'
}

    }))

    export default useStyles

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
    FeedbackRoot:{
      display: 'flex',
      justifyContent:'center',
      alignItems:"center",
      
     
    },
    carding:{
      display: 'flex',
      justifyContent:'center',
      alignItems:"center",
    },
    feedbackContainer:{
      backgroundColor:'#D9D9D9'
    },
title:{
  paddingTop:theme.spacing(10),
  fontFamily:'Roboto',
  color:'#fff'
},
card:{
  display:'flex',

},
small:{
  paddingTop:30,
  fontFamily:'Roboto',
},
inch:{
  paddingTop:30,
  fontFamily:'Roboto'
},
feedbackTypo:{
  paddingTop:40,
   fontFamily:'Roboto',
   color:'#FAB33F',
   fontWeight:700,
   marginLeft:theme.spacing(2)
},
soudan:{
  marginRight:100,
   fontFamily:'Roboto',
   color:'#fff',
   fontSize:34,
   fontWeight:1000,
},
france:{
  marginRight:100,
   fontFamily:'Roboto',
   paddingTop:190,
   paddingRight:300,
   color:'#fff',
   fontSize:34,
   fontWeight:1000,
},
cardOfFrance:{
  marginLeft:25
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
  fontSize:50,
  color:'#FAB33F'
},
root:{
  "& #childId": {
      paddingLeft: theme.spacing(15)
  }
},
avatar:{
  width:theme.spacing(20),
  height:theme.spacing(20),
 marginTop:theme.spacing(3),
 marginLeft:theme.spacing(2)
},
eliab:{
  paddingTop:theme.spacing(3),
  paddingLeft:theme.spacing(3)
},
content:{
display:'flex',

},
card1:{
  margin:"100px"
},
cardOfFrance:{
  margin:"100px"
},
cardOfDubai:{
  margin:"100px"
},
serviceRoot:{

  backgroundColor:'#D9D9D9'
},
icons:{
 marginLeft:theme.spacing(2),
 color:'#FAB33F'
}

    }))

    export default useStyles
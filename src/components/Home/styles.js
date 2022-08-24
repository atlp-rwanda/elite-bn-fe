
import { makeStyles } from '@material-ui/core/styles';
const Image="https://images.pexels.com/photos/4577585/pexels-photo-4577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
const useStyles = makeStyles((theme) => ({
palette:{
  primary:{
    main:'red'
  },
  secondary:'yellow'
},
       list :{
        display:"flex",
        paddingTop:theme.spacing(5),
        margin: '5px 0'
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
  paddingTop:theme.spacing(10)
}

    }))

    export default useStyles
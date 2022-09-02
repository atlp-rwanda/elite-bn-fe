
import { makeStyles } from '@material-ui/core/styles';
const drawerWidth=240
const useStyles = makeStyles((theme) => ({
// palette:{
//   primary:{
//     main:'red'
//   },
//   secondary:'yellow'
// },
       root :{
        display:"flex",
        justifyContent:"space-between",
        background: '#F5F6F8'
       },   
       drawer: {
        width:drawerWidth,
         },
         date:{
          color:'black',
          flexGrow:1
          
         },

       paperDrawer:{
        width:drawerWidth
       },
       list:{
       paddingTop:theme.spacing(5)
       },
       title:{
        padding:theme.spacing(2),
      
        },
        avatar:{
          paddingLeft:theme.spacing(3),
        
          },
       active:{
        background: '#FAB33F'
      },
      container: {
        backgroundColor: '#fafafa',
        padding: '4rem',
        position: 'relative',
        top: '3%',
        left: '5%',
        width: '76%',
      },
      form:{
        paddingTop:theme.spacing(10),
        paddingLeft:theme.spacing(10)
      },
      inputBtn: {
        width: '20rem',
        color:'#FAB33F'
      },
      ProfileIcon:{
        alignItems:"center",
        justifyContent:"center"
      },
      save: {
        width: '8rem',
        marginRight: theme.spacing(12),
      },
      cancel: {
        width: '8rem',
        marginRight: theme.spacing(12),
        border: '1px solid red',
      },
  }));
  export default useStyles
  
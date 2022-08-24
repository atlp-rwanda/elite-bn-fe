
import { makeStyles } from '@material-ui/core/styles';
const Image="https://images.unsplash.com/photo-1494783367193-149034c05e8f?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDEyNnx8dHJpcHxlbnwwfHx8fDE2NjEyNjAwODQ&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450"

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
       title :{
       paddingTop:theme.spacing(30)
       },
       paperContainer: {
        backgroundImage: `url(${Image})`,
        backgroundSize: 'cover',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: `calc(100vw + 48px)`,
        margin: -24,
        padding: 24,
        height: 800,
    }

    }))

    export default useStyles
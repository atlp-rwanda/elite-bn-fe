import React,{useState,useEffect} from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { TextInput } from "./TextInput.js";
import { MessageLeft, MessageRight } from "./Message";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import ChatIcon from '@mui/icons-material/Chat';
import { Snackbar } from '@material-ui/core';
import api from '../../../utils/api'

const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      width: "80vw",
      height: "80vh",
      maxWidth: "500px",
      maxHeight: "700px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "relative"
    },
    paper2: {
      width: "80vw",
      maxWidth: "500px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "relative"
    },
    container: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end"
    },
    messagesBody: {
      width: "calc( 100% - 20px )",
      margin: 10,
      overflowY: "scroll",
      height: "calc( 100% - 80px )"
    }
  })
);

export default function Chat() {
  const classes = useStyles();

      const [showChat, setShowChat]=useState(false)

      useEffect(() => {
              api.get("api/v1/user/messages").then(res=>console.log("the response for the message is", res))

      }, [])
      

      const handleShowCloseChat=()=>setShowChat(cv=>!cv)


  return (
    <div>
         <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        height: '70vh',
      }}>
      <Fab 
      size="small" 
      color="primary" 
      aria-label="add"
      onClick={handleShowCloseChat}
      >
        <ChatIcon />
      </Fab>
      </div>
      <div 
    className={classes.container}
    style={{
        position: 'absolute',
        bottom: 0,
        display: showChat?'flex': 'none'
        // top: 0,
        // right: 0
    }}
    >
      <Paper className={classes.paper} zDepth={2}>
        <Paper id="style-1" className={classes.messagesBody}>
          <MessageLeft
            message="Heeey, here are the things we are gong to talk about"
            timestamp="MM/DD 00:00"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName=""
            avatarDisp={true}
          />
          <MessageLeft
            message="Hahahahha, what are you saying anyways"
            timestamp="MM/DD 00:00"
            photoURL=""
            displayName="User1"
            avatarDisp={false}
          />
          <MessageRight
            message="You can get this accommodation for free. don't mind the prices!"
            timestamp="MM/DD 00:00"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName="User2"
            avatarDisp={true}
          />
          <MessageRight
            message="I am back again. Have I missed anything"
            timestamp="MM/DD 00:00"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName="`User1"
            avatarDisp={false}
          />
        </Paper>
        <TextInput />
      </Paper>
    </div>
    </div>
    
  );
}

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CheckIcon from '@mui/icons-material/Check';
import { RequestPage } from '@mui/icons-material';


const RequesterPage = (props) => {

    return (
           
        <Card sx={{ display: 'flex', boxShadow:'none',   padding: '30px 0',borderRadius:0, borderBottom:'1px solid #CCCCCC'}}>
        <CardMedia
                component="img"
                sx={{ width: 250, borderRadius:'5px' }}
                alt="Live from space album cover"
              />
              <Box sx={{ display: 'flex', flexDirection: 'column', width:'100%', padding:'0 0 0 10px'}}>
                <CardContent sx={{  padding:'0 0 15px 0', display:'flex', justifyContent:'space-between'}}>
                  <Box>
                  <Typography component="div" variant="h6" color="primary.main" sx={{textAlign:'start'}}>
                  Five to five hotel
                  </Typography>
                  <Typography variant="p" color="text.secondary" component="div" sx={{textAlign:'start'}}>
                  <ion-icon name="location"></ion-icon> kigali, Rwanda
                  </Typography>
                  </Box>
                  <Box>
                  <Typography  sx={{ border:'1px solid #FFC107', color:'#FFC107', borderRadius:'20px', padding:'2px 10px', fontSize:'0.8rem', textTransform:'none'}}>
                  Pending
                </Typography>
                  </Box>
                </CardContent>
                <Box sx={{ float: 'left', pl: 1, pb: 2, textAlign:'start',maxWidth:'500px' }}>
                <Typography variant="p" color="text.secondary" component="div" sx={{textAlign:'start', display:'inline-block',paddingRight:'30px'}}>
                  <CheckIcon sx={{ padding:0, marginBottom:'-3px', fontSize:'18px' ,color:'primary.main'}} /> free wifi
                  </Typography>
                <Typography variant="p" color="text.secondary" component="div" sx={{textAlign:'start', display:'inline-block',paddingRight:'30px'}}>
                  <CheckIcon sx={{ padding:0, marginBottom:'-3px', fontSize:'18px' ,color:'primary.main'}} /> free wifi
                  </Typography>
                <Typography variant="p" color="text.secondary" component="div" sx={{textAlign:'start', display:'inline-block',paddingRight:'30px'}}>
                  <CheckIcon sx={{ padding:0, marginBottom:'-3px', fontSize:'18px' ,color:'primary.main'}} /> free wifi
                  </Typography>
                <Typography variant="p" color="text.secondary" component="div" sx={{textAlign:'start', display:'inline-block',paddingRight:'30px'}}>
                  <CheckIcon sx={{ padding:0, marginBottom:'-3px', fontSize:'18px' ,color:'primary.main'}} /> free wifi
                  </Typography>
                <Typography variant="p" color="text.secondary" component="div" sx={{textAlign:'start', display:'inline-block',paddingRight:'30px'}}>
                  <CheckIcon sx={{ padding:0, marginBottom:'-3px', fontSize:'18px' ,color:'primary.main'}} /> free wifi
                  </Typography>
                <Typography variant="p" color="text.secondary" component="div" sx={{textAlign:'start', display:'inline-block',paddingRight:'30px'}}>
                  <CheckIcon sx={{ padding:0, marginBottom:'-3px', fontSize:'18px' ,color:'primary.main'}} /> free wifi
                  </Typography>
                </Box>
                <Button onClick={props.openDetails} sx={{ width:'120px', textTransform:'none', fontSize:'0.7rem', fontWeight:'600', border:'1px solid #046CC6'}}>Trip details</Button>
                <Box sx={{ display:'flex', justifyContent:'space-between', padding:'20px 0 0 0'}}>
                <Typography onClick={props.openComments} variant="p" color="text.secondary" component="div" sx={{textAlign:'start', margin:' auto 0 0 0', fontWeight:'600', cursor:'pointer'}}>
                   15 Comments
                  </Typography>
                <Box>
                  <Button onClick={props.openUpdate} variant="contained" size="medium"  sx={{ marginRight:'10px',textTransform:'none'}}>
                  Update
                </Button>
                  <Button  sx={{ textTransform:'none'}} variant="outlined" color='error' size="medium">
                  Delete
                </Button>
                </Box>
                </Box>
              </Box>
        
              </Card>
          
    );
  }

export default RequestPage;
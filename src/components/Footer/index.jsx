import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import TextField from '@mui/material/TextField';
import './style.css'
import Button from '@mui/material/Button'

import {FaCcVisa, FaCcMastercard,FaCcPaypal} from 'react-icons/fa';
import {SiAmericanexpress} from 'react-icons/si'




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1,bgcolor:'#fff',pt:8 ,pb:5}}>
      <Container>
        <Grid container spacing={1} sx={{pb:14}}>
          <Grid item xs={12} sm={12} mg={4} lg={4}>
            <>
              <Typography>
                <Typography sx={{fontWeight:'bold',textAlign:'start',fontSize:'18px',color:'#484848',textTransform:'uppercase',pb:4}}>Get in touch</Typography>
                <Typography color='#484848'sx={{textAlign:'start',pb:3}}>
                  Any questions? Let us know in store at 8th floor, 379  Hudson
                  St, New York, NY 10018 or call us on (+1) 96 716 6879
                </Typography>
                <Typography sx={{display: 'flex',gap:2,alignItems:'start',}}> <FacebookIcon sx={{":hover":{bgcolor:'red',border:'red',borderRadius:'50%'}}}/> <TwitterIcon sx={{":hover":{bgcolor:'red',border:'red',borderRadius:'50%'}}}/> <PinterestIcon sx={{":hover":{bgcolor:'red',border:'red',borderRadius:'50%'}}}/> <GoogleIcon sx={{":hover":{bgcolor:'red',border:'red',borderRadius:'50%'}}}/> <InstagramIcon sx={{":hover":{bgcolor:'red',border:'red',borderRadius:'50%'}}}/> </Typography>
              </Typography>
            </>
          </Grid>
          <Grid item xs={12} sm={12} mg={4} lg={4}>
            <>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                  <>
                    <Typography>
                      <Typography sx={{fontWeight:'bold',textAlign:'start',fontSize:'18px',color:'#484848',textTransform:'uppercase',pb:4}}>Catigories</Typography>
                      <Typography sx={{textAlign:'start'}}>
                        <ul className='list'>
                          <li>Men</li>
                          <li>Women</li>
                          <li>Dresses</li>
                          <li>Sunglasses</li>
                        </ul>
                      </Typography>
                    </Typography>
                  </>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                  <>
                    <Typography>
                      <Typography sx={{fontWeight:'bold',textAlign:'start',fontSize:'18px',color:'#484848',textTransform:'uppercase',pb:4}}>Links</Typography>
                      <Typography sx={{textAlign:'start'}}>
                        <ul className='list'>
                          <li>Search</li>
                          <li>About Us</li>
                          <li>Contact Us</li>
                          <li>Returns</li>
                        </ul>
                      </Typography>
                    </Typography>
                  </>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                  <>
                    <Typography>
                      <Typography sx={{fontWeight:'bold',textAlign:'start',fontSize:'18px',color:'#484848',textTransform:'uppercase',pb:4}}>Help</Typography>
                      <Typography sx={{textAlign:'start'}}>
                        <ul className='list'>
                          <li>Track Order</li>
                          <li>Returns</li>
                          <li>Shipping</li>
                          <li>FAQs</li>
                        </ul>
                      </Typography>
                    </Typography>
                  </>
                </Grid>
              </Grid>
            </>
          </Grid>
          <Grid item xs={12} sm={12} mg={4} lg={4}>
            <>
              <Typography>
                <Typography sx={{fontWeight:'bold',textAlign:'start',fontSize:'18px',color:'#484848',textTransform:'uppercase',pb:2}}>newsletter</Typography>
                <Typography sx={{textAlign:'start'}}>
                  <TextField id="standard-basic" label="Email Address" variant="standard" sx={{width:'90%',pb:5}} />
                <Button className='btn'sx={{border:'1px solid black',bgcolor:'black',color:'white',padding:'2%',pl:'10%',pr:'10%',borderRadius:'50px',":hover":{bgcolor:'red',border:'red'}}}> subscribe</Button>
                </Typography>
              </Typography>
            </>
          </Grid>
        </Grid>
      </Container>
      <Grid md={12} xs={12}>
        <Typography sx={{textAlign:'center'}}> <FaCcVisa style={{width:'50px',height:'40px'}}/> <FaCcMastercard style={{width:'50px',height:'40px'}}/> <SiAmericanexpress style={{width:'55px',height:'40px'}}/> <FaCcPaypal style={{width:'50px',height:'40px'}}/> </Typography>
        <Typography sx={{ textAlign: 'center', pt: 3 }}>Copyright © 2018 <span className='mass'> MassTechnologist.com.</span> All rights reserved.</Typography>
      </Grid>
    </Box>
  );
}

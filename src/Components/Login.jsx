import React from 'react'
import { Container, Typography, TextField, Button, Box, InputAdornment } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import HttpsIcon from '@mui/icons-material/Https';
import { useNavigate } from 'react-router';
function Login() {
 
    const navigate = useNavigate();

    return (
      <>
  
        <Container sx={{
          bgcolor: "#070f1d",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
            
  
        }} >
  
          <Box sx={{
            border: 1,
            display: "flex",
            flexDirection: "column",
            gap: "2",
            borderColor: "white 2px solid",
            bgcolor: "whitesmoke",
            height: "70%",
            width: "30%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: '16px'
  
  
          }}>
  
            <Typography fontFamily="" color="#212121" variant='h5' sx={{ fontWeight: 'bold' }}>Login Page </Typography> <br></br>
            <br></br>
  
            <TextField
              id="input-with-icon-textfield"
              label="Username"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              variant="standard" />
            <br></br>
  
            <TextField
              id="input-with-icon-textfield"
              label="Password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <HttpsIcon />
                  </InputAdornment>
                ),
              }}
              variant="standard" />
            <br></br>
            <br></br>
            <br></br>
  
            <Button onClick={ ()=> {navigate("/details")} } sx={{ width: '25%' }} variant="contained" color="success"  >Login</Button>
  
          </Box>
        </Container>
      </>
    );
  }
  

export default Login
import React from 'react';
import { Box, Link, Paper, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import { Link as RouterLink } from 'react-router-dom';


const ErrorPage = () => {
  const theme=useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
      }}
    >
      <Paper elevation={12} square={true} 
      sx={{padding:{xs:5,sm:10}}}
      >
        <Typography variant="h1" sx={{
           color:theme.palette.error.main ,
           fontFamily:'segoe'}}>
          404
        </Typography>
        <Typography variant="h2" sx={{
           margin: '20px 0',
           fontFamily:'segoe' 
        }}>
          Page Not Found
        </Typography>
        <Typography variant='h5' sx={
          {fontFamily:'segoe'}
        }>
          Note : Accessing Dashboard requires user to be /
          <Link component={RouterLink} to={'/auth/signin'}
           >signed in</Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default ErrorPage;
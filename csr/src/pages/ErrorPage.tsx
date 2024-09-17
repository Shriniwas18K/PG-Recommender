import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';

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
        <Typography variant="h4" sx={{ 
          margin: '20px 0' ,
          fontFamily:'segoe'
        }}>
          Sorry, the page you're looking for does not exists.
        </Typography>
      </Paper>
    </Box>
  );
};

export default ErrorPage;
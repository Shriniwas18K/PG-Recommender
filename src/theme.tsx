import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      light: '#FFF8EA',
      main:'#9E7676',
      dark:'#594545'
    },
    success:{
      light:'#E7F0DC',
      dark:'#059212',
      main:'#F3FF90'
    },
    error: {
      main: '#C70039',
      dark:'#900C3F'
    },
    warning:{
      main:'#FEFFD2',
      dark:'#FFDE55'
    }
  },typography:{
    h1:{
      fontFamily:'monospace'
    },
  }
});
export default theme;
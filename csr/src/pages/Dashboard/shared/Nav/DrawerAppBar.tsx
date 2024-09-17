import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AccountMenu from './components/AccountMenu'
import NotificationBell from './components/NotificationBell';
import Menuicon from './components/Menuicon';
import SideDrawer from './Drawer/SideDrawer';

interface Props {
  window?: () => Window;
  content?: React.ReactElement;
}

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [drawerOpen, setdrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setdrawerOpen((prevState) => !prevState);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />

      <AppBar component="nav" sx={{display:'flex'}}>
        <Toolbar>
          <Menuicon handleDrawerToggle={handleDrawerToggle} />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display:'block' }}
          >
            Shelter
          </Typography>
          <NotificationBell />
          <AccountMenu />
        </Toolbar>
      </AppBar>

      <SideDrawer drawerOpeningState={drawerOpen}
        drawerTogglingFunction={handleDrawerToggle}
        container={container} />

    </Box>
  );
}

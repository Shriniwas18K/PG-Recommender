import { IconButton, Badge } from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import React from "react";

export default function NotificationBell(){
    return(
        <IconButton
            size="large"
            aria-label="show new notifications"
            color="inherit"
          >
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
    )
}
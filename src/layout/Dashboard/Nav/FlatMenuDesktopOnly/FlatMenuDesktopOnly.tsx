import { Box, Button } from "@mui/material";
import React from "react";

const navItems = ['Active Postings', 'Help and Support', 'Notifications', 'Profile'];

export default function FlatMenuDesktopOnly(){
    return(
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        {navItems.map((item) => (
          <Button key={item} sx={{ color: '#fff' }}>
            {item}
          </Button>
        ))}
      </Box>
    )
}
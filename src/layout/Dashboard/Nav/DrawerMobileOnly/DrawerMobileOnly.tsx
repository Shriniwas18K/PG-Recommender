import { Drawer } from "@mui/material"
import React from "react"
import { AccordionInDrawer } from "./AccordionInDrawerMobileOnly"

export default function DrawerMobileOnly({mobileOpeningState,container , drawerTogglingFunction}){
    return(<Drawer
    container={container}
    variant="temporary"
    open={mobileOpeningState}
    onClose={drawerTogglingFunction}
    ModalProps={{
      keepMounted: true, // Better open performance on mobile.
    }}
    sx={{
      display: { xs: 'block', sm: 'none' },
      '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
    }}
  >
    <AccordionInDrawer drawerTogglingFunction={drawerTogglingFunction}/>
  </Drawer>)
}
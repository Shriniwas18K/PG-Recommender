import { Drawer } from "@mui/material"
import React from "react"
import { AccordionInDrawer } from "./AccordionTileWithTransition"

export default function SideDrawer({drawerOpeningState,container , drawerTogglingFunction}){
    return(<>
    <Drawer
    container={container}
    variant="temporary"
    open={drawerOpeningState}
    onClose={drawerTogglingFunction}
    ModalProps={{
      keepMounted: true, // Better open performance on mobile.
    }}
    sx={{
      display:'block',
      '& .MuiDrawer-paper': { boxSizing: 'border-box', width: {
        xs:240 , sm:500
      } },
    }}
  >
    <AccordionInDrawer drawerTogglingFunction={drawerTogglingFunction}/>
  </Drawer>
  </>)
}
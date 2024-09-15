import { Box, Typography, Divider, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import React from "react";
import Accordion, { AccordionProps, AccordionSlots } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';
import { Link as RouterLink } from "react-router-dom";
import Link from '@mui/material/Link';

export default function AccordionTileWithTransition({ title, submenu , togglingFunction , prefix ,paths }){
    const [expanded, setExpanded] = React.useState(false);

    const handleExpansion = () => {
        setExpanded((prevExpanded) => !prevExpanded);
    };

    return (
        <div>
            <Accordion
                expanded={expanded}
                onChange={handleExpansion}
                slots={{ transition: Fade as AccordionSlots['transition'] }}
                slotProps={{ transition: { timeout: 400 } }}
                sx={[
                    expanded
                        ? {
                            '& .MuiAccordion-region': {
                                height: 'auto',
                            },
                            '& .MuiAccordionDetails-root': {
                                display: 'block',
                            },
                        }
                        : {
                            '& .MuiAccordion-region': {
                                height: 0,
                            },
                            '& .MuiAccordionDetails-root': {
                                display: 'none',
                            },
                        },
                ]}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography>{title}</Typography>
                </AccordionSummary>
                {submenu.map((submenuItem, i:number) => (
                    <AccordionDetails key={i} onClick={togglingFunction}>
                        <Link component={RouterLink}
                            to={"/dashboard/"+prefix+"/"+paths[i]}
                        >{submenuItem}
                        </Link>
                    </AccordionDetails>
                ))}
            </Accordion>
        </div>
    );
}

export const AccordionInDrawer = ({ drawerTogglingFunction }) => {
    const menus = [
        {
            title: 'Property Services',
            submenu: ['View Active Postings', 'Post New Property', 'Remove Postings'],
            prefix:'property',
            paths:['view-active-postings','post-new-property','remove-postings']
        },
        {
            title: 'My Profile', 
            submenu: ['View Details', 'Update Details'] ,
            prefix:'profile',
            paths:['view-profile','update-profile']
        },
        {   
            title: 'Help and Support',
            submenu: ['Email us', 'Contact us', 'FAQs'] ,
            prefix:'help-and-support',
            paths:['email','contact','FAQs']
        }
    ]

    return (
        <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Shelter
            </Typography>
            <Typography variant='caption'>
              copyright @ Shriniwas Kulkarni 2024
            </Typography>
            <Divider />
            {menus.map((item, index) => (
                <AccordionTileWithTransition
                    key={index}
                    title={item.title}
                    submenu={item.submenu}
                    togglingFunction={drawerTogglingFunction}
                    prefix={item.prefix}
                    paths={item.paths}
                />
            ))}
        </Box>
    );
}
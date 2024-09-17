import { Box, Container, Link, List, ListItem, Theme } from "@mui/material";
import LogoSVG from "./icons/LogoSVG";
import { useTheme } from "@emotion/react";
import {Link as RouterLink} from 'react-router-dom'
// Icons
import SocialMediaIcon from "./icons/SocialMediaIcon";
import React from "react";

// This is standalone footer component uncontrolled , just plug it

const data={
  "footer": {
    "menu": [
      {
        "text": "Sign In",
        "to": "/auth/signin"
      },
      {
        "text": "Register",
        "to": "/auth/register"
      },
      {
        "text": "Contact us",
        "to": "/help-and-support/contact"
      },
      {
        "text":"Email us",
        "to":"/help-and-support/email"
      },{
        "text":"FAQs",
        "to":"/help-and-support/FAQs"
      }
    ],
    "social-media": [
      {
        "name": "facebook",
        "href": "#"
      },
      {
        "name": "x",
        "href": "#"
      }
    ]
  }
}

const Footer: React.FC = () => {
  const theme = useTheme() as Theme;

  // data
  const footer = data.footer;
  const menu = footer.menu;
  const socialMediaIcons = footer["social-media"];
  return (
    <Container
      sx={{
        paddingBlock: { xs: theme.spacing(10), lg: theme.spacing(8) },
        backgroundColor: theme.palette.primary.dark,
      }}
      component="footer"
    >
      {/* Inner Wrapper */}
      <Box
        sx={{
          maxWidth: "1110px",
          marginInline: "auto",
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          justifyContent: { xs: "center", lg: "space-between" },
          alignItems: { xs: "center", lg: "flex-start" },
        }}
      >
        {/* Logo & Menu */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            justifyContent: { xs: "center", lg: "space-between" },
            gap: { lg: theme.spacing(15) },
          }}
        >
          {/* Logo */}
          <Link
            component={RouterLink}
            to={'/'}
            aria-label="Logo of the website"
            sx={{
              display: "flex",
            }}
          >
            <LogoSVG
              sx={{
                width: "148px",
                height: "25px",
              }}
            />
          </Link>

          {/* Menu */}
          <List
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              marginBlockStart: { xs: theme.spacing(0.75), lg: 0 },
              gap: { xs: theme.spacing(0), lg: theme.spacing(11) },
            }}
          >
            {menu.map((link) => {
              return (
                <ListItem sx={{ justifyContent: "center" }} key={link.text}>
                  <Link
                    component={RouterLink}
                    to={link.to}
                    sx={{
                      color: "#FFF",
                      fontSize: { lg: "0.8125rem" },
                      textDecoration: "unset",
                      lineHeight: "1.0625rem",
                      letterSpacing: "0.108125rem",
                      textTransform: "uppercase",

                      paddingBlock: { xs: theme.spacing(1), lg: 0 },

                      transition: "color 200ms ease-in-out",

                      "&:hover": {
                        color: theme.palette.secondary.main,
                      },
                    }}
                  >
                    {link.text}
                  </Link>
                </ListItem>
              );
            })}
          </List>
        </Box>

        {/* Social Media Icon */}
        <List
          sx={{
            display: "flex",
            gap: { xs: theme.spacing(6), lg: theme.spacing(10) },
            marginBlockStart: { xs: theme.spacing(1), lg: 0 },
          }}
        >
          {socialMediaIcons.map((item) => {
            return (
              <ListItem key={item.name}>
                <Link
                  aria-label={`Visit our ${item.name} page`}
                  sx={{ padding: { xs: theme.spacing(1), lg: 0 } }}
                >
                  <SocialMediaIcon
                    name={item.name}
                    sx={{
                      display: "block",
                      color: "#FFF",
                      fontSize: 24,

                      transition: "color 200ms ease-in-out",

                      "&:hover": {
                        color: theme.palette.secondary.main,
                      },
                    }}
                  />
                </Link>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Container>
  );
};

export default Footer;

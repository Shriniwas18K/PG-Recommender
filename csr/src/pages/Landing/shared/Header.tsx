import { Box, Container, Link, Stack, Theme } from "@mui/material";
import { useTheme } from "@emotion/react";
import SocialMediaIcon from "./icons/SocialMediaIcon";
import React, { useEffect, useState } from 'react';
import {Link as RouterLink} from 'react-router-dom';

// Assets
import LogoSVG from "./icons/LogoSVG";

// This is standalone Header component uncontrolled , just plug it

// data
const data={
  "header": {
    "menu": [
      {
        "type": "link",
        "text": "Email us",
        "to": "/help-and-support/email"
      },
      {
        "type": "link",
        "text": "Contact us",
        "to": "/help-and-support/contact"
      },
      {
        "type": "link",
        "text": "FAQs",
        "to": "/help-and-support/FAQs"
      },
      {
        "type": "button",
        "text": "register",
        "to": "/auth/register"
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
  },
}


const Header: React.FC = () => {
  const theme = useTheme() as Theme;

  const loginId=localStorage.getItem('appwriteId');
  const header = data.header;
  const menu = header.menu;
  if(loginId){
    menu[3].text='Dashboard';
    menu[3].to='/dashboard/property/view-active-postings'
  }
  const socialMediaIcons = header["social-media"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // prevent scrolling when mobile menu is open
  useEffect(() => {
    // ! Overflow hidden will not be removed if the menu was open in a small size device, and the device size changed to a tablet+ size, this can be done using dev tool
    isMenuOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [isMenuOpen]);
  return (
    <Container
      component="header"
      sx={{
        paddingBlockStart: { xs: "40px", md: "48px" },
        marginInline: "auto",
        maxWidth: "1104px",
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        {/* Logo */}
        <Link
          // href="/" dont use href , it does full document refresh , use to with react router
          component={RouterLink}
          to={'/'}
          aria-label="Logo of the website"
          sx={{ position: "relative", display: "flex", zIndex: "999" }}
        >
          <LogoSVG
            bookmarkPathIconFillColor={
              isMenuOpen ? "#FFF" : theme.palette.primary.dark
            }
            sx={{
              width: 50,
              height: 50,
              "& > *": {
                transition: isMenuOpen
                  ? "fill 400ms ease-in-out 400ms"
                  : "fill 400ms ease-in-out 1700ms",
              },
            }}
          />
        </Link>

        {/* Humberger Icon */}
        <Box
          component="button"
          sx={{
            display: {
              xs: "block",
              md: "none",
            },

            position: "relative",
            width: "18px",
            height: "15px",
            border: "none",
            padding: "0px",

            backgroundColor: "transparent",

            cursor: "pointer",

            zIndex: "999",

            "& > *": {
              position: "absolute",
              left: "0",
              width: "18px",
              height: "3px",
            },
          }}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <Box
            component="span"
            sx={{
              top: isMenuOpen ? "50%" : "0",
              translate: isMenuOpen ? "0 -50%" : "0 0",
              transformOrigin: "center",
              rotate: isMenuOpen ? "45deg" : "",
              backgroundColor: (theme) =>
                isMenuOpen ? "#FFF" : theme.palette.primary.main,
              transition: isMenuOpen
                ? "rotate 400ms ease-in-out 800ms, translate 400ms ease-in-out 400ms, top 400ms ease-in-out 200ms, background-color 400ms ease-in-out 400ms"
                : "rotate 400ms ease-in-out, translate 400ms ease-in-out 1700ms, top 400ms ease-in-out 1700ms, background-color 400ms ease-in-out 1700ms",
            }}
          />

          <Box
            component="span"
            sx={{
              top: "6px",
              backgroundColor: (theme) =>
                isMenuOpen ? "#FFF" : theme.palette.primary.main,
              opacity: isMenuOpen ? "0" : "1",
              transition: isMenuOpen
                ? "opacity 400ms ease-in-out, background-color 400ms ease-in-out 800ms"
                : "opacity 400ms ease-in-out, background-color 400ms ease-in-out 1700ms",
            }}
          />

          <Box
            component="span"
            sx={{
              bottom: isMenuOpen ? "50%" : "0",
              translate: isMenuOpen ? "0 50%" : "0 0",
              transformOrigin: "center",
              rotate: isMenuOpen ? "-45deg" : "",
              backgroundColor: (theme) =>
                isMenuOpen ? "#FFF" : theme.palette.primary.main,
              transition: isMenuOpen
                ? "rotate 400ms ease-in-out 800ms, translate 400ms ease-in-out 400ms, bottom 400ms ease-in-out 200ms, background-color 400ms ease-in-out 400ms"
                : "rotate 400ms ease-in-out, translate 400ms ease-in-out 1700ms, bottom 400ms ease-in-out 1700ms, background-color 400ms ease-in-out 1700ms",
            }}
          />
        </Box>

        {/* Menu Modal + the background */}
        <Box
          sx={{
            position: { xs: "fixed", md: "static" },
            top: isMenuOpen ? "0" : "-100vh",
            left: "0",
            height: { xs: "100vh", md: "auto" },
            width: { xs: "100vw", md: "auto" },
            transition: isMenuOpen
              ? "top 800ms ease-in-out 400ms"
              : "top 800ms ease-in-out 1200ms",
            zIndex: "990",
          }}
        >
          {/* background */}
          <Box
            sx={{
              display: { xs: "block", md: "none" },
              position: "absolute",
              top: "0",
              left: "0",
              height: "100vh",
              width: "100vw",
              backgroundColor: (theme) => theme.palette.primary.dark,
              backdropFilter: "blur(16px)",
              opacity: "0.95",
            }}
          />

          {/* Menu */}
          {menu.length > 0 && (
            <Stack
              alignItems="center"
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 0, md: theme.spacing(11) }}
              sx={{
                position: { xs: "absolute", md: "static" },
                top: "105px",
                width: "100%",
                paddingInline: { xs: theme.spacing(8), md: "0" },
              }}
            >
              {menu.map((link, i) => {
                if (link.type == "button") {
                  return (
                    <Link
                      key={link.text}
                      to={link.to}
                      component={RouterLink}
                      sx={{
                        marginBlockStart: { xs: theme.spacing(6), md: "0" },
                        paddingBlock: {
                          xs: theme.spacing(1),
                          md: theme.spacing(2.5),
                        },

                        paddingInline: { xs: "0", md: theme.spacing(7.5) },
                        width: "100%",

                        border: {
                          xs: "2px solid #FFF",
                          md: "2px solid transparent",
                        },
                        borderRadius: "5px",

                        fontSize: { xs: "1.25rem", md: "0.8125rem" },
                        lineHeight: "1.0625rem",
                        letterSpacing: "0.14rem",
                        fontWeight: "500",
                        textAlign: "center",
                        color: "#FFF",
                        textDecorationLine: "none",
                        textTransform: "uppercase",

                        opacity: { xs: isMenuOpen ? "1" : "0", md: "1" },

                        background: {
                          xs: "transparent",
                          md: theme.palette.primary.main,
                        },

                        boxShadow: "0 8px 8px -4px rgba(73, 93, 207, 0.20)",

                        transition: isMenuOpen
                          ? `opacity 400ms ease-in-out ${
                              900 + (i + 2) * 100
                            }ms, background-color 200ms ease-in-out, color 200ms ease-in-out, border-color 200ms ease-in-out`
                          : `opacity 400ms ease-in-out ${
                              1000 - (i + 2) * 100
                            }ms, background-color 200ms ease-in-out, color 200ms ease-in-out, border-color 200ms ease-in-out`,

                        "&:hover": {
                          backgroundColor: theme.palette.primary.light,
                          border: `2px solid ${theme.palette.secondary.main}`,
                          color: theme.palette.secondary.main,
                        },
                      }}
                    >
                      {link.text}
                    </Link>
                  );
                }

                return (
                  <Link
                    key={link.text}
                    component={RouterLink}
                    to={link.to}
                    color="#FFF"
                    underline="none"
                    sx={{
                      paddingBlock: { xs: theme.spacing(3), md: "0" },
                      width: "100%",

                      borderTop: {
                        xs: "1px solid rgba(255, 255, 255, 0.15)",
                        md: "none",
                      },

                      fontSize: { xs: "1.25rem", md: "0.8125rem" },
                      lineHeight: "1.0625rem",
                      letterSpacing: "0.14rem",
                      textTransform: "uppercase",
                      textAlign: "center",
                      textDecorationLine: "none",
                      color: { xs: "#FFF", md: theme.palette.primary.main },

                      opacity: { xs: isMenuOpen ? "1" : "0", md: "1" },

                      transition: isMenuOpen
                        ? `opacity 400ms ease-in-out ${
                            900 + (i + 2) * 100
                          }ms, color 200ms ease-in-out`
                        : `opacity 400ms ease-in-out ${
                            1000 - (i + 2) * 100
                          }ms, color 200ms ease-in-out`,

                      "&:hover": {
                        color: theme.palette.secondary.main,
                      },

                      "&:nth-last-of-type(2)": {
                        borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
                      },
                    }}
                  >
                    {link.text}
                  </Link>
                );
              })}
            </Stack>
          )}

          {/* Social Media Icons  */}
          {socialMediaIcons.length > 0 && (
            <Stack
              alignItems="center"
              justifyContent="center"
              direction="row"
              spacing={10}
              sx={{
                display: {
                  xs: "flex",
                  md: "none",
                },
                position: "absolute",
                bottom: theme.spacing(12),
                width: "100%",
              }}
            >
              {socialMediaIcons.map((item, i) => {
                return (
                  <Link
                  // here we use href , not to , because routing to external site
                  // which is not in scope of react router
                    key={item.name}
                    href={item.href}
                    sx={{
                      display: "flex",
                      opacity: isMenuOpen ? "1" : "0",
                      transition: isMenuOpen
                        ? `opacity 400ms ease-in-out ${1400 + (i + 1) * 100}ms`
                        : `opacity 400ms ease-in-out ${(i + 1) * 100}ms`,
                    }}
                  >
                    <SocialMediaIcon
                      name={item.name}
                      sx={{
                        color: "#FFF",
                        fontSize: 24,
                        transition: "color 200ms ease-in-out",

                        "&:hover": {
                          color: theme.palette.secondary.main,
                        },
                      }}
                    />
                  </Link>
                );
              })}
            </Stack>
          )}
        </Box>
      </Stack>
    </Container>
  );
};

export default Header;

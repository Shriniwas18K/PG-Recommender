import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Container,
  Grid2,
  Stack,
  Theme,
  Typography,
} from "@mui/material";

import banner from './banner.png'
// hero data
import data from "../data/data.json";
import React from "react";

const Hero: React.FC = () => {
  const theme = useTheme() as Theme;

  const heroData = data.hero;

  return (
    <Container
      sx={{
        marginBlockStart: { xs: theme.spacing(20), lg: theme.spacing(28) },
        maxWidth: "1104px",
      }}
      component="section"
    >
      <Stack
        spacing={{ xs: theme.spacing(24), md: theme.spacing(17) }}
        direction={{ xs: "column", md: "row-reverse" }}
      >
        {/* Hero Illustration and background */}
        <Box
          sx={{
            position: "relative",
            flex: {
              md: "1",
            },
          }}
        >
          {/* Background box */}
          <Box
            sx={{
              position: "absolute",
              top: "0",
              left: { xs: theme.spacing(-8), lg: 0 },
              right: {
                xs: theme.spacing(-8),
                lg: theme.spacing(-16),
              },

              bottom: { xs: "-48px", lg: "-119px" },

              overflow: "hidden",

              [theme.breakpoints.between(1104, 1280)]: {
                right: `calc((1104px - 100vw) / 2 - 64px)`,
              },

              [theme.breakpoints.up(1280)]: {
                right: `calc((1104px - 100vw) / 2)`,
              },

              [theme.breakpoints.up(2000)]: {
                display: "none",
              },
            }}
          >
            <Box
              sx={{
                paddingInlineStart: { xs: theme.spacing(8), lg: 0 },
                paddingInlineEnd: {
                  xs: theme.spacing(8),
                  lg: theme.spacing(16),
                },

                [theme.breakpoints.up(1104)]: {
                  paddingInlineEnd: `calc((100vw - 1104px ) / 2 + 64px)`,
                },

                [theme.breakpoints.up(1280)]: {
                  paddingInlineEnd: `calc((100vw - 1104px ) / 2)`,
                },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  maxWidth: { xs: "375px", xl: "574px" },
                  aspectRatio: "auto 309 / 206",
                  marginInline: "auto",

                  [theme.breakpoints.up(1440)]: {
                    width: "574px",
                  },
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    bottom: { xs: "-48px", xl: "-101px" },
                    left: { xs: "36px", xl: "152px" },

                    background: theme.palette.primary.dark,

                    height: { xs: "203px", xl: "352px" },
                    width: "1000px",
                    borderRadius: "500px",
                  }}
                />
              </Box>
            </Box>
          </Box>

          {/* Picture */}
          <Box
            component="picture"
            sx={{
              position: "relative",
              display: "block",
              width: "100%",
              maxWidth: { xs: "375px", xl: "574px" },
              marginInline: "auto",
              zIndex: 50,

              "& img": {
                display: "block",
                width: "100%",
                height: "auto",
                boxShadow: "0px 30px 40px 0px rgba(47, 59, 129, 0.2)",
                borderRadius: "5%",
                marginInline: "auto",
              },

              [theme.breakpoints.up(1440)]: {
                position: "absolute",
                top: 0,
                left: 0,
                width: "574px",
              },
            }}
          >

            {/* PNG format */}
            <img
              src={banner}
              sizes="(max-width: 425px) 309px, 575px"
              alt="Bookmark web interface illustration"
              width="309"
              height="206"
              loading="lazy"
            />
          </Box>
        </Box>

        {/* Hero Text */}
        <Box
          sx={{
            marginBlockStart: {
              md: theme.spacing(4),
              lg: theme.spacing(8),
              xl: theme.spacing(18),
            },
            flex: {
              md: "1",
              xl: "0 1 540px",
            },
          }}
        >
          {/* h1 */}
          <Typography variant="h1" textAlign={{ xs: "center", md: "left" }}>
            {heroData.heading}
          </Typography>

          {/* p */}
          <Typography
            variant="h6"
            textAlign={{ xs: "center", md: "left" }}
            sx={{
              marginBlockStart: { xs: theme.spacing(4), xl: theme.spacing(6) },
            }}
          >
            {heroData.subheading}
          </Typography>

          <Grid2
            spacing={{ xs: theme.spacing(3), xl: theme.spacing(4) }}
            sx={{ marginBlockStart: theme.spacing(8) }}
          >
            <Button variant="outlined">{heroData.feature1}</Button>
            <Button variant="outlined">{heroData.feature2}</Button>
            <Button variant="outlined">{heroData.feature3}</Button>
            <Button variant="outlined">{heroData.feature4}</Button>
            <Button variant="outlined">{heroData.feature5}</Button>
            <Typography variant="caption" >...and many more features soon</Typography>
          </Grid2>
        </Box>
      </Stack>
    </Container>
  );
};

export default Hero;

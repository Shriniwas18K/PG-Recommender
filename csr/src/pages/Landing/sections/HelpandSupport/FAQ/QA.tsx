import {
  Box,
  Stack,
  Typography,
  SvgIcon,
  useTheme,
  Theme,
} from "@mui/material";
import React from "react";

type QAProps = {
  q: string;
  a: string;
  index: number;
  isOpen: boolean;
  setOpenQAIndex: React.Dispatch<React.SetStateAction<number | null>>;
};

const QA: React.FC<QAProps> = (props) => {
  const theme = useTheme() as Theme;

  const handleQuestionClick = () => {
    props.setOpenQAIndex((prevIndex) => {
      return prevIndex == props.index ? null : props.index;
    });
  };

  return (
    <Box>
      {/* Question  */}
      <Stack
        component="button"
        justifyContent="space-between"
        flexDirection="row"
        sx={{
          width: "100%",
          padding: "0",
          background: "transparent",
          border: "unset",
          cursor: "pointer",

          ":hover > .MuiTypography-body1": {
            color: theme.palette.secondary.main,
          },
        }}
        onClick={handleQuestionClick}
      >
        <Typography
          component="span"
          color={theme.palette.primary.dark}
          sx={{
            lineHeight: "2rem",
            transition: "color 400ms ease-in-out",
          }}
        >
          {props.q}
        </Typography>

        {/* Arrow Icon */}
        <SvgIcon
          sx={{
            width: "1rem",
            height: "auto",
            marginBlockStart: theme.spacing(2),
            marginInlineEnd: { xs: 0, lg: theme.spacing(5) },
            rotate: props.isOpen ? "180deg" : "",
            color: props.isOpen ? theme.palette.secondary.main : "#5267DF",
            transition: "color 400ms ease-in-out, rotate 400ms ease-in-out",
          }}
        >
          <svg
            width="18"
            height="13"
            viewBox="0 0 18 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 2L10 10L18 2" stroke="currentColor" strokeWidth="3" />
          </svg>
        </SvgIcon>
      </Stack>

      {/* Answer */}
      <Box
        sx={{
          display: "grid",
          gridTemplateRows: props.isOpen ? "1fr" : "0fr",
          marginBlockStart: props.isOpen ? theme.spacing(6.5) : "",
          marginBlockEnd: props.isOpen ? theme.spacing(7) : "",

          transition:
            "grid-template-rows 400ms ease-in-out, margin 400ms ease-in-out",
        }}
      >
        <Typography
          sx={{
            overflow: "hidden",
            letterSpacing: "0.14px",
            lineHeight: "30px",
          }}
        >
          {props.a}
        </Typography>
      </Box>
    </Box>
  );
};

export default QA;

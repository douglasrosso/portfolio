import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "hsl(222, 47%, 11%)",
      paper: "hsla(0, 0%, 100%, 0.04)",
    },
    primary: {
      main: "hsl(199, 89%, 60%)",
      contrastText: "hsl(222, 47%, 11%)",
    },
    secondary: {
      main: "hsl(234, 89%, 74%)",
      contrastText: "hsl(210, 40%, 98%)",
    },
    text: {
      primary: "hsl(210, 40%, 98%)",
      secondary: "hsl(215, 20%, 65%)",
    },
    error: {
      main: "hsl(0, 84.2%, 60.2%)",
    },
    divider: "hsla(0, 0%, 100%, 0.08)",
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: { fontFamily: "'Space Grotesk', sans-serif" },
    h2: { fontFamily: "'Space Grotesk', sans-serif" },
    h3: { fontFamily: "'Space Grotesk', sans-serif" },
    h4: { fontFamily: "'Space Grotesk', sans-serif" },
    h5: { fontFamily: "'Space Grotesk', sans-serif" },
    h6: { fontFamily: "'Space Grotesk', sans-serif" },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "hsl(222, 47%, 11%)",
          color: "hsl(210, 40%, 98%)",
        },
      },
    },
  },
});

export default theme;

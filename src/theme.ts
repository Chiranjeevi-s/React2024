import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: '"Comic Sans MS", cursive',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundImage: "radial-gradient(red, black)",
          color: "white",
        },
      },
    },
  },
});

export default theme;

import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  mode: "light",
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#D5d5d5',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;

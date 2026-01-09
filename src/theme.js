import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    background: { default: '#2A2A2A' },
    primary: { main: '#0100F2' },
    secondary: { main: '#F3F809' },
    error: { main: '#780000' },
  },
  typography: {
    fontFamily: '"Oswald", sans-serif',
  },
});

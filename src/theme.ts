import '@fontsource/aileron';
import { createTheme } from '@mui/material/styles';

export const theme = (mode: any) =>
  createTheme({
    typography: {
      fontFamily: 'Aileron',
    },
    palette: {
      mode,
      primary: {
        main: '#166ba7',
      },
      secondary: {
        main: '#ed811e',
      },
    },
  });

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';


import Rekobip from './font/avifont.woff2';

const rekobip = `
  fontFamily: 'Rekobip',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: local('Rekobip'), url(${Rekobip}) format('woff2')
`;

const theme = createTheme({
  typography: {
    fontFamily: 'Rekobip'
  },
  components: {
    MuiCssBaseline: {
      baseFont: rekobip
    }
  }
})

export default function Providers({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
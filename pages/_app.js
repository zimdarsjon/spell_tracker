import Header from '../components/Header.jsx';
import '../styles/global.css';
import Toolbar from '../components/Toolbar.jsx';
import { ThemeProvider } from "@mui/material";
import { theme } from "../utils/theme";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <div style={{ display: 'flex'}}>
        <Component {...pageProps} />
        <Toolbar />
      </div>
    </ThemeProvider>
  )
}
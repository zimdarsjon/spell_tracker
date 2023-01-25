import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';

export default function Header() {

  return (
  <>
    <CssBaseline />
    <AppBar elevation={4} position="relative">
      <Toolbar>
        <h1>D&D Tools</h1>
      </Toolbar>
    </AppBar>
  </>
  )
}
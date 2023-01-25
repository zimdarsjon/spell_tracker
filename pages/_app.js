import Header from '../components/Header.jsx';
import '../styles/global.css';
import Toolbar from '../components/Toolbar.jsx';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div style={{ display: 'flex'}}>
        <Component {...pageProps} />
        <Toolbar />
      </div>
    </>
  )
}
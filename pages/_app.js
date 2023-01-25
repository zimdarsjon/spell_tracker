import Header from '../components/Header.jsx';
import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}
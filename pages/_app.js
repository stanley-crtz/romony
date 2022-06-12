import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import { wrapper } from 'Redux/store'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default wrapper.withRedux(MyApp)

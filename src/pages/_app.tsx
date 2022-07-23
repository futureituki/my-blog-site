import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Nav } from '../component/nav/nav'
import { Footer } from '../component/footer/footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}

export default MyApp

import '../styles/global.scss'
import Navbar from '../components/Navbar'



function MyApp({ Component, pageProps }) {
  return (
    <div>
      <main>
        <Navbar />
        <Component {...pageProps} />
      </main>
    </div>
  )
}



export default MyApp
import '../styles/global.css'
import s from '../styles/Home.module.css'
import Navbar from '../components/Navbar'



function MyApp({ Component, pageProps }) {
  return (
    <div>
      <main className={s.container}>
        <Navbar />
        <Component {...pageProps} />
      </main>
    </div>
  )
}



export default MyApp
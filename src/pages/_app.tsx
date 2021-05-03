// import 'tailwindcss/tailwind.css'
import '../assets/main.css'
import '../assets/chrome-bug.css'
import Navbar from '../components/common/Navbar'


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
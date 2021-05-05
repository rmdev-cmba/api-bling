import { FC } from 'react'
import Link from 'next/link'
import style from './Navbar.module.scss'
import SearchProd from '../SearchProd'


const Navbar: FC = () => (

  <div className={style.container}>

    <div>
     

      <nav>
        <Link href="/">
          <a>All</a>
        </Link>
        <Link href="/">
          <a>Clothes</a>
        </Link>
        <Link href="/">
          <a>Accessories</a>
        </Link>
        <Link href="/">
          <a>Shoes</a>
        </Link>
      </nav>
    </div>

    <div >
      <SearchProd />

    </div>

  </div>


)

export default Navbar



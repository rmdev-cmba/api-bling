import { FC } from 'react'
import Link from 'next/link'
import style from './Navbar.module.css'



const Navbar: FC = () => (

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

)

export default Navbar



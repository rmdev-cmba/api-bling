import { FC } from 'react'
import Link from 'next/link'
import style from './Navbar.module.css'



const Navbar: FC = () => (

  <nav>
    <ul className={style.menu}>
    <li><Link href="/"><a>All</a></Link></li>
         
    <li><Link href="/"><a>Clothes</a></Link></li>
         
    <li><Link href="/"><a>Accessories</a></Link></li>
         
    <li><Link href="/"><a>Shoes</a></Link></li>
          
    </ul>
  </nav>

)

export default Navbar



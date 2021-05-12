import Navbar from "../Navbar";
import SearchProd from "../SearchProd";
import style from './header.module.css';


export default function Header() {

    return (
      
            <div className={style.header}>

                <h1>RM ELETRÔNICA</h1>
                <SearchProd></SearchProd>
                <Navbar></Navbar>

            </div>
        

    )
}
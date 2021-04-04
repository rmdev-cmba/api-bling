import Head from 'next/head';
import { useState } from 'react';
import Router from 'next/router';

import styles from '../styles/Home.module.css';

const { LOCAL_URL } = process.env

export default function SearchProd() {
    const [searchText, setSearchText] = useState('');
    const [itemList, setItemList] = useState([]);

    const handleSearch = async () => {
        // aqui é a junção de busca com api/search

        if (searchText !== '') {
            // searcText traz o codigo digitado no campo 'Busca' em localhost/index
            try {
                console.log('cheguei em SearchProd com ', searchText)

                // chama a página correspondete ao path:
                Router.push(`/prod/${searchText}`)
               

            } catch (err) {
                // console.error(err);
            }

            return

        }
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>OS-App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Busca</h1>

                <input type="text" value={searchText} onChange={e => setSearchText(e.target.value)} />
                <br />
                <button onClick={handleSearch}>Buscar</button><br />
                <a href='/'>Home</a>

                <hr />

                {console.log('itemList: ', itemList)}

              

            </main>
        </div>
    )


}
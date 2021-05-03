import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import style from '../../styles/Home.module.css'


export default function SearchProd() {
    const router = useRouter()
    const [searchText, setSearchText] = useState('')
    // const [itemList, setItemList] = useState([]) // esta linha mantém o campo 'Busca' preenchido

    const handleSearch = () => {
        // aqui é a junção de busca com api/search

        if (searchText !== '') {
            // searcText traz o codigo digitado no campo 'Busca' em localhost/index
            try {

                // chama a página correspondete ao path:
                // router.push(`/prod/${searchText}`)

            } catch (err) {
                // console.error(err);
            }

        }
        return;
    }

    return (
        <div>
            <Head>
                <title>App-Bling</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
           
                    <h1 className={style.title}>Código:</h1>
                    <div className="form-group mx-sm-3 mb-2">
                        <input
                            id="search2"
                            // type="number"
                            className="form-control"
                            placeholder="Digite Codigo"
                            // defaultValue={router.query.q}
                            value={searchText}
                            onChange={e => setSearchText(e.target.value)}
                            onKeyUp={(e) => {
                                e.preventDefault()
                                /*
                                if (e.key === 'Enter') {
                                    setSearchText(e.currentTarget.value)
                                    // handleSearch()
                                    console.log('searchText', searchText)
                                    router.push(`/prod/${searchText}`)
                                }
                                */
                            }}
                        />
                    </div>
                    <br />

                    <button id="myBtn" color="warning" onClick={handleSearch}>Busca</button><br />
                    <a href='/'>Home</a>
           

        </div>
    )
}
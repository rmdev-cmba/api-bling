import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'
import style from './SearchProd.module.css'


export default function SearchProd() {
    const router = useRouter()
    const [searchCodigo, setSearchCodigo] = useState('')
    // const [itemList, setItemList] = useState([]) // esta linha mantém o campo 'Busca' preenchido

    const handleSearch = () => {
        // aqui é a junção de busca com api/search

        if (searchCodigo !== '') {
            // searcText traz o codigo digitado no campo 'Busca' em localhost/index
            try {

                // chama a página correspondete ao path:
                router.push(`/prod/${searchCodigo}`)

            } catch (err) {
                // console.error(err);
            }

        }
        return;
    }

    return (
        <div >
            <Head>
                <title>App-Bling</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={style.search}>
                <h1>Código:</h1>
                <input
                    id="search"
                    // type="number"
                    className={style.input}
                    placeholder="Digite Codigo"
                    // defaultValue={router.query.q}
                    value={searchCodigo}
                    onChange={e => setSearchCodigo(e.target.value)}
                    onKeyUp={(e) => {
                        e.preventDefault()
                        if (e.key === 'Enter') {
                            const q = e.currentTarget.value
                            if (q == '' || q.length < 4) {
                                alert('Não pode ser vazio ou digite 4 dígitos')

                            } else {
                                setSearchCodigo(q)
                                router.push(`/prod/${searchCodigo}`)
                            }
                            return;

                        }
                    }}
                />

                <br />

                <button id="myBtn" color="warning" onClick={handleSearch}>Busca</button><br />
                <a href='/'>Home</a>
            </div>
        </div>

    )
}
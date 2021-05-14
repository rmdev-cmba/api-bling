import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from './SearchProd.module.css'


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

        <div className={styles.inputSearch}>
            <input
                id="inputSearch"
                type="search"
                className={styles.input}
                placeholder="Digite o código, somente números"
                // defaultValue={router.query.q}
                value={searchCodigo}
                required
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

            <div className={styles.btn}>
                <button id="myBtn" color="warning" onClick={handleSearch}>Busca</button>
            </div>

        </div>


    )
}
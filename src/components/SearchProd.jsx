import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import { Container, Navbar, Button } from 'reactstrap';

export default function SearchProd() {
    const router = useRouter()
    const [searchText, setSearchText] = useState('')
    // const [itemList, setItemList] = useState([]) // esta linha mantém o campo 'Busca' preenchido

    const handleSearch = async () => {
        // aqui é a junção de busca com api/search

        if (searchText !== '') {
            // searcText traz o codigo digitado no campo 'Busca' em localhost/index
            try {
                console.log('cheguei em SearchProd com ', searchText)

                // chama a página correspondete ao path:
                router.push(`/prod/${searchText}`)

            } catch (err) {
                // console.error(err);
            }

            return

        }
    }

    return (
        <div>
            <Head>
                <title>App-Bling</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar color="info" dark expand="md">
                <Container>

                    <h1 className={styles.title}>Busca</h1>
                    <div className="form-group mx-sm-3 mb-2">
                        <input type="text" className="form-control" value={searchText} onChange={e => setSearchText(e.target.value)} />
                    </div>
                    <br />

                    <Button color="warning" onClick={handleSearch}>Buscar</Button><br />
                    <a href='/'>Home</a>

                </Container>
            </Navbar>

        </div>
    )
}
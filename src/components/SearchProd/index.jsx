import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import s from './SearchProd.module.css';
import { Container, Navbar, Button } from 'reactstrap';

export default function SearchProd() {
    const router = useRouter()
    const [searchText, setSearchText] = useState(0)
    // const [itemList, setItemList] = useState([]) // esta linha mantém o campo 'Busca' preenchido

    const handleSearch = () => {
        // aqui é a junção de busca com api/search

        if (searchText !== '') {
            // searcText traz o codigo digitado no campo 'Busca' em localhost/index
            try {

                // chama a página correspondete ao path:
                router.push(`/prod/${searchText}`)

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

            <Navbar color="info" dark expand="md">
                <Container>

                    <h1 className={s.title}>Código:</h1>
                    <div className="form-group mx-sm-3 mb-2">
                        <input
                            id="search"
                            // type="number"
                            className="form-control"
                            placeholder="Digite Codigo"
                            defaultValue={router.query.q}
                            value={searchText}
                            onChange={e => setSearchText(e.target.value)}
                            onKeyUp={(e) => {
                                e.preventDefault()

                                if (e.key === 'Enter') {
                                    setSearchText(e.currentTarget.value)
                                    handleSearch()
                                }
                            }}
                        />
                    </div>
                    <br />

                    <Button id="myBtn" color="warning" onClick={handleSearch}>Busca</Button><br />
                    <a href='/'>Home</a>


                </Container>
            </Navbar>

        </div>
    )
}
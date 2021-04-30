import axios from 'axios';
import Estoque from '../../components/Estoque';
import ProdImg from '../../components/ProdImg';
import PrecoVenda from '../../components/PrecoVenda';
import s from '../../styles/Home.module.css'
import SearchProd from '../../components/SearchProd';

export default function Prod({ product }) {
  console.log('product:', product)
  const sidebar = (
    <div>
      <SearchProd />
      {product.map(prod =>
        <div key={prod.produto.id}>
          <Estoque
            cod={prod.produto.codigo}
            est={prod.produto.estoqueAtual}
            un={prod.produto.unidade}
            loc={prod.produto.localizacao}
          />
          <h3 className={s.font}>
            Descrição: {prod.produto.descricao}
            </h3>
          <PrecoVenda pv={prod.produto.preco} />

        </div>
      )}
    </div>
  );

  const id = product.map(prod =>
      <ProdImg imagem={prod.produto.imagem} />
  );

  return (
    <div className={s.main}>
      {sidebar}
      <hr />
      {id}
      <hr />

    </div>
  )
}

export const getStaticPaths = async () => {
  const { API_KEY } = process.env
  const {data}= await axios.get(`https://bling.com.br/Api/v2/produto/3295/json?apikey=${API_KEY}&estoque=S&imagem=S`);

  const paths = data.map(prod => {
    return {
        params: {
            codigo: prod.codigo // estas páginas serão montadas em build
        }
    }
})

return {
  paths: paths,

  fallback: 'blocking'
}

}

export const getStaticSideProps = async (context) =>{
  const { codigo } = context.params
  const { API_KEY } = process.env

  // const response = await fetch(`https://bling.com.br/Api/v2/produto/${codigo}/json?apikey=${API_KEY}&estoque=S&imagem=S`); // só vai mostar a primeira página buscada, para buscar novas páginas tem que utilizar o método getStaticPaths
  const {data}= await axios.get(`https://bling.com.br/Api/v2/produto/${codigo}/json?apikey=${API_KEY}&estoque=S&imagem=S`);

  // const data = await response.json();
  const product = data.retorno.produtos


  return {
    props: { product }
  }


}
import axios from 'axios';
import Estoque from '../../components/Estoque';
import ProdImg from '../../components/ProdImg';
import PrecoVenda from '../../components/PrecoVenda';
import s from '../../styles/Home.module.css'
import SearchProd from '../../components/SearchProd';

export default function Prod({ product }) {
  const layout = (
    <div>
      <SearchProd />
      {product.map(prod =>
      <p>
      {console.log('codigo', prod.produto.codigo)}
        
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
          </p>
      )}
    </div>
  );

  const image = product.map(prod =>
    <ProdImg imagem={prod.produto.imagem} />
  );

  return (
    <div className={s.main}>
      {layout}
      <hr />
      {image}
      <hr />
    </div>
  )
}

export const getStaticPaths = async () => {
  const { API_KEY } = process.env
  const codigo = 3295
  const { data } = await axios.get(`https://bling.com.br/Api/v2/produto/${codigo}/json?apikey=${API_KEY}&estoque=S&imagem=S`);

  console.log('data', data)

  const path = data.retorno.produtos.map(prod => {
    

    return {
      params: {
        codigo: prod.produto.codigo // estas páginas serão montadas em build
      }
    }

  })

  return {
    paths: path,

    fallback: 'blocking'
  }

}

export const getStaticProps = async (context) => {
  const { codigo } = context.params
  const { API_KEY } = process.env
  const { data } = await axios.get(`https://bling.com.br/Api/v2/produto/${codigo}/json?apikey=${API_KEY}&estoque=S&imagem=S`);

  const product = data.retorno.produtos
  
  return {
    props: {
      product
    },
    revalidate: 20
  }

}
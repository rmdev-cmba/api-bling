import { GetStaticPaths, GetStaticProps } from 'next';
import axios from 'axios';
import Estoque from '../../components/Estoque';
import PrecoVenda from '../../components/PrecoVenda';
import ProductView from '../../components/ProductView';
import style from '../../styles/Home.module.scss'


type Product = {
  produto: {
    codigo: string;
    descricao: string;
    unidade: string;
    preco: string;
    imageThumbnail: string;
    linkExterno: string;
    observacoes: string;
    localizacao: string;
    imagem: [];
    estoqueAtual: string;
  }
}

type ProductProps = {
  product: Product[];
}

export default function Prod({ product }: ProductProps) {
  const layout = (
    <div>
     
      {product.map(prod =>
        <div>
          
         
          <div>
          <h2>{prod.produto.descricao}</h2>
          <PrecoVenda pv={prod.produto.preco} />
          </div>
          <Estoque
            cod={prod.produto.codigo}
            est={prod.produto.estoqueAtual}
            un={prod.produto.unidade}
            loc={prod.produto.localizacao}
          />
        </div>
      )}
      
    </div>
    
  );

  const image = product.map(prod =>
    <ProductView images={prod.produto.imagem} />
  );

  return (
    <div className={style.main}>
      {layout}
      <hr />
      {image}
      <hr />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { API_KEY } = process.env
  const codigo = 3295
  const { data } = await axios.get(`https://bling.com.br/Api/v2/produto/${codigo}/json?apikey=${API_KEY}&estoque=S&imagem=S`);

  // console.log('data', data)

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

export const getStaticProps: GetStaticProps = async (context) => {
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
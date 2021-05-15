import { GetStaticPaths, GetStaticProps } from 'next';
import axios from 'axios';
import Estoque from '../../components/Estoque';
import PrecoVenda from '../../components/PrecoVenda';
import ProductView from '../../components/ProductView';
import style from '../../styles/Home.module.css'
import Header from '../../components/Header';


type Product = {
  produto: {
    id: string;
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
    <>
      {product.map(prod =>
        <div className={style.product} key={prod.produto.id}>

          <p>{prod.produto.descricao}</p>
          <PrecoVenda pv={prod.produto.preco} />
          <Estoque
            cod={prod.produto.codigo}
            est={prod.produto.estoqueAtual}
            un={prod.produto.unidade}
            loc={prod.produto.localizacao}
          />

        </div>
      )}

    </>

  );

  const image = product.map(prod =>
    <ProductView key={prod.produto.id} images={prod.produto.imagem} />
  );

  return (
    <>
      <Header></Header>
      <div className={style.main}>
        {image}
        {/* <hr /> */}
        {layout}
      </div>
    </>
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
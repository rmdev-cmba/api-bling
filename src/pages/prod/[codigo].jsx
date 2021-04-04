// https://www.youtube.com/watch?v=u1kCtkVR7cE
import Estoque from '../../components/Estoque';
import ProdImg from '../../components/ProdImg';
import PrecoVenda from '../../components/PrecoVenda';
import styles from '../../styles/Home.module.css'
import SearchProd from '../../components/SearchProd';

export default function Teste({ product }) {
  console.log('product:', product)
  const sidebar = (
    <ul>
      <SearchProd />
      {product.map(prod =>
        <li key={prod.produto.id}>
          <h2>Código: {prod.produto.codigo}</h2>
          <h3>Descrição: {prod.produto.descricao}</h3>
          <PrecoVenda pv={prod.produto.preco} />
          <Estoque est={prod.produto.estoqueAtual} />
          <span>{' '}{prod.produto.unidade}</span>

        </li>
      )}
    </ul>
  );

  const id = product.map(prod =>
    <div key={prod.produto.id}>
      <h3>Imagem:</h3>
      <ProdImg imagem={prod.produto.imagem} />
    </div>
  );

  return (
    <div className={styles.main}>
      {sidebar}
      <hr />
      {id}
      <hr />

    </div>
  )
}


export async function getServerSideProps(context) {
  const codigo = context.params.codigo
  const { API_KEY } = process.env

  // let codigo = 4853
  // buscar dados numa api, por exemplo
  const response = await fetch(`https://bling.com.br/Api/v2/produto/${codigo}/json?apikey=${API_KEY}&estoque=S&imagem=S`); // só vai mostar a primeira página buscada, para buscar novas páginas tem que utilizar o método getStaticPaths
  //console.log('response: ', response);
  const data = await response.json();
  const product = data.retorno.produtos
  //console.log('apikey: ', API_KEY)
  // console.log('data ', data);
  console.log(product)

  return {
    props: { product }
  }

}
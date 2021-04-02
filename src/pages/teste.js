// https://www.youtube.com/watch?v=u1kCtkVR7cE

import styles from '../styles/Home.module.css'

export default function Teste({ product }) {
  const sidebar = (
    <ul>
      {product.map(prod =>
        <li key={prod.produto.id}>
          <p>Codigo: {prod.produto.codigo}</p>
          <p>Descrição: {prod.produto.descricao}</p>
          <p>Estoque: {prod.produto.estoqueAtual}</p>
          {/* <p>Imagem: {var x = prod.produto.imagem}</p> */}
        </li>
      )}
    </ul>
  );

  const id = product.map(prod =>
    <div key={prod.produto.id}>
      <h3>ID: {prod.produto.id}</h3>
      <p>Length: {prod.produto.imagem.length}</p>
    </div>
  );


  const img = product.map(prod => prod.produto.imagem);
  // console.log('i:', i)

  for(let link of img){
    for(let i=0; i <= img.length; i++){
    console.log('links im1: ', link[i])
    }
  }
  


  return (
    <div className={styles.main}>
      { console.log('product ', product)}
      {/* {console.log('res: ', im)} */}
      {/* {console.log('imagem:', imagem)} */}
      {sidebar}
      <hr />
      {id}


    </div>
  )
}


export async function getServerSideProps() {
  const { API_KEY } = process.env

  let codigo = 4785;
  // buscar dados numa api, por exemplo
  const response = await fetch(`https://bling.com.br/Api/v2/produto/${codigo}/json?apikey=${API_KEY}&estoque=S&imagem=S`); // só vai mostar a primeira página buscada, para buscar novas páginas tem que utilizar o método getStaticPaths
  //console.log('response: ', response);
  const data = await response.json();
  //console.log('apikey: ', API_KEY)
  // console.log('data ', data);


  return {
    props: {
      product: data.retorno.produtos
    }
  };
}
// https://www.youtube.com/watch?v=u1kCtkVR7cE

import styles from '../styles/Home.module.css'

export default function Teste({ product }) {
  return (

    <div className={styles.main}>
      { console.log('product ', product)}
      <ul>
        {product.map(prod => (
          <li>{prod.produto.codigo}</li>
        ))}
      </ul>
    </div>

  )
}

// g
export async function getServerSideProps() {
  const { API_KEY } = process.env

  let codigo = 4785;
  // buscar dados numa api, por exemplo
  const response = await fetch(`https://bling.com.br/Api/v2/produto/${codigo}/json&apikey=${API_KEY}`); // só vai mostar a primeira página buscada, para buscar novas páginas tem que utilizar o método getStaticPaths
  //console.log('response: ', response);
  const data = await response.json();
  //console.log('apikey: ', API_KEY)
  console.log('data ', data);

  return {
    props: {
      product: data.retorno.produtos
    }
  };
}
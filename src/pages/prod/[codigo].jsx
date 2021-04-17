
import Estoque from '../../components/Estoque';
import ProdImg from '../../components/ProdImg';
import PrecoVenda from '../../components/PrecoVenda';
import s from '../../styles/Home.module.css'
import SearchProd from '../../components/SearchProd';

export default function Teste({ product }) {
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
    <div key={prod.produto.id}>
      <ProdImg imagem={prod.produto.imagem} />
    </div>
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


export async function getServerSideProps(context) {
  const { codigo } = context.params
  const { API_KEY } = process.env


  // let codigo = 4853
  // buscar dados numa api, por exemplo
  const response = await fetch(`https://bling.com.br/Api/v2/produto/${codigo}/json?apikey=${API_KEY}&estoque=S&imagem=S`); // só vai mostar a primeira página buscada, para buscar novas páginas tem que utilizar o método getStaticPaths
  //console.log('response: ', response);
  const data = await response.json();
  const product = data.retorno.produtos

  // ** inicio tratamento de erros
  /*
  const dataError = JSON.stringify(data)
  const retError = data.retorno.erros
  const msgError = retError.map(msg => msg)
  const msg = retError.map(msg => msg.erro)

  
  const cod = msg[0].cod
  if(cod==14){
    
  }
  
  //console.log('apikey: ', API_KEY)
  
  console.log('product retornado:', product)
  console.log('response retornando:', response)
  console.log('data extraido de response:', data);
  if (response.status ==200){
    console.log('encontrado status:', response.status)
  }
  console.log('dataError retornado:', dataError)
  console.log('retError:', retError)
  console.log('msgError:', msgError)
  console.log('msg:', msg)
  // console.log('cod:', cod)
  */
  // **fim tratamento erros


  return {
    props: { product }
  }

}
import { useState } from 'react';
import style from './PrecoVenda.module.css';

export default function PrecoVenda({ pv }) {
    const [parcelas, setParcelas] = useState(0)
    // 'pv' recebe preco de venda
    // const ftd = 0.9 // fator desconto 
    // const descAplicado = ((1 - ftd) * 100).toFixed(0).replace('.', ',')

    const prc = Number(pv)
    const precoMax = (prc).toFixed(2).replace('.', ',')

    const prcdesc = (prc * 0.92)

    const preco = prcdesc.toFixed(2).replace('.', ',')

   

    function definitionParcelas() {

        if (prcdesc < 50) {
            setParcelas(parcelas +1);
         }
        if (prcdesc >= 50 && prcdesc < 100) {
            console.log('dentro >=50', prcdesc)
            setParcelas(parcelas + 2);

        }

        if (prcdesc >= 100) {
            console.log('dentro >=100', prcdesc)
            setParcelas(parcelas + 3);
        }
    }

    console.log('parcelas antes da funcao', parcelas)

    // function qtParc(p) {
    //     console.log('dentro qtParc valor p', p)
    //     if (parcelas <= 3) {
    //         setParcelas(parcelas + p)
    //     } else { return }
    // }




    console.log('parcelas depois da funcao', parcelas)


    // const parc3 = (prc / 3).toFixed(2).replace('.', ',')
    const valueParc = (prcdesc / parcelas).toFixed(2).replace('.', ',')
    // const precoDesc2 = (prc * 0.98).toFixed(2).replace('.', ',')
    // const precoDesc25 = (prc * 0.975).toFixed(2).replace('.', ',')
    // const precoDesc5 = (prc * 0.95).toFixed(2).replace('.', ',')


if (parcelas >=1){
    return (

        <div className={style.pv}>
            {/* <p>*De R$ {precoMax} por (desc {descAplicado}%):</p> */}
            <h2>De R$ {precoMax} por até <span>R$ {preco}</span></h2>
            <p> Em até {parcelas}x de R$ {valueParc}</p>
            {/* <p>*DÉBITO: R$ {precoDesc2} (desc 2%) </p> */}
            {/* <span>*DINHEIRO negociar entre {precoDesc25} a R$ {precoDesc5} </span> */}
        </div>

    )
    }

    function predefinitionParcelas(){
        console.log('dentor predefinitionParcelas')
        if (prc>0) {
            definitionParcelas()
        }
        return
    }

    predefinitionParcelas();

}




function PrecoVenda({ pv }) {
    // 'pv' recebe preco de venda
    const ftd = 0.9 // fator desconto 
    const descAplicado = ((1 - ftd) * 100).toFixed(0).replace('.', ',')
    let parc3num = 0
    const prc = Number(pv)
    const precoMax = (prc / ftd).toFixed(2).replace('.', ',')
    const parc3 = (prc / 3).toFixed(2).replace('.', ',')
    let par3num = (prc / 3)
    if (parc3num < 20){
        
    }

    const preco = prc.toFixed(2).replace('.', ',')
    const precoDesc2 = (prc * 0.98).toFixed(2).replace('.', ',')
    const precoDesc25 = (prc * 0.975).toFixed(2).replace('.', ',')
    const precoDesc5 = (prc * 0.95).toFixed(2).replace('.', ',')

    return (
        
            <div >
                {/* <p>*De R$ {precoMax} por (desc {descAplicado}%):</p> */}
                <h1>*De R$ {precoMax} por R$ {preco} em até 3x de R$ {parc3}</h1>
                {/* <p>*DÉBITO: R$ {precoDesc2} (desc 2%) </p> */}
                {/* <span>*DINHEIRO negociar entre {precoDesc25} a R$ {precoDesc5} </span> */}
            </div>
        
    )

}

export default PrecoVenda;
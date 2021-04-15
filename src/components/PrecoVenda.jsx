
function PrecoVenda({ pv }) {
    // 'pv' recebe preco de venda
    const ftd = 0.9 // fator desconto 
    const descAplicado = ((1-ftd)*100).toFixed(0).replace('.', ',')

    const prc = Number(pv)
    const precoMax = (prc/ftd).toFixed(2).replace('.', ',')
    const parc6 = (prc/ftd/6).toFixed(2).replace('.', ',')
    const parc3 = (prc/3).toFixed(2).replace('.', ',')
    const preco = prc.toFixed(2).replace('.', ',')
    const precoDesc2 = (prc*0.98).toFixed(2).replace('.', ',')
    const precoDesc4 = (prc*0.96).toFixed(2).replace('.', ',')
    const precoDesc5 = (prc*0.95).toFixed(2).replace('.', ',')
    const precoDesc6 = (prc*0.94).toFixed(2).replace('.', ',')
        return (
            <div>
                <h3>
                
                <p>*De R$ {precoMax} em 6x de R$ {parc6} por (desc {descAplicado}%):</p>
                <p>*R$ {preco} em 1x ou 3x de R$ {parc3}</p>
                <p>*DÉBITO: R$ {precoDesc2} (desc 2%) </p>
                <span>*DINHEIRO -4%: R$ {precoDesc4} </span>
                <span>*DIN -5%: R$ {precoDesc5}</span>
                <span> *DIN -6%: R$ {precoDesc6}</span>

                </h3>
            </div>
        )
    
}

export default PrecoVenda;
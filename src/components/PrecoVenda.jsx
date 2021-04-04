
function PrecoVenda({ pv }) {
    // 'pv' recebe preco de venda
    const prc = Number(pv)
    const precoMax = (prc/0.9).toFixed(2).replace('.', ',')
    const preco = prc.toFixed(2).replace('.', ',')
    const precoDesc = (prc*0.95).toFixed(2).replace('.', ',')
        return (
            <div>
                <h3>
                <span>Preço Venda: R$ {precoMax}</span>
                <span> ------ </span>
                <span>Promoção: R$ {preco}</span>
                <span> ------ </span>
                <span>Desc. Max: R$ {precoDesc}</span>
                </h3>
            </div>
        )
    
}

export default PrecoVenda;
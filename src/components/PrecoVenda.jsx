
function PrecoVenda({ pv }) {
    // 'pv' recebe preco de venda
    const prc = Number(pv)
    const precoMax = (prc/0.9).toFixed(2).replace('.', ',')
    const preco = prc.toFixed(2).replace('.', ',')
    const precoDesc = (prc*0.95).toFixed(2).replace('.', ',')
        return (
            <div>
                <span>Preço Venda: {precoMax}</span>
                <span> ------ </span>
                <span>Preço Promoção: {preco}</span>
                <span> ------ </span>
                <span>Preço Desc. Max :{precoDesc}</span>
            </div>
        )
    
}

export default PrecoVenda;
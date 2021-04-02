
function LinkImg({ product }) {
    const img = product.map(prod => prod.produto.imagem);

    for (let link of img) {
        console.log('length forlink: ', link.length)
        return (
            <div>
                {link.map(res =>
                    <div key={res.link}>
                        <img src={res.link} />
                    </div>
                )}
            </div>
        )
    }
}

export default LinkImg;

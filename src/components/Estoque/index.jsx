
function Estoque({ est, un, loc, cod }) {

    if (est === 0) {
        return <h1>SEM ESTOQUE</h1>
    }

    if (est < 0) {
        return <h1>ESTOQUE NEGATIVO</h1>
    }

    if (est === 1) {
        return <h4>ESTOQUE A CONFIRMAR = {est} {un} Local: {loc}</h4>
    }

    return (
        <div>
            <h1>
            <span>Código: {cod}</span>
            <span> Estoque: {est} {un} Local: {loc}</span>
            </h1>
        </div>
    )

}

export default Estoque;

function Estoque({ est, un, loc }) {

    if (est === 0) {
        return <h1>SEM ESTOQUE</h1>
    }

    if (est < 0) {
        return <h1>ESTOQUE NEGATIVO</h1>
    }

    if (est === 1) {
        return <h4>ESTOQUE A CONFIRMAR = {est} {un} Localização: {loc}</h4>
    }

    return <h4>Estoque: {est} {un} Localização: {loc}</h4>
    
}

export default Estoque;
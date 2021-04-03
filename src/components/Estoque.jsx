
function Estoque({ est }) {

    if (est === 0) {
        return (
            <h1>SEM ESTOQUE</h1>
        )
    }

    if (est < 0) {
        return (
            <h1>ESTOQUE NEGATIVO</h1>
        )
    }
    if (est === 1) {
        return (
            <h2>Atenção! ESTOQUE = {est}</h2>
        )
    }

    return (
        
        <span>Estoque: {est}</span>

        
    )

}

export default Estoque;
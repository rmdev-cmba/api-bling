
function Estoque({ est, un, loc, cod }) {

    if (est === 0) {
        return (
            <div>
                
                    <span>Código: {cod}</span>
                    <span> - SEM ESTOQUE - Local: {loc}</span>
                
            </div>
        )
    }

    if (est < 0) {
        return <h2>Código: {cod} - ESTOQUE NEGATIVO - Local: {loc}</h2>
    }

    if (est === 1) {
        return (
        <h3>Código: {cod} - ESTOQUE A CONFIRMAR = {est} {un} - Local: {loc}</h3>
        )
    }

    return (
        <div>
            
                <span>Código: {cod}</span>
                <span>Estoque: {est} {un} - Local: {loc}</span>
            
        </div>
    )

}

export default Estoque;
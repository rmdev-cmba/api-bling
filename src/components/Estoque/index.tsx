
function Estoque({ est, un, loc, cod }) {

    if (est === 0) {
        return (
            <div>
                <h1>
                    <span>Código: {cod}</span>
                    <span> - SEM ESTOQUE - Local: {loc}</span>
                </h1>
            </div>
        )
    }

    if (est < 0) {
        return <h1>Código: {cod} - ESTOQUE NEGATIVO - Local: {loc}</h1>
    }

    if (est === 1) {
        return (
        <h4>Código: {cod} - ESTOQUE A CONFIRMAR = {est} {un} - Local: {loc}</h4>
        )
    }

    return (
        <div>
            <h1>
                <span>Código: {cod}</span>
                <span> - Estoque: {est} {un} - Local: {loc}</span>
            </h1>
        </div>
    )

}

export default Estoque;
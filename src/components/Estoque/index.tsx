
function Estoque({ est, un, loc, cod }) {

    if (est === 0) {
        return (
            <div className="flex-1 px-4 bg-gray-400 flex flex-col justify-center items-center">
                
                    <span>Código: {cod}</span>
                    <span className="pt-6 text-2xl text-red font-bold tracking-wide text-center"> - SEM ESTOQUE - Local: {loc}</span>
                
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
        <div className="flex-1 px-4 flex flex-col justify-center items-center">
            
                <span className="pt-6 text-2xl font-bold tracking-wide text-center">Código: {cod}</span>
                <span className="pt-6 text-2xl font-normal tracking-wide text-center">Estoque: {est} {un} - Local: {loc}</span>
            
        </div>
    )

}

export default Estoque;
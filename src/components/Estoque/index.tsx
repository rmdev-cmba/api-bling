import style from './Estoque.module.css';


function Estoque({ est, un, loc, cod }) {

    if (est === 0) {
        return (
            <div>
                
                    <p>Código: {cod}</p>
                    <span> - SEM ESTOQUE - Local: {loc}</span>
                
            </div>
        )
    }

    if (est < 0) {
        return <h2>Código: {cod} - ESTOQUE NEGATIVO - Local: {loc}</h2>
    }

    if (est === 1) {
        return (
        <h2>Código: {cod} - ESTOQUE A CONFIRMAR = {est} {un} - Local: {loc}</h2>
        )
    }

    return (
        <div className={style.stocking}>
            
                <h2>Código: {cod}</h2>
                <p>Estoque: {est} {un} - <span>Local: {loc}</span></p>
            
        </div>
    )

}

export default Estoque;
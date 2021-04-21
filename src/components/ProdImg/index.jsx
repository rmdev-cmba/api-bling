
function ProdImg({ imagem }) {
    // 'imagem' recebe o array 'imagem'
    
        return (
            <div>
                {imagem.map(res =>
                    <div key={res.index}>
                        <img src={res.link} />
                        {console.log(res.link)}
                    </div> 
                )}
            </div>
        )
    
}

export default ProdImg;

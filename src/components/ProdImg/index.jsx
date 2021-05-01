import Image from 'next/image';

function ProdImg({ imagem }) {
    // 'imagem' recebe o array 'imagem'
    // console.log('img', imagem[1])
    
        return (
            <div>
                {imagem.map(res =>
                    
                    <div key={res.index}>
                        <Image 
                        width={592}
                        height={592}
                        src={res.link}
                        objectFit="cover"
                        />
                        {/* <img src={res.link} /> */}
                        {console.log('links', res)}
                    </div> 
                )}
            </div>
        )
    
}

export default ProdImg;

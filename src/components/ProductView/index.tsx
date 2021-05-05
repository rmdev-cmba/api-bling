
const ProductView = ({ images }) => {
    // 'imagem' recebe o array 'imagem'
    // console.log('img', imagem[1])

    return (
        <div>
            {images.map(image => (
                <div key={image.index}>
                    <img
                        
                        width={1000}
                        height={1000}
                        // layout="responsive" não aceitou
                        src={image.link}
                        // objectFit="cover"
                    />
                    
                </div>
            ))}
        </div>
    )

}

export default ProductView;

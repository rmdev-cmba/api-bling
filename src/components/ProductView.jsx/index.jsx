import Image from 'next/image'
import s from './ProductView.module.css'
const ProductView = ({ images }) => {
    // 'imagem' recebe o array 'imagem'
    // console.log('img', imagem[1])

    return (
        <div>
            {images.map(image => (
                <div key={image.index}>
                    <img
                        className={s.img}
                        width={1000}
                        height={1000}
                        // layout="responsive" não aceitou
                        src={image.link}
                        // objectFit="cover"
                    />
                    {/* <img src={image.link} /> */}
                    {console.log('links', image)}
                </div>
            ))}
        </div>
    )

}

export default ProductView;

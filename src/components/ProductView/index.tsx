import Image from 'next/image'
import style from './ProductView.module.css'
const ProductView = ({ images }) => {
    // 'imagem' recebe o array 'imagem'
    // console.log('img', imagem[1])

    return (
        <div>
            {images.map(image => (
                <ul key={image.link}>
                    <img
                        className={style.img}
                        width={1000}
                        height={1000}
                        // layout="responsive" não aceitou
                        src={image.link}
                        // objectFit="cover"
                    />
                    {/* <img src={image.link} /> */}
                    {/* {console.log('links', image)} */}
                </ul>
            ))}
        </div>
    )

}

export default ProductView;

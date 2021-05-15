import Image from 'next/image'
import styles from './ProductView.module.css';

const ProductView = ({ images }) => {
    // 'imagem' recebe o array 'imagem'
   
    // for (let i = 0; i < images.length; i++){
    //     // console.log('img',i , images[i])
    // }

    const linksImagens = images.map(image => (image.link))


    return (
        <div className={styles.imgGroup}>

            <div>
                <Image 
                src={linksImagens[0]}
                width={450}
                height={450}
                 />
            </div>
            
        </div>
    )

}

export default ProductView;

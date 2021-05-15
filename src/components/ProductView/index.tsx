import Image from 'next/image'
import styles from './ProductView.module.css';

const ProductView = ({ images }) => {
    
    const linksImagens = images.map(image => (image.link))

    return (
        <div className={styles.imgGroup}>

            <div>
                <Image 
                src={linksImagens[0]}
                width={420}
                height={420}
                objectFit="contain"
                 />
            </div>
            
        </div>
    )

}

export default ProductView;

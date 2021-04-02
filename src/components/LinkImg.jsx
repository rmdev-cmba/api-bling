import Image from 'next/image'

function LinkImg({ product }) {
    const img = product.map(prod => prod.produto.imagem);
    const img2 = img.map(res => res)
    console.log('length img:', img.length)
    console.log('length img2:', img2.length)




    for (let link of img) {
        console.log('length forlink: ', link.length)
        for (let i = 0; i < link.length; i++) {


            return (
                <div>{link[i].link}</div>


            )

        }
    }







}

export default LinkImg;

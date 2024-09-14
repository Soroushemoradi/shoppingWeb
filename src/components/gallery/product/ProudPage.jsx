import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GalleryData from './galleryData';
import Footer from '../../footer/Footer';

function ProudPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const foundProduct = GalleryData.find(data => data.id === id);
    setProduct(foundProduct);
  }, [id])
  console.log(product)
  return (
    <>
    <div className='grid-2 mt-5 ms-5 mb-5'>
      <div>
        <img src={'/' + product?.image} alt={product?.id} className='w-75 ms-5 h-100' />
      </div>
      <div className='text-center'>
        <h3>{product?.discriotion}</h3>

      </div>
    </div>
    <Footer/>
    </>
  )
}

export default ProudPage
//price
//defaultValue
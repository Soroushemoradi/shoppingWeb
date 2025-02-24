import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import GalleryData from './galleryData';
import Footer from '../../footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../CardContext/cardContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProudPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const foundProduct = GalleryData.find(data => data.id === id);
    setProduct(foundProduct);
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      toast.success('Added to cart!', {
        position: 'bottom-left',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    else{
      toast.error("faild to add in cart!",{
        position: 'bottom-left',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  };

  return (
    <>
      <ToastContainer />
      <div className='grid-2 mt-5 ms-5 mb-5'>
        <div>
          <img src={'/' + product?.image} alt={product?.id} className='w-75 ms-5 h-75' />
        </div>
        <div className='text-center'>
          <h3>{product?.discriotion}</h3>
          <h5 className='mt-5 mb-5'><i>${product?.price}</i></h5>
          <div className='w-75 mx-auto mb-5'>
            <p>{product?.about}</p>
          </div>
          <button
            className='btn border rounded-5'
            onClick={handleAddToCart}
          >
            add to cart <FontAwesomeIcon icon={faCartShopping} className='ms-3' />
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProudPage;

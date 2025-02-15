import { useContext } from "react";
import { CartContext } from "../CardContext/cardContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Footer from "../footer/Footer";


function CartPage() {
    const { cartItems } = useContext(CartContext);

    return (
        <div className="container mt-5">
            <h2>Shopping Card</h2>
            {cartItems.length === 0 ? (
                <p>your Shopping Card is empty</p>
            ) : (
                <div className="d-flex">
                    {cartItems.map((item, index) => (
                        <>      <div className=' mt-5 ms-5 mb-5'>
                            <div>
                                <img src={'/' + item?.image} alt={item?.id} className='w-75 ms-5 h-75' />
                            </div>
                            <div className='text-center'>
                                <h3>{item?.discriotion}</h3>
                                <h5 className='mt-5 mb-5'><i>{item?.price}</i></h5>
                                <div className='w-75 mx-auto mb-5'>
                                    <p>{item?.about}</p>
                                </div>
                                <button
                                    className='btn border rounded-5'
                                >
                                    remove from card<FontAwesomeIcon icon={faTrash} className='ms-3' />
                                </button>
                            </div>
                        </div>
                    </>
                    ))}
                </div>
                
            )}
            <Footer />
        </div>
    );
}

export default CartPage;


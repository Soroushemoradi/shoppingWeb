import { useContext } from "react";
import { CartContext } from "../CardContext/cardContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";


function CartPage() {
    const { cartItems } = useContext(CartContext);

    console.log(cartItems)

    return (
        <div className="container mt-5">
            <h2>Shopping Card</h2>
            {cartItems.length === 0 ? (
                <p>your Shopping Card is empty</p>
            ) : (
                <div className="d-flex text-center">
                    {cartItems.map((item, index) => (
                        <>
                            <div className=' mt-5 ms-5 mb-5 w-25 border rounded-3 pt-2 pb-2 card-item '>
                                <Link className="link1 text-dark" to={`/Gallery/${item?.id}`}>
                                    <div className="">
                                        <img src={'/' + item?.image} alt={item?.id} className='w-75 rounded' />
                                    </div>
                                </Link >
                                <div className='text-center'>
                                    <h4>{item?.discriotion}</h4>
                                    <h5 className='mt-3 mb-3'><i>{item?.price}</i></h5>
                                    <p>Number:</p>
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


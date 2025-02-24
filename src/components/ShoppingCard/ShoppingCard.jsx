import { useContext } from "react";
import { CartContext } from "../CardContext/cardContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';

function CartPage() {
    const { cartItems, removeFromCart, updateCartItem } = useContext(CartContext);

    const handleIncreaseItem = (id, currentCount) => {
        updateCartItem(id, currentCount + 1);
    };

    const handleSubtractItem = (id, currentCount) => {
        if (currentCount > 1) {
            updateCartItem(id, currentCount - 1);
        }
    };

    const handleDeleteItem = (id) => {
        removeFromCart(id);
        toast.error("Removed from the cart", {
            position: 'top-left',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    const totalPrice = cartItems.reduce((acc, item) => acc + Number(item.price) * item.count, 0);

    return (
        <div className="container mt-5">
            <ToastContainer />
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your Shopping Cart is empty</p>
            ) : (
                <div className="grid-3 items-center">
                    {cartItems.map((item) => (
                        <div key={item.id} className="mx-auto mt-3 mb-3 w-75 border rounded-3 pt-2 pb-2 card-item">
                            <button className="btn border rounded-5" onClick={() => handleDeleteItem(item.id)}><FontAwesomeIcon icon={faTrash} className="text-danger"/></button>
                            <Link className="link1 text-dark text-center" to={`/Gallery/${item.id}`}>
                                <div>
                                    <img src={"/" + item.image} alt={item.id} className="w-75 rounded" />
                                </div>
                            </Link>
                            <div className="text-center">
                                <h4>{item.discriotion}</h4>
                                <h5 className="mt-3 mb-3"><i>${item.price}</i></h5>
                                <div className="d-flex ms-5">
                                    <button className="ms-2 btn" onClick={() => handleSubtractItem(item.id, item.count)}>
                                        <h5>-</h5>
                                    </button>
                                    <p><i>Number: {item.count}</i></p>
                                    <button className="btn" onClick={() => handleIncreaseItem(item.id, item.count)}>
                                        <h5>+</h5>
                                    </button>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            )}
            {cartItems.length !== 0 && (
                <div className="w-25 border rounded-4 text-center mt-4 mb-4 p-1 text-bg-secondary">
                    Total Price = ${totalPrice}
                </div>
            )}
            <Footer />
        </div>
    );
}

export default CartPage;

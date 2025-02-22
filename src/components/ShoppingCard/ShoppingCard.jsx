import { useContext } from "react";
import { CartContext } from "../CardContext/cardContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import { toast, ToastContainer,} from 'react-toastify';


function CartPage() {
    const { cartItems, removeFromCard } = useContext(CartContext);

    const itemCounts = cartItems.reduce((number, item) => {
        if (number[item.id]) {
            number[item.id].count += 1;
        } else {
            number[item.id] = { ...item, count: 1 };
        }
        return number;
    }, {});

    const handleDeleteItem=(id)=>{
        removeFromCard(id)
        toast.error("removed from the card", {
            position: 'top-left',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }

    const uniqueCartItems = Object.values(itemCounts);

    return (
        <div className="container  mt-5">
            <ToastContainer />
            <h2>Shopping Cart</h2>
            {uniqueCartItems.length === 0 ? (
                <p>Your Shopping Cart is empty</p>
            ) : (
                    <div className="grid-3 text-center items-center">
                    {uniqueCartItems.map((item) => (
                        <div key={item.id} className="mx-auto mt-3 mb-3 w-75 border rounded-3 pt-2 pb-2 card-item text-center">
                            <Link className="link1 text-dark" to={`/Gallery/${item.id}`}>
                                <div>
                                    <img src={"/" + item.image} alt={item.id} className="w-75 rounded" />
                                </div>
                            </Link>
                            <div className="text-center">
                                <h4>{item.discriotion}</h4>
                                <h5 className="mt-3 mb-3"><i>{item.price}</i></h5>
                                <p><i>Number: {item.count}</i></p>
                                <button className="btn border rounded-5" onClick={()=>handleDeleteItem(item.id)}>
                                    Remove from cart <FontAwesomeIcon icon={faTrash} className="ms-3" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <Footer />
        </div>
    );
}

export default CartPage;

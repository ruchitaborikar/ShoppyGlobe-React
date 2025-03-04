import PropTypes from "prop-types";
import { removeItem } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

function CartItems({ item }) {
    const dispatch = useDispatch();
    const [count, setCount] = useState(item.quantity || 1); // Default quantity is 1

    function handleRemoveItem() {
        dispatch(removeItem(item));
        setCount(0);
    }

    function handleIncrement() {
        setCount(prevCount => prevCount + 1);
    }

    function handleDecrement() {
        setCount(prevCount => Math.max(prevCount - 1, 1)); // Ensure min quantity is 1
    }

    return (
        <>
        <div className="cartItem">
            <img
                src={item.thumbnail}
                alt={item.title}
                className="item-image"
            />  
            
            <div className="item-details">
                <h3>{item.title}</h3>
                <p>Price: ₹ {(item.price * 80).toFixed(2)}</p>
                <p>Rating: {item.rating}</p>
                <p>No. of Items: {count}</p>
                <p>Total Price: ₹ {(count * item.price * 80).toFixed(2)}</p>

                {/* Quantity Update Buttons */}
                <div className="quantity-controls">
                    <button onClick={handleDecrement}>➖</button>
                    <span>{count}</span>
                    <button onClick={handleIncrement}>➕</button>
                </div>
            </div>

            {/* Remove Button */}
            <div className="">
                <button onClick={handleRemoveItem} className="primery">
                    Remove from Cart
                </button>
            </div>
                
        </div>
        <hr />
        </>
    );
}

// PropType validation for better debugging
CartItems.propTypes = {
    item: PropTypes.shape({
        thumbnail: PropTypes.string,
        title: PropTypes.string,
        rating: PropTypes.number,
        price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        quantity: PropTypes.number,
    }).isRequired,
};

export default CartItems;

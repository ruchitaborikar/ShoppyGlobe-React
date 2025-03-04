import { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import CartItems from "./CartItem";

function Cart() {
  const cartItems = useSelector((state) => state.cart?.Items || []);

  const [shippingDetails, setShippingDetails] = useState({
    name: "",
    address: "",
    city: "",
    postalCode: "",
    mblNumber: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setShippingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const totalPrice = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cartItems]);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Order placed successfully!\nCustomer: ${shippingDetails.name}\nTotal Price: ₹${(totalPrice * 80).toFixed(2)}`);
    setShippingDetails({ name: "", address: "", city: "", postalCode: "", mblNumber: "" });
  };

  return (
    <div className="cart-checkout-container">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <CartItems key={item.id} item={item} />
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>

      <h2>Total Price: ₹{(totalPrice * 89).toFixed(2)}</h2>

      {cartItems.length > 0 && (
        <div className="checkout-section">
          <h2 className="ship">Shipping Details</h2>
          <form onSubmit={handleSubmit}>
            <label>Full Name:</label>
            <input type="text" name="name" value={shippingDetails.name} onChange={handleInputChange} required />

            <label>Address:</label>
            <input type="text" name="address" value={shippingDetails.address} onChange={handleInputChange} required />

            <label>City:</label>
            <input type="text" name="city" value={shippingDetails.city} onChange={handleInputChange} required />

            <label>Postal Code:</label>
            <input type="text" name="postalCode" value={shippingDetails.postalCode} onChange={handleInputChange} required />

            <label>Mobile No:</label>
            <input type="tel" pattern="[6-9][0-9]{9}" name="mblNumber" value={shippingDetails.mblNumber} onChange={handleInputChange} required />

            <div className="buttons">
              <button className="primery" type="submit">Place Order</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Cart;

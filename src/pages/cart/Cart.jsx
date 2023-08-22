import CartItem from "../../components/context/CartItem";
import OrderSummary from "./OrderSummary";
import  "./cart.css";
import Modal from "../../components/modal/Modal";

import { useContext } from "react";
import CartContext from "../../components/context/CartContext";
const Cart = () => {
  const {CartItems,addToCart, removeFromCart,} = useContext(CartContext);
    const totalPrice = CartItems.reduce((acc, cur) => acc + cur.price * cur.quantity ,0).toFixed(2);
    return ( 
    <div className="cart">
        <div className="cart-title">Your shopping cart </div>
        <div div className="cart-wrapper">
<div className="cart-items">
    {CartItems.map((item ) =>(
  <CartItem  key ={item.id} removeFromCart={removeFromCart} addToCart={addToCart} item={item}
   />

    ))}
</div>
<OrderSummary  totalPrice= {totalPrice} />

</div>
        
        
       
        </div> );
}
 
export default Cart;
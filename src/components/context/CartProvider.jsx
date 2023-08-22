import { useState } from "react";
import CartContext from "./CartContext";
import CartItem from "./CartItem";



const  CartProvider = ({children}) =>{
   const [CartItems, setCartItems] = useState([]); 
   
   //add to cart
   const addToCart = (item) =>{
    const isExist = CartItems.find(cart => cart.id === item.id);
    if (isExist){
        setCartItems(
            CartItems.map((CartItem) => CartItem.id === item.id ? item : CartItem)
        )
    }
    else{
        setCartItems ((prev) =>[...prev, item]);
    }
    
   };




   
   const removeFromCart = (id) => {
    const cart = CartItems.filter( c => c.id !== id)
    setCartItems(cart);

   }
   return (
        <CartContext.Provider 
        value={{
            CartItems,
        
         addToCart, 
        removeFromCart,
        cartItemLength : CartItems.length,
        }}>
            {children}
        </CartContext.Provider>
   )
};
export default CartProvider;
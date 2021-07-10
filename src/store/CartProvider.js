import React from "react";
import cartContext from "./cart-context";

const CartProvider = () => {

    const addItemToCartHandler = () =>{};

    const removeItemToCartHandler = () =>{};

    const cartContext ={
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler

    };


  return 
  <cartContext.Provider value={cartContext}>
      {props.children}
      </cartContext.Provider>;
};

export default CartProvider;

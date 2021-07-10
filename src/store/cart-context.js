import React from 'react'

const  CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (Item) => {},
    remove: (id = {}),
});


export default cart-context

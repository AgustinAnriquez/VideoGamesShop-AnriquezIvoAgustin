import React, { useState } from "react"

const CartContext = React.createContext([])
export default CartContext

export const CartProvider = () =>{
    const [cart, setCart] = useState([])

    const isInCart = (id) => cart.some((product) => product.id == id)

    const addItem = (product, quantity) =>{
        
        if (isInCart(product.id)){
            setCart(cart.map(
                item =>{
                    if (item.id == product.id){
                        item.quantity = item.quantity + quantity
                        return item
                    }
                    else{
                        return item
                    }
                }   
            ))
        }
        else{
            const item = {
                ...product,
                quantity
            }
            setCart([...cart, item])
        }

        
    }
}
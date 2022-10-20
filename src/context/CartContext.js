import React, { useState } from "react"

const CartContext = React.createContext([])
export default CartContext

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])

    const isInCart = (id) => cart.some((product) => product.id === id)

    const addItem = (product, quantity) =>{
        
        if (isInCart(product.id)){
            setCart(cart.map(
                item =>{
                    if (item.id === product.id){
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

    const removeItem = (ItemId) => {
        setCart(cart.filter((item) => item.id !== ItemId))
    }

    const clear = () =>{
        setCart([])
    }

    //const total = cart.reduce((item, acumulador)=>acumulador + (item.price * item.quantity), 0)

    const total = cart.reduce((acumulador, item) => acumulador + (item.price * item.quantity), 0);

    const totalQuantity = cart.reduce((acumulador, item) => acumulador +  item.quantity, 0);

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clear, isInCart, total, totalQuantity}}>
            {children}
        </CartContext.Provider>
    )
}
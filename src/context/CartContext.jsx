import   {createContext, useContext, useState} from "react";
import cart from "../assets/cart/cart.jpeg";


const CartContext = createContext();

export const useCart = () => useContext(CartContext);


export const CartProvider = ({children}) =>{
    const [cartData , setCart] = useState([
        {
          id: 1,
          name: "Mericano Cold Coffee",
          description: "Top Mexican Coffee",
          price: 29.99,
          quantity: 1,
          image:cart,
        },
        {
          id: 2,
          name: "Mericano Cold Coffee",
          description: "Top Mexican Coffee",
          price: 29.99,
          quantity: 1,
          image:cart,
        },
        {
          id: 3,
          name: "Mericano Cold Coffee",
          description: "Top Mexican Coffee",
          price: 29.99,
          quantity: 1,
          image:cart,
        },
      ]);


    const addToCart = (product) =>{

        setCart((prevCart) => [...prevCart , product ]);
        console.log(product);
    }

    const updateQuantity = (id, change) => {
        setCart((items) =>
          items.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item)),
        )
      }
      const removeItem = (id) => {
        setCart((items) => items.filter((item) => item.id !== id))
      }

    return <CartContext.Provider value={{cartData  , updateQuantity , removeItem, addToCart}}>
        {children}
    </CartContext.Provider>
}
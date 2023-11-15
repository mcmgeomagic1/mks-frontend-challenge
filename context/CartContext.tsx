import React, { createContext, useEffect, useState } from 'react';
import { useProduct } from '../context/AppContext';

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  photo: string;
};

export const CartContext = createContext({} as CartContextType);

export function useCart() {
  return React.useContext(CartContext);
}

export function CartProvider({ children }: any) {
  const { products } = useProduct();
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [items, setItems] = useState<any>([]);
  const [counter, setCounter] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const handleCartOpenClose = ()=> {
    setIsCartOpen((prev: any)=> !prev)
  }


  const addToCart = (productId: number) => {
    const productToAdd = products.find((product: any) => product.id === productId);
    if (productToAdd) {
      const existingItem = items.find((item: any) => item.id === productId);

      if (existingItem) {
        const updatedCart = items.map((item: any) =>
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
        setItems(updatedCart);
      } else {
        const newCartItem = {
          id: productId,
          name: productToAdd.name,
          price: productToAdd.price,
          photo: productToAdd.photo,
          quantity: 1,
        };
        const updatedCart = [...items, newCartItem];
        setItems(updatedCart);
      }
    }
  };

  const removeFromCart = (id: number) => {
    const updatedCart = items.filter((item: any) => item.id !== id);
    setItems(updatedCart);
  };


  const updateQuantity =(id: number, quantity: number)=> {
    const updatedCart = items.map((item: any) =>
    item.id === id ? { ...item, quantity } : item
  );
  setItems(updatedCart);
  }

  const calculateTotalPrice = (cartItems: any) => {
    return cartItems.reduce((total: any, item: any) => {
      const product: any = products.find((p: any) => p.id === item.id);
      if (product) {
        total += item.quantity * product.price;
      }
      return total;
    }, 0);
  };

  useEffect(() => { 
    const newTotalPrice = calculateTotalPrice(items);
    setTotalPrice(newTotalPrice);
  }, [items, products]);

  return (
    <CartContext.Provider value={{cartProduts: items, isCartOpen, handleCartOpenClose , addToCart, removeFromCart, counter, updateQuantity, totalPrice}}>
      {children}
    </CartContext.Provider>
  );
}

type CartContextType = {
  totalPrice: number,
  cartProduts: CartItem[];
  addToCart: (item: any) => void;
  removeFromCart: (id: number) => void;
  counter: number, 
  updateQuantity: any, 
  isCartOpen: boolean,
  handleCartOpenClose: ()=> void
};
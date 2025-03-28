import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Movie } from '@/types/movie';

interface CartItem extends Movie {
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (movie: Movie) => void;
  removeFromCart: (movieId: number) => void;
  updateQuantity: (movieId: number, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  getDiscount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'movie_cart_items';

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    const savedItems = localStorage.getItem(CART_STORAGE_KEY);

    // when fail
    if(!savedItems) {
      return [];
    }

    return JSON.parse(savedItems);
  });

  // Save cart items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addToCart = (movie: Movie) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(item => item.id === movie.id);

      if (!existingItem) {
        return [...currentItems, { ...movie, quantity: 1 }];
      }

      return currentItems.map(item =>
        item.id === movie.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    });
  };

  const removeFromCart = (movieId: number) => {
    setItems(currentItems => currentItems.filter(item => item.id !== movieId));
  };

  const updateQuantity = (movieId: number, quantity: number) => {
    if (quantity < 1) 
      return;

    setItems(currentItems =>
      currentItems.map(item =>
        item.id === movieId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    localStorage.removeItem(CART_STORAGE_KEY);
  };

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    const subtotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);
    const discount = getDiscount();
    return subtotal - discount;
  };

  const getDiscount = () => {
    const totalItems = getTotalItems();
    const subtotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);
    
    if (totalItems > 5) {
      return subtotal * 0.2; // 20% discount for more than 5 items
    } else if (totalItems > 3) {
      return subtotal * 0.1; // 10% discount for more than 3 items
    }
    return 0;
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalItems,
        getTotalPrice,
        getDiscount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}; 
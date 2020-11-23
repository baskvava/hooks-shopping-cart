import React, { useState, createContext } from 'react';

export const CarContext = createContext();

export const CarProvider = props => {
  const [items, setItems] = useState([
    { name: "Vava A-Shirt", price: 630, id: 1, amount:0 },
    { name: "Vava B-Shirt", price: 600, id: 2, amount:0 },
    { name: "Vava C-Shirt", price: 400, id: 3, amount:0 },
    { name: "Vava D-Shirt", price: 500, id: 4, amount:0 },
    { name: "Vava E-Shirt", price: 450, id: 5, amount:0 }
  ]);

  const [seletedItems, setSeletedItems] = useState(items);

  const seletedAddItem = (id, amount) => {
    setSeletedItems(items.map((item) =>{
      if(item.id === id) {
        item.amount = amount+1
      }
      return item;
    }));    
  }

  const seletedMinusItem = (id, amount) => {
    setSeletedItems(items.map((item) =>{
      if(item.id === id) {
        item.amount = amount-1
      }
      return item;
    }));    
  }

  const removeItem = id => {
    setItems(items.filter(item => item.id !== id));
  };

  return(
    <CarContext.Provider value={{
      items, 
      removeItem, 
      seletedItems,
      seletedAddItem,
      seletedMinusItem
    }}>
      {props.children}
    </CarContext.Provider>
  )
}


import React, { useState, createContext } from 'react';

export const carContext = createContext();
export const amountContext = createContext();

export const CarProvider = props => {
  const [items, setItems] = useState([
    { name: "Vava T-Shirt", price: 630, id: 1 },
    { name: "Vava TT-Shirt", price: 600, id: 2 },
    { name: "Vava TT-Shirt", price: 400, id: 3 },
    { name: "Vava TT-Shirt", price: 500, id: 4 },
    { name: "Vava TT-Shirt", price: 450, id: 5 }
  ]);
  return(
    <carContext.Provider value={[items, setItems]}>
      {props.children}
    </carContext.Provider>
  )
}

export const AmountProvider = props => {
  const [totalAmount, setTotalAmount] = useState(0);
  return(
    <amountContext.Provider value={[totalAmount, setTotalAmount]}>
      {props.children}
    </amountContext.Provider>
  )
}

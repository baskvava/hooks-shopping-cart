import React, { useContext } from 'react';
import { CarContext } from '../Contexts/shoppingCarContext.js';
import Typography from '@material-ui/core/Typography';

export default function ShoppingCarAmount() {
  const { seletedItems } = useContext(CarContext);
  console.log(seletedItems);

  const itemsPrice = seletedItems.map(
    (seletedItem) => seletedItem.price*seletedItem.amount
  );

  const totalAmount = itemsPrice.reduce((pre, cur) => (pre += cur),0)

  // console.log(totalAmount);

  return (
    <div>
      <Typography variant="h6">
         Total Price: {totalAmount}
      </Typography>
    </div>
  );
}

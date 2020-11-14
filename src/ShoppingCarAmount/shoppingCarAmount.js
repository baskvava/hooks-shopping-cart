import React, { useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import { amountContext } from '../Contexts/shoppingCarContext.js';

export default function ShoppingCarAmount() {
  const [totalAmount] = useContext(amountContext);

  return (
    <div>
      <Typography variant="h6">
         Total Price: {totalAmount}
      </Typography>
    </div>
  );
}

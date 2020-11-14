import React, { useState, useContext, useEffect, useRef } from 'react';
import { amountContext } from '../Contexts/shoppingCarContext.js';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';


export default function ShoppingCarItem({price}) {
  const [count, setCount] = useState(0);
  const [totalAmount, setTotalAmount] = useContext(amountContext);


  let usePrevious = value => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  };

  const prevCount = usePrevious(count);

  useEffect(() => {
    if(count !==0 || prevCount>0 & count===0) {
        (prevCount < count)? setTotalAmount(totalAmount+price): setTotalAmount(totalAmount-price);
    }
  },[count]);

  return (
    <Grid item xs>
      <Grid container alignItems="center">
        <Grid item xs>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            onClick={ () => setCount(count+1) }
          >
            <AddIcon />
          </IconButton>
        </Grid>
        <Grid item xs>
          <Typography variant="h6">
            {count}
          </Typography>
        </Grid>
        <Grid item xs>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            onClick={ () => setCount(count-1) }
          >
            <RemoveIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );

}

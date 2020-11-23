import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CarContext } from '../Contexts/shoppingCarContext.js';
import Grid from '@material-ui/core/Grid';
import ShoppingCarItem from './shoppingCarItem.js';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

export default function ShoppingCar() {
  const classes = useStyles();
  const {items} = useContext(CarContext);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          ShoppingCart
        </Grid>
        <Grid item xs={12}>
          {items.map((item) =>
            <ShoppingCarItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price} />
          )}
        </Grid>
      </Grid>
    </div>
  );
}

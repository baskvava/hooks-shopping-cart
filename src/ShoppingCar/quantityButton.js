import React, { useState, useContext } from 'react';
import { CarContext } from '../Contexts/shoppingCarContext.js';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';


export default function ShoppingCarItem({id}) {
  const [count, setCount] = useState(0);
  const {seletedAddItem, seletedMinusItem} = useContext(CarContext);

  const handleAddOnClick = () => {    
    setCount(count+1);
    seletedAddItem(id, count);    
  }  

  const handleMinusOnClick = () => {
    setCount(count-1);
    seletedMinusItem(id, count);    
  }  
  
  
  return (
    <Grid item xs>
      <Grid container alignItems="center">
        <Grid item xs>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            onClick={handleAddOnClick}
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
            onClick={handleMinusOnClick}
          >
            <RemoveIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );

}

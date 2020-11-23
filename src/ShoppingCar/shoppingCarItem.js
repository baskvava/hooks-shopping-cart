import React, { useContext } from 'react';
import { CarContext } from '../Contexts/shoppingCarContext.js';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import QuantityButton from './quantityButton.js';

const useStyles = makeStyles((theme) => ({
  section: {
    margin: theme.spacing(3, 2)
  },
  cover: {
    width: 151,
  },
}));


export default function ShoppingCarItem({name, price, id}) {
  const classes = useStyles();
  const { removeItem } = useContext(CarContext);
  
  return (
    <div className={classes.section}>
      <Grid container alignItems="center">
        <Grid item xs>
        <img
          className={classes.cover}
          src="/static/images/cards/live-from-space.jpg"
          title="Live from space album cover"
        />
        </Grid>
        <Grid item xs>
          <Typography gutterBottom variant="h4">
            {name}
          </Typography>
        </Grid>        
        <Grid item xs>
          <Grid container alignItems="center">
            <QuantityButton id={id}/>
          </Grid>
        </Grid>
        <Grid item xs>
          <Typography variant="h6">
            ${price}
          </Typography>
        </Grid>
        <Grid item xs>
          <IconButton 
            aria-label="delete"            
            onClick={() => removeItem(id)}
          >
            <DeleteIcon fontSize="large"/>
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}

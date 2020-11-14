import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import QuantityButton from './quantityButton.js';

const useStyles = makeStyles((theme) => ({
  section: {
    margin: theme.spacing(3, 2)
  },
  cover: {
    width: 151,
  },
}));


export default function ShoppingCarItem({name, price}) {
  const classes = useStyles();
  const [age, setAge] = useState('');
  
  const handleChange = (event) => {
    setAge(event.target.value);
  };

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
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs>
          <Grid container alignItems="center">
            <QuantityButton price={price}/>
          </Grid>
        </Grid>
        <Grid item xs>
          <Typography variant="h6">
            ${price}
          </Typography>
        </Grid>
        <Grid item xs>
          <IconButton aria-label="delete">
            <DeleteIcon fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}

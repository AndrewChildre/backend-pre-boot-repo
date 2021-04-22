import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',

    color: theme.palette.text.secondary,
  },

}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid alignItems="stretch" container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Core Values</Paper>
        </Grid>
        <Grid item xs={6}>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJSoQVS7W6R2ywENCKUeTm4dgRioNX2iIHhA&usqp=CAU" alt="moto"/>
        </Grid>
        <Grid item xs={6}>HONOR <br/>
 
Honor guides Marines to exemplify the ultimate in ethical and moral behavior. Never lie, never cheat or steal; abide by an uncompromising code of integrity; respect human dignity and respect others. Honor compels Marines to act responsibly, to fulfill our obligations and to hold ourselves and others accountable for every action.
        </Grid>
        <Grid item xs={6}>
          
COURAGE
 
Courage is the mental, moral and physical strength ingrained in Marines. It carries us through the challenges of combat and aids in overcoming fear. It is the inner strength that enables us to do what is right, to adhere to a higher standard of personal conduct and to make tough decisions under stress and pressure.
        </Grid>
        <Grid item xs={6}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPpVNzCMwM8oJ8txpIeT-2Yj5e8Q0ckQBa8g&usqp=CAU" alt="moto"/>
        </Grid>
        <Grid item xs={6}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsqhg5K5EJnTahobqO4LDqqGD1d7i6dWSJJg&usqp=CAU" alt="moto"/>
        </Grid>
        <Grid item xs={6}>
          
COMMITMENT
 
Commitment is the spirit of determination and dedication found in Marines. It leads to the highest order of discipline for individuals and units. It is the ingredient that enables constant dedication to Corps and country. It inspires the unrelenting determination to achieve victory in every endeavor.
        </Grid>
      </Grid>
    </div>
  );
}

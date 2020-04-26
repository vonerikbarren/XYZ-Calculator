import React from 'react';
import './CalcButtons.css';

// -> Material-UI <-
import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: "grey"
  },
  grid: {
    backgroundColor: "black"
  }


}));



function CalcButton() {

  const mui = useStyles();

  return (

    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper elevation={3} className={mui.paper}>
          <Button className={mui.button}>Click</Button>
        </Paper>
      </Grid>
    </Grid>



  );
}

export default CalcButton;
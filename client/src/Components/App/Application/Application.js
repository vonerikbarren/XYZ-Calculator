import React, { useRef, useEffect } from 'react';
import './Application.css';

// -> Material-UI <-
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// -> GSAP <-
import { TweenMax, Power3 } from 'gsap';

// --> Other Components <--
import CalcButton from '../../CalcButtons/CalcButtons';


// --> Styling <--
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: "#282c34"
  },
  grid: {
    backgroundColor: "black"
  },
  AppBody: {
    background: "yellow"
  }


}));

export default function Application() {

  const mui = useStyles();

  return (

    <Grid container spacing={3}>





      <Grid item xs={3}>

      </Grid>

      <Grid item xs={1}>
        <CalcButton number="1" />
        <CalcButton number="4" />
        <CalcButton number="7" />
        <CalcButton number="." />
      </Grid>

      <Grid item xs={1}>
        <CalcButton number="2" />
        <CalcButton number="5" />
        <CalcButton number="8" />
        <CalcButton number="0" />
      </Grid>

      <Grid item xs={1}>
        <CalcButton number="3" />
        <CalcButton number="6" />
        <CalcButton number="9" />
        <CalcButton number="=" />

      </Grid>

      <Grid item xs={2}>
        <CalcButton number="+" />
        <CalcButton number="-" />
        <CalcButton number="x" />
        <CalcButton number="÷" />

      </Grid>

      <Grid item={4}>

      </Grid>
    </Grid >


  );
}


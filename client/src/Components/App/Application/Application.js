import React, { useRef, useEffect } from 'react';
import './Application.css';

// -> Material-UI <-
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// -> GSAP <-
import { TweenMax, Power3 } from 'gsap';


// --> Styling <--
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
  },
  AppBody: {
    background: "yellow"
  }


}));

export default function Application() {

  const mui = useStyles();

  return (

    
  )
}


import React from 'react';
import './App.css';

//-------Material-UI-------------
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// -> Application Imports <-
import AppSpace from './Components/App/AppSpace/AppSpace';

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



function App() {
  const mui = useStyles();

  return (
    <div className="App">
      <AppSpace />


    </div>
  );
}

export default App;

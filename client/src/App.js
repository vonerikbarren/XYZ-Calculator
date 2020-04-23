import React from 'react';
import './App.css';

//-------Material-UI-------------
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }

}));



function App() {
  const mui = useStyles();

  return (
    <div className="App">
      <div>Fish</div>
      <h1 className="text-warning">Hello React</h1>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={2} className={mui.paper}>
            <Typography>
              Hello React
            </Typography>
          </Paper>
        </Grid>
      </Grid>


    </div>
  );
}

export default App;

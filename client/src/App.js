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

      <Grid className={mui.grid} container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={2} className={mui.paper}>
            <Typography>
              <div className="container-fluid jumbotron bg-dark border border-warning">
                <Paper elevation={2}>
                  <h1>Hello React</h1>
                  <Typography> Whats up </Typography>
                  <Typography> Whats up </Typography>
                </Paper>
              </div>
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={1} className={mui.paper}>

            <Grid container spacing={3}>
              <Grid item xs={3}>
                <Paper elevation={3} className={mui.paper}>
                  <Typography>
                    Hello React
                  </Typography>
                </Paper>
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item xs={3}>
                <Paper elevation={3} className={mui.paper}>
                  <Typography>
                    Hello React
                  </Typography>
                </Paper>
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item xs={3}>
                <Paper elevation={3} className={mui.paper}>
                  <Typography>
                    Hello React
                  </Typography>
                </Paper>
              </Grid>
            </Grid>


          </Paper>
        </Grid>
      </Grid>


    </div>
  );
}

export default App;

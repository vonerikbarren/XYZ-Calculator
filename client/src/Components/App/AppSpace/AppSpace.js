import React from 'react';
import './AppSpace.css';

// -> Material-UI <-
import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// -> Component imports <-
import CalcButton from '../../CalcButtons/CalcButtons';


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



function AppSpace() {

  const mui = useStyles();

  return (

    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper elevation={3} className={mui.paper}>

          <div className="AppBodyMain">
            <div className="AppBody">
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <div className='Application'>
                    <CalcButton />
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>

        </Paper>
      </Grid>
    </Grid>



  );
}

export default AppSpace;
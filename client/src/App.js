import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

import ImgMediaCard from './components/ImgMediaCard';
import NoInfo from './components/NoInfo';
import {cities, database} from './db';

const styles = theme => ({
  root: {
    overflow: 'hidden',
    padding: `0 ${theme.spacing.unit * 3}px`,
  },
  wrapper: {
    maxWidth: 400,
    margin: "0 auto",
  },
  paper: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit * 2,
  },
  form: {
    width: "100%",
  },
  formControl: {
    minWidth: 120,
    margin: "0 auto",
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class App extends Component {
  state={
    name: '',
    location: '',
    accquainted: null,
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  checkAccquainted = () => {
    const {name, location} = this.state;
    let accquainted = null;
    for(let person of database){
      if(name.toLocaleLowerCase === person.name.toLocaleLowerCase && location === person.location) {
        console.log("I know this person");
        accquainted = true;
      }
    }

    if(accquainted){
      this.setState({accquainted}) ;
    } else {
      this.setState({accquainted: false});
    }

  }

  render() {
    const { classes } = this.props;
    const {accquainted} = this.state ;
    return (
      <div className="App">
        <header className="">
          <h4>Bạn hãy điền vào thông tin, nếu đúng thì mình sẽ đưa số đt của mình cho bạn</h4>
        </header>
        <main className={classes.root}>
          <div className={classes.wrapper}>
            <Paper className={classes.paper}>
              <Grid container wrap="nowrap" spacing={16}>
                {/* <Input value={this.state.name} onChange={(event)=>{this.handleInputChange(event)}}/> */}
                <form onSubmit={this.handleFormSubit} className={classes.form}>
                  <FormControl className={classes.formControl}>
                    <TextField value={this.state.name} name="name" label="Tên của bạn" margin="normal" onChange={this.handleChange}></TextField>
                    <Select
                      value={this.state.location}
                      onChange={this.handleChange}
                      name="location"
                      id="location"
                      displayEmpty
                    >
                      <MenuItem value="">
                        <em>Thành phố</em>
                      </MenuItem>
                      {
                        cities.map((city, index)=>{
                          return <MenuItem key={index} value={city}>{city}</MenuItem>
                        }
                      )
                      }
                      {/* <MenuItem value={'TpHCM'}>TpHCM</MenuItem>
                      <MenuItem value={'Hà Nội'}>Hà Nội</MenuItem>
                      <MenuItem value={'An Giang'}>An Giang</MenuItem> */}
                    </Select>
                    <Button variant="outlined" color="primary" className={classes.button} onClick={this.checkAccquainted}>
                      Send
                    </Button>
                  </FormControl>

                  
                </form>
              </Grid>
            </Paper>
            <br/>
            {accquainted === true ? <ImgMediaCard name={this.state.name}></ImgMediaCard> : null }
            {accquainted === false ? <NoInfo></NoInfo> : null }
            
          </div>

        </main>
      </div>
    );
  }
}

// export default App;
App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
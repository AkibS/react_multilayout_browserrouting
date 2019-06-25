import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import styles from '../assets/layout/loginLayoutStyle';
import { withStyles } from '@material-ui/core/styles';
//import logo from '../assets/containers/login/logo.png'

import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super();
    this.state = {
      height: window.innerHeight,
      width: window.innerWidth,
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  handleChange(event) {
    if (event.target.id === "email") {
      this.setState({ email: event.target.value });
    }

    if (event.target.id === "password") {
      this.setState({ password: event.target.value });
    }

  }

  handleSubmit(event) {
    this.props.history.push(`/dashboard`);
    event.preventDefault();
  }

  updateDimensions() {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    });
  }

  render() {
    const { classes } = this.props;
    const logoComponent = this.state.width > 600 ? <Avatar className={classes.avatar}>
      <LockOutlinedIcon />
    </Avatar> :"Logo"; 
    // <img src={logo} alt="Logo" className={classes.logoImage} />;

    return (
      <div className={classes.paper}>
        {logoComponent}
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={this.handleSubmit} >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={this.state.email}
            onChange={this.handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }

  componentDidMount() {
    console.log(this.state.height);
    // Additionally I could have just used an arrow function for the binding `this` to the component...
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

}

export default withStyles(styles)(Login);
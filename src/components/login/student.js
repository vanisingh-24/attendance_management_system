import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import firebase from 'firebase';
import triangle from '../../assets/triangle1.png';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import styles from './styles'

class StudentComponent extends Component {

    state = {
        email: '',
        password: '',
        loginError: ''
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {

        const { email, password } = this.state;

        e.preventDefault();
        // firebase
        //     .auth()
        //     .signInWithEmailAndPassword(email, password)
        //     .then(() => {
        //         this.props.history.push('/dashboard')
        //     })
        //     .catch(err => {
        //         this.setState({
        //             loginError: 'Server Error'
        //         })
        //     })
    }


    render() {

        const { classes } = this.props;
        const { email, password, loginError } = this.state;

        return (
            <div className={classes.bg} >
             
            <main className={classes.main}>
                <CssBaseline></CssBaseline>
                <Paper className={classes.paper}>
                    <Typography className={classes.head} component="h1" variant="h2">Student Login</Typography>
                    <Typography className={classes.desc} variant="h6">Sign in and start managing your candidates</Typography>
                    <form onSubmit={this.handleSubmit} className={classes.form}>
                        <FormControl className={classes.input} required fullWidth margin="normal">
                            <InputLabel className={classes.text} htmlFor="email">Login</InputLabel>
                            <Input autoComplete="email" id="email" name="email" value={email} onChange={this.handleChange} />
                        </FormControl>
                        <FormControl className={classes.input} required fullWidth margin="normal">
                            <InputLabel className={classes.text} htmlFor="password">Password</InputLabel>
                            <Input type="password" id="password" name="password" value={password} onChange={this.handleChange} />
                        </FormControl>
                        <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    className={classes.check}
                    label="Remember me"
                 />
                        <Typography component="h5" variant="h6" className={classes.forgot}>Forgot password?</Typography>
                        <Button type="submit" fullWidth variant="contained" className={classes.submit}>Login</Button>
                    </form>
                    {
                        loginError ?
                            <Typography component="h5" variant="h6" className={classes.errorText}>
                                Incorrect Login Information
                            </Typography> :
                            null
                    }
                    {/* <Typography component="h5" variant="h6" className={classes.noAccountHeader}>Don't Have An Account?</Typography> */}
                    {/* <Link className={classes.signUpLink} to="/signup">Sign Up!</Link> */}
                </Paper>
                <div className={classes.img} >
                    <img src={triangle} />
                </div>
                <div className={classes.img1} >
                    <img src={triangle} />
                </div>
                <div className={classes.img2} >
                    <img src={triangle} />
                </div>
            </main>

            </div>
        )
    }

}

export default withStyles(styles)(StudentComponent);
const styles = theme => ({
  main: {
    // marginTop: '50px',
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    paddingTop: '190px',
  },
  head: {
    // fontSize: '50px',
    color: '#F5F9FC',
    //textAlign: 'center',
    fontFamily: 'Lato',
fontStyle: 'Bold',
fontSize: '55px',
lineHeight: '75px',

marginLeft: '15px',
  },
  bg: {
    // marginTop: '-160px',
    background: '#1C0040',
    height: '790px'
  },
  desc: {
    // fontSize: '15px',
    color: '#FFFFFF',
    marginLeft: '20px',
    //textAlign: 'center',
    fontFamily: 'Lexend Deca',
fontStyle: 'Regular',
fontSize: '16px',
lineHeight: '20px'
  },
  paper: {
    
   background: '#1C0040',
    //marginTop: theme.spacing.unit * 8,
    display: 'flex',
     width: '400px',
    flexDirection: 'column',
    marginLeft: '-300px',
    //paddingTop: '100px',
    //marginTop: '150px',
    //   alignItems: 'center',
    //padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing.unit,
    //       background: '#31066B',
    // borderRadius: '10px'
  },
  input: {
    background: '#31066B',
    borderRadius: '10px',
    width: '300px',
    marginLeft: '30px'
  },
  text: {
    color: '#FFFFFF',
    fontFamily: 'Lexend Deca',
fontStyle: 'normal',
fontWeight: 'normal',
fontSize: '14px',
lineHeight: '20px',
marginTop: '-11px',
marginLeft: '20px',
/* identical to box height, or 143% */

  },
  check:{
    fontFamily: 'Montserrat',
fontStyle: 'normal',
fontWeight: '500',
fontSize: '14px',
lineHeight: '17px',

textAlign: 'center',

color: '#FFFFFF',
marginLeft: '17px'

  },
  submit: {
    background: '#6A29F7',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.3)',
    borderRadius: '10px',
    width: '300px',
    marginLeft: '30px',
    marginTop: theme.spacing.unit * 3,
  },
  img: {
    marginTop: '-450px',
  },
  img1: {
    marginTop: '-367px',
    marginLeft: '240px',
  },
  img2: {
    marginTop: '-150px',
    marginLeft: '120px',
  },

  noAccountHeader: {
    width: '100%'
  },
  signUpLink: {
    width: '100%',
    textDecoration: 'none',
    color: '#303f9f',
    fontWeight: 'bolder'
  },
  forgot: {
     display: 'inline',
     marginTop: '10px',
     fontFamily: 'Montserrat',
fontStyle: 'normal',
fontWeight: '500',
fontSize: '16px',
lineHeight: '17px',
textAlign: 'center',
marginLeft: '25px',
color: '#6A29F7'

  },
  errorText: {
    color: 'red',
    textAlign: 'center'
  }
});
export default styles;
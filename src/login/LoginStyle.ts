const LoginStyle = {
  fieldSectionBox: {
    display: 'inline-flex',
    width: '100%',
    margin: '1rem',
  },
  card: {
    maxWidth: 450,
    margin: '10rem 24rem 10rem 26rem',
    border: '3px solid lightgray',
    padding: '1rem',
  },
  heading: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '1rem',
  },
  labelBox: {
    width: '30%',
    display: 'flex',
    alignItems: 'center',
  },
  fieldBox: {
    width: '100%'
  },
  field: {
    width: '90%'
  },
  btnBox: {
    display: 'flex',
    justifyContent: 'center',
    margin: '0.5rem 1rem 1rem 1rem',
  },
  btn: {
    width: '115px',
    border: '1px solid',
    backgroundColor: '#000000',
    color: '#ffffff',
    borderRadius: '8px',
    marginRight: '2rem',
    ':hover': {
        backgroundColor: '#000000',
    },
    ':disabled': {
        backgroundColor: 'lightgrey'
    }
  }
};

export default LoginStyle;

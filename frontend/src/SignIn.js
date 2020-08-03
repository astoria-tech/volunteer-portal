import React from "react";
import isEmail from "validator/lib/isEmail";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import "./SignIn.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    paddingTop: "20px",
    paddingBottom: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: '100%',
    background: '#f7f2eb',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    borderRadius: '0px',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [value, setValue] = React.useState("");
  const [error, _setError] = React.useState(false);
  const errorRef = React.useRef(error);
  const [submitted, setSubmitted] = React.useState(false);
  const [authMethod, _setAuthMethod] = React.useState("");
  const authMethodRef = React.useRef(authMethod);

  const setError = bool => {
    errorRef.current = bool;
    _setError(bool);
  }

  const setAuthMethod = value => {
    authMethodRef.current = value;
    _setAuthMethod(value);
  }

  const errorMessage = error
    ? "Please enter a valid Email Address or Phone Number"
    : "";

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isEmail(value)) {
      setError(false);
      setAuthMethod("email");
    }

    const phoneNumber = parsePhoneNumberFromString(value, "US");
    if (phoneNumber && phoneNumber.isValid()) {
      setError(false);
      setAuthMethod("phone");
    }

    if (!authMethodRef.current) {
      setError(true);
    }

    if (!errorRef.current){
      fetch('/api/v1/auth',{
        method:'POST',
        headers:{
          'content-type':'application/json',
          accept:'application/json'

        },
        body: JSON.stringify({
          [authMethodRef.current]: value,
        }),
      });
      setSubmitted(true);
    }
  };

  return (
    <Container
      component="main"
      onKeyPress={(event) => {
        if (event.key === "Enter") {
          handleSubmit(event);
        }
      }}
      disableGutters
      maxWidth={false}
    >
      <CssBaseline />
      <div className={classes.paper}>
        { submitted
          ? <div className="submitted">
              <p className="submitted-text">Your login link will be sent to you by {authMethod === 'email' ? 'email' : 'text message'} momentarily.</p>
            </div>
          : <>
              <p className="directions">
                Enter your Email Address or Phone Number below to receive your login
                link
              </p>
              <form className={classes.form} noValidate>
                <TextField
                  error={error}
                  className="signin-input"
                  helperText={errorMessage}
                  required
                  id="emailOrPhoneNumber"
                  name="emailOrPhoneNumber"
                  autoFocus
                  placeholder="Email Address or Phone Number"
                  value={value}
                  onChange={handleChange}
                  variant="outlined"
                />
                <Button
                  onClick={handleSubmit}
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={error ? "submit error" : "submit"}
                >
                  Submit
              </Button>
                <Grid container justify="center">
                  <Grid item >
                    <Link
                      href="https://www.astoriamutualaid.com/give-help"
                      variant="body2"
                      className="link"
                      underline="always"
                    >
                      {"Not a volunteer yet? Sign up here!"}
                    </Link>
                  </Grid>
                </Grid>
              </form>
          </>
        }
      </div>
    </Container>
  );
}

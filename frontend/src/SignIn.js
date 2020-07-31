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
  const [error, setError] = React.useState(false);
  const errorMessage = error
    ? "Please enter a valid Email Address or Phone Number"
    : "";

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let authMethod=''

    if (isEmail(value)) {
      setError(false);
      console.log("valid email");
      authMethod='email'
    }

    const phoneNumber = parsePhoneNumberFromString(value, "US");
    if (phoneNumber && phoneNumber.isValid()) {
      setError(false);
      console.log("valid phone number");
      authMethod='phone'
    }

    if(!authMethod){
      setError(true);
    }

    // test API call
    if(!error){
      fetch('/api/v1/auth',{
        method:'POST',
        headers:{
          'content-type':'application/json',
          accept:'application/json'
        },
        body:JSON.stringify({
          [authMethod]:value
        })
      })
        .then(r => r.json())
        .then(data => console.log(data))
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
        <p>
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
            className={ error ? "submit error" : "submit"}
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
      </div>
    </Container>
  );
}

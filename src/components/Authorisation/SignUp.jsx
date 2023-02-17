import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/Contexts";
import axios from "axios";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="">
        Gofra
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  let { isAuth, setAuth, setUserName, setIsSeller, cart, walletBalance } =
    React.useContext(AuthContext);
  let [sell, setSell] = React.useState(false);


  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    let name = data.get("firstName") + " " + data.get("lastName");
    let address = data.get("Address");
    let email = data.get("email");
    let password = data.get("password");
    let confPass = data.get("conPassword");
    let isSelling = sell;

    let letterNumber = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/;
    let specialChar = /[!@#$%^&*(),.?":{}|<>]/;

    if((confPass.length<=6 || password<=6)) return alert("Password Cannot be less than 6 Characters!")
    if(!password.match(letterNumber)) return alert("Password must contain atleast one Number, Upper Case and Lower Case Character")
    if(!password.match(specialChar)) return alert ("Provide atleast one Special Case Character")
    if(confPass!= password) return alert("Password Mismatched")


    
    let obj = {
      name,
      address,
      email,
      password,
      cart,
      walletBalance,
      isSelling,
      sellerItems: sell ? [] : null,
    };
    setUserName(name);
    sell === true ? setIsSeller(true) : setIsSeller(false);

    await axios.post("https://sedate-laced-chestnut.glitch.me/users",obj)

    // after uploading
    setAuth(true);
  };

  if (isAuth) return <Navigate to="/" />;
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="conPassword"
                  label="Confirm Password"
                  type="password"
                  id="conPassword"
                  autoComplete="confirm-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Address"
                  label="Address"
                  type="text"
                  id="address"
                  autoComplete="address"
                />
              </Grid>
              <Grid item xs={12} width={"100%"}>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={() => {
                        setSell(!sell);
                      }}
                      color="primary"
                    />
                  }
                  label="Want To Sell?"
                  name="sell"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

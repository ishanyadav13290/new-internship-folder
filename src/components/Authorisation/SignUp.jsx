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
import { Navigate, NavLink } from "react-router-dom";
import { AuthContext } from "../Context/Contexts";
import axios from "axios";
import { db, lb } from "../Static/theme";
import useAlert from "../AlertPopUp/Alert";
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
  let { setUserEmail,isAuth, setAuth, otp, setOTP, userPhone, setUserPhone, setUserName, setIsSeller, cart, walletBalance,trigger } =
    React.useContext(AuthContext);
  let [sell, setSell] = React.useState(false);
  let [step, setStep] = React.useState(1);
  let [OneTimePass, setOneTimePass] = React.useState(0)
  let [inputOTP, setInputOTP] = React.useState(0)

  async function handleOTP() {
    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 6; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    console.log(await axios.post("http://localhost:3001/sendOtp", {
      mobileNumber: userPhone,
      otp: OTP
    }))
    setOneTimePass(OTP)
  }
  let tempPhone
  function handleNumber(e) {
    let val = e.target.value
    tempPhone = val
    setUserPhone(tempPhone)
  }
  function handleOTPChange(e) {
    let val = e.target.value
    setInputOTP(val)
  }

  function handleNext() {
    if (OneTimePass !== inputOTP) return alert("Wrong OTP")
    setStep(2)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    let email = data.get("email");
    let password = data.get("password")
    let confPass = data.get("confPass")

    let isSelling = sell;

    let letterNumber = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/;
    let specialChar = /[!@#$%^&*(),.?":{}|<>]/;


    if((confPass.length<=6 || password<=6)) return alert("Password Cannot be less than 6 Characters!")
    if(!password.match(letterNumber)) return alert("Password must contain atleast one Number, Upper Case and Lower Case Character")
    if(!password.match(specialChar)) return alert ("Provide atleast one Special Case Character")
    if (confPass != password) return alert("Password Mismatched");
    let checking = await axios.get("http://localhost:3001/users");
    checking = checking.data;
    console.log(checking)
    for(let i of checking){
      if(i.email==email || i.phone==userPhone){
        return alert("The Account already Exists")
      }
    }

    let obj = {
      name:"",
      phone: userPhone,
      email,
      password,
      cart,
      isSelling,
      sellerItems: sell ? [] : null,
      credits:0,
      creditHistory:[],
      pendingItems:[],
      companyInfo:{},
      orders:[],
      address:{}
    };
    console.log(obj)
    sell === true ? setIsSeller(true) : setIsSeller(false);

    // await axios.post("https://sedate-laced-chestnut.glitch.me/users",obj)
    axios.post("http://localhost:3001/users", obj)
    trigger("lightgreen","Login SuccessFully")
    // after uploading
    setAuth(true);
    console.log(email)
    setUserEmail(email)
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
              <>
                <Grid item xs={12} sm={8} sx={{ display: step == 2 ? "none" : "block" }}>
                  <TextField
                    autoComplete="phone"
                    name="phoneNumber"
                    required
                    fullWidth
                    type={"number"}
                    id="phoneNumber"
                    label="Phone Number"
                    autoFocus
                    onChange={handleNumber}
                  />
                </Grid>
                <Grid item xs={12} sm={4} sx={{ display: step == 2 ? "none" : "flex", alignItems: "center" }}>
                  <Button onClick={handleOTP} variant="outlined" sx={{ color: lb, borderColor: lb }}>Send OTP</Button>
                </Grid>
                <Grid sx={{ display: step == 2 ? "none" : "block" }} item xs={12} sm={12}>
                  <TextField
                    name="otp"
                    required
                    fullWidth
                    id="otp"
                    label="OTP"
                    type={"number"}
                    onChange={handleOTPChange}
                  />
                </Grid>
              </>
              <>
                <Grid item xs={12} sm={12} sx={{ display: step == 2 ? "block" : "none" }}>
                  <TextField
                    autoComplete="email"
                    name="email"
                    required
                    fullWidth
                    type={"email"}
                    id="email"
                    label="Email ID"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={12} sx={{ display: step == 2 ? "block" : "none" }}>
                  <TextField
                    name="password"
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    type={"text"}
                  />
                </Grid>
                <Grid item xs={12} sm={12} sx={{ display: step == 2 ? "block" : "none" }}>
                  <TextField
                    name="confPass"
                    required
                    fullWidth
                    id="confPass"
                    label="Confirm Password"
                    type={"text"}
                  />
                </Grid>
              </>
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
                  label="I Want To Sell"
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
              sx={{
                display: step == 2 ? "none" : "block", mt: 3, mb: 2, bgcolor: lb, "&:hover": {
                  bgcolor: db,
                }
              }}
              onClick={handleNext}
              fullWidth
              variant="contained"
            >
              Next
            </Button>
            <Button
              sx={{
                display: step == 2 ? "block" : "none", mt: 3, mb: 2, bgcolor: lb, "&:hover": {
                  bgcolor: db,
                }
              }}
              type="submit"
              fullWidth
              variant="contained"
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <NavLink to="/login">
                  Already have an account? Sign in
                </NavLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

import { ThemeProvider } from "@emotion/react";
import { LockOutlined } from "@mui/icons-material";
import { Avatar, Button, Checkbox, Container, createTheme, CssBaseline, Divider, FormControlLabel, Grid, Input, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { Link, Navigate, NavLink } from "react-router-dom";
import { AuthContext } from "../Context/Contexts";
import { db, lb } from "../Static/theme";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="">
        Gofra
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();


export default function AdminLogin(){
    let {isAdmin,setIsAdmin,isAuth,setAuth,setUserPhone, setUserName,userID,setUserID, setPendingItems, setUserEmail, setUserPassword} = useContext(AuthContext)
  let Email = useRef(null);
  let Pass = useRef(null);

  let [users,setUsers] = useState([])

  useEffect(()=>{
    (async ()=>{
        let temp=await axios.get("http://localhost:3001/admins")
        setUsers(temp.data)
    })()

  },[])

  // for localStorage
  // useEffect(()=>{

  //   if(isAuth) {
  //   (async()=>{
  //     // let temp = await axios.get(`https://sedate-laced-chestnut.glitch.me/users/${userID}`)
  //     let temp = await axios.get(`http://localhost:3001/users/${userID}`)
  //     let data = temp.data
  //     console.log(data)
  //     setUserName(data.name)
  //     setWalletBalance(data.walletBalance)
  //     setCart(data.cart)
  //     setIsSeller(data.isSelling)
  //     setUserEmail(data.email)
  //     setUserPassword(data.password)
  //     setUserAddress(data.address)
  //   })()
  //   }
  // },[userID])
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      // console.log({
        let email = data.get('email')
       let pass = data.get('password')
      // });
      users.forEach(element => {
        // console.log(element.address)
        if(element.isAdmin && email == element.email && pass == element.password){
            localStorage.setItem("isAuth",true)
            localStorage.setItem("userID",JSON.stringify(element._id));
            localStorage.setItem("isAdmin",true)
            console.log(element.isAdmin)
            // setIsAdmin(element.isAdmin)
            console.log(element.email)
            setIsAdmin(true)
            setAuth(true)
            setUserID(element._id)
            setUserName(element.name);
            setUserEmail(element.email)
            
        }
    });
    };
  if(isAuth) return <Navigate to="/" />

return <ThemeProvider theme={theme}>
<Container component="main" maxWidth="xs">
  <CssBaseline />
  <Box
    sx={{
      marginTop: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
      <LockOutlined />
    </Avatar>
    <Typography component="h1" variant="h5">
      Admins
    </Typography>
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2, bgcolor:lb, "&:hover": {
              bgcolor: db,
            } }}
      >
        Sign In
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <NavLink to="/signup">
            {"Don't have an account? Sign Up"}
          </NavLink>
        </Grid>
        <Grid item>
          <NavLink to="/adminLogin">
            {"Admin Login"}
          </NavLink>
        </Grid>
      </Grid>
    </Box>
  </Box>
  <Copyright sx={{ mt: 8, mb: 4 }} />
</Container>
</ThemeProvider>

}
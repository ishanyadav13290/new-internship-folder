import { ThemeProvider } from "@emotion/react";
import { LockOutlined } from "@mui/icons-material";
import { Avatar, Button, Checkbox, Container, createTheme, CssBaseline, Divider, FormControlLabel, Grid, Input, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { Link, Navigate, NavLink } from "react-router-dom";
import { AuthContext } from "../Context/Contexts";
import { db, lb } from "../Static Data/theme";

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


export default function Login(){
    let {isAuth,setAuth,setCart, setUserName,setUserID,setUserAddress, setWalletBalance, setIsSeller, setUserEmail, setUserPassword} = useContext(AuthContext)
  let Email = useRef(null);
  let Pass = useRef("");

  let [users,setUsers] = useState([])

  useEffect(()=>{
    (async ()=>{
        let temp=await axios.get("https://sedate-laced-chestnut.glitch.me/users")
        setUsers(temp.data)
    })()
  },[])
    // function Login(){
    //    let email= Email.current.childNodes[0].value;
    //    let pass = Pass.current.childNodes[0].value;
    //     users.forEach(element => {
    //         if(email == element.email && pass == element.password){
    //             setAuth(true)
    //             setUserName(element.name)
    //             setWalletBalance(element.walletBalance)
    //             setCart(element.cart)
    //             setIsSeller(element.isSelling)
    //             setUserEmail(element.email)
    //             setUserPassword(element.password)
    //             setUserID(Number(element.id))
    //         }
    //     });
    // }
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      // console.log({
        let email = data.get('email')
       let pass = data.get('password')
      // });
      users.forEach(element => {
        // console.log(element.address)
        if(email == element.email && pass == element.password){
            setAuth(true)
            setUserName(element.name)
            setWalletBalance(element.walletBalance)
            setCart(element.cart)
            setIsSeller(element.isSelling)
            setUserEmail(element.email)
            setUserPassword(element.password)
            setUserID(Number(element.id))
            setUserAddress(element.address)
            console.log(element)
        }
    });
    };
  if(isAuth) return <Navigate to="/" />
  //   <Box m={"2% 0"} height={"100vh"}>
  //     <Box
  //       boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
  //       width={["80%","80%","30%"]}
  //       m={"auto"}
  //       p={"15px"}
  //       borderRadius={"10px"}
  //     >
  //     <Typography variant="h5" fontWeight={700}>Login to Your Account</Typography>
  //     <br />
  //     <Divider />
  //     <br />
       
  //       <Box
  //         display={"flex"}
  //         alignItems={"center"}
  //         justifyContent={"space-between"}
  //       >
  //         <label>Email: </label>
  //         <Box width={"70%"}>
  //           <Input type="email" ref={Email} sx={{ width: "100%" }} placeholder="Email ID" />
  //         </Box>
  //       </Box>
  //       <Box
  //         display={"flex"}
  //         alignItems={"center"}
  //         justifyContent={"space-between"}
  //       >
  //         <label>Password: </label>
  //         <Box width={"70%"}>
  //           <Input type="password" ref={Pass} sx={{ width: "100%" }} placeholder="Password" />
  //         </Box>
  //       </Box>
       
  //       <br />
  //       <Button variant="contained" sx={{bgcolor:lb}} onClick={Login}>
  //         Login
  //       </Button>
  //       <br />
  //       <br />
  //       <Box display={"flex"} justifyContent={"space-between"} textAlign="left">
  //       <NavLink>Forgot Password?</NavLink>
  //       <NavLink to="/signup" >Don't have an account? Sign Up!</NavLink>
  //       </Box>
  //       <br />
  //       <Divider />
  //       <br />
  //       <Box display={"flex"} justifyContent={"space-between"} sx={{objectFit:"cover"}}>
  //         <img src="https://www.mirraw.com/assets/facebook_sign_in-e998b55d7d821ba819897132537e42149cee923ea215a5eaf0e2a6335efe6c67.png" alt="login with google" style={{maxWidth:"40%"}} />
  //         <img src="https://www.mirraw.com/assets/google_sing_in-3426a2d2b760db2be7127653d216d7578e499c5e7df25fea1f861a56108d7d5b.png" alt="login with google" style={{maxWidth:"40%"}} />
  //       </Box>
  //     </Box>
  //   </Box>
  // );
  // return (
  //   <ThemeProvider theme={theme}>
  //     <Grid container component="main" sx={{ height: '100vh' }}>
  //       <CssBaseline />
  //       <Grid
  //         item
  //         xs={false}
  //         sm={4}
  //         md={7}
  //         sx={{
  //           backgroundImage: 'url(https://source.unsplash.com/random)',
  //           backgroundRepeat: 'no-repeat',
  //           backgroundColor: (t) =>
  //             t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
  //           backgroundSize: 'cover',
  //           backgroundPosition: 'center',
  //         }}
  //       />
  //       <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
  //         <Box
  //           sx={{
  //             my: 8,
  //             mx: 4,
  //             display: 'flex',
  //             flexDirection: 'column',
  //             alignItems: 'center',
  //           }}
  //         >
  //           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
  //             <LockOutlined />
  //           </Avatar>
  //           <Typography component="h1" variant="h5">
  //             Sign in
  //           </Typography>
  //           <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
  //             <TextField
  //               margin="normal"
  //               required
  //               fullWidth
  //               id="email"
  //               label="Email Address"
  //               name="email"
  //               autoComplete="email"
  //               autoFocus
  //             />
  //             <TextField
  //               margin="normal"
  //               required
  //               fullWidth
  //               name="password"
  //               label="Password"
  //               type="password"
  //               id="password"
  //               autoComplete="current-password"
  //             />
  //             <FormControlLabel
  //               control={<Checkbox value="remember" color="primary" />}
  //               label="Remember me"
  //             />
  //             <Button
  //               type="submit"
  //               fullWidth
  //               variant="contained"
  //               sx={{ mt: 3, mb: 2 }}
  //             >
  //               Sign In
  //             </Button>
  //             <Grid container>
  //               <Grid item xs>
  //                 <Link href="#" variant="body2">
  //                   Forgot password?
  //                 </Link>
  //               </Grid>
  //               <Grid item>
  //                 <Link href="#" variant="body2">
  //                   {"Don't have an account? Sign Up"}
  //                 </Link>
  //               </Grid>
  //             </Grid>
  //             <Copyright sx={{ mt: 5 }} />
  //           </Box>
  //         </Box>
  //       </Grid>
  //     </Grid>
  //   </ThemeProvider>
  // );
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
      Sign in
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
        sx={{ mt: 3, mb: 2 }}
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
          <Link href="#" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </Box>
  </Box>
  <Copyright sx={{ mt: 8, mb: 4 }} />
</Container>
</ThemeProvider>

}
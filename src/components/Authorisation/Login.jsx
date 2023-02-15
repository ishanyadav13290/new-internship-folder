import { Button, Divider, Input, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { Navigate, NavLink } from "react-router-dom";
import { AuthContext } from "../Context/Contexts";

export default function Login(){
    let {isAuth,setAuth,setCart, setUserName,setUserID, setWalletBalance, setIsSeller, setUserEmail, setUserPassword} = useContext(AuthContext)
  let Email = useRef(null);
  let Pass = useRef("");

  let [users,setUsers] = useState([])

  useEffect(()=>{
    (async ()=>{
        let temp=await axios.get("https://sedate-laced-chestnut.glitch.me/users")
        setUsers(temp.data)
    })()
  },[])
    function Login(){
       let email= Email.current.childNodes[0].value;
       let pass = Pass.current.childNodes[0].value;
        users.forEach(element => {
            if(email == element.email && pass == element.password){
                setAuth(true)
                setUserName(element.name)
                setWalletBalance(element.walletBalance)
                setCart(element.cart)
                setIsSeller(element.isSelling)
                setUserEmail(element.email)
                setUserPassword(element.password)
                setUserID(Number(element.id))
            }
        });
    }
  if(isAuth) return <Navigate to="/" />
  return (
    <Box m={"2% 0"} height={"100vh"}>
      <Box
        boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
        width={["80%","80%","30%"]}
        m={"auto"}
        p={"15px"}
        borderRadius={"10px"}
      >
      <Typography variant="h5" fontWeight={700}>Login to Your Account</Typography>
      <br />
      <Divider />
      <br />
       
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <label>Email: </label>
          <Box width={"70%"}>
            <Input type="email" ref={Email} sx={{ width: "100%" }} placeholder="Email ID" />
          </Box>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <label>Password: </label>
          <Box width={"70%"}>
            <Input type="password" ref={Pass} sx={{ width: "100%" }} placeholder="Password" />
          </Box>
        </Box>
       
        <br />
        <Button variant="contained" onClick={Login}>
          Login
        </Button>
        <br />
        <br />
        <Box display={"flex"} justifyContent={"space-between"} textAlign="left">
        <NavLink>Forgot Password?</NavLink>
        <NavLink to="/signup" >Don't have an account? Sign Up!</NavLink>
        </Box>
        <br />
        <Divider />
        <br />
        <Box display={"flex"} justifyContent={"space-between"} sx={{objectFit:"cover"}}>
          <img src="https://www.mirraw.com/assets/facebook_sign_in-e998b55d7d821ba819897132537e42149cee923ea215a5eaf0e2a6335efe6c67.png" alt="login with google" style={{maxWidth:"40%"}} />
          <img src="https://www.mirraw.com/assets/google_sing_in-3426a2d2b760db2be7127653d216d7578e499c5e7df25fea1f861a56108d7d5b.png" alt="login with google" style={{maxWidth:"40%"}} />
        </Box>
      </Box>
    </Box>
  );
}
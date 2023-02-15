import { Button, Divider, Input, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useContext, useRef } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/Contexts";

export default function SignUp() {
  let {isAuth,setAuth, cart, setUserName, walletBalance, setIsSeller, sellerItems} = useContext(AuthContext)
  let Name = useRef(null);
  let Address1 = useRef(null);
  let Address2 = useRef(null);
  let Email = useRef(null);
  let Pan = useRef(null);
  let Gst = useRef(null);
  let Pass = useRef("");
  let ConPass = useRef("");
  let isSelling = useRef(false);

  async function SignUp() {
    let name = Name.current.childNodes[0].value;
    let address1 = Address1.current.childNodes[0].value;
    let address2 = Address2.current.childNodes[0].value;
    let email = Email.current.childNodes[0].value;
    let pan = Pan.current.childNodes[0].value;
    let gst = Gst.current.childNodes[0].value;
    let password=Pass.current.childNodes[0].value;
    let confPass = ConPass.current.childNodes[0].value;
    let sells = isSelling.current.childNodes[0].checked;

    

    let letterNumber = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/;
    let specialChar = /[!@#$%^&*(),.?":{}|<>]/;

    if((confPass.length<=6 || password<=6)) return alert("Password Cannot be less than 6 Characters!")
    if(!password.match(letterNumber)) return alert("Password must contain atleast one Number, Upper Case and Lower Case Character")
    if(!password.match(specialChar)) return alert ("Provide atleast one Special Case Character")
    if(confPass!= password) return alert("Password Mismatched")

    let obj = {
      name,
      address1,
      address2,
      email,
      password,
      pan,
      gst,
      cart,
      walletBalance,
      "isSelling":sells,
      "sellerItems":sells?[]:null
    };
    setUserName(name)
    sells===true?setIsSeller(true):setIsSeller(false)

    await axios.post("https://sedate-laced-chestnut.glitch.me/users",obj)
    Name.current.childNodes[0].value = "";
    Address1.current.childNodes[0].value = "";
    Address2.current.childNodes[0].value = "";
    Email.current.childNodes[0].value = "";
    Pan.current.childNodes[0].value = "";
    Gst.current.childNodes[0].value = "";
    setAuth(true)
  }
  if(isAuth) return <Navigate to="/" />
  return (
    <Box m={"2% 0"} height={"100vh"}>
      <Box
        boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
        width={["80%","40%"]}
        m={"auto"}
        p={"15px"}
        borderRadius={"10px"}
      >
      <Typography fontWeight={700} variant={"h5"}>Create a New Account</Typography>
      <Divider />
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <label>Full Name: </label>
          <Box width={"70%"}>
            <Input
              ref={Name}
              sx={{ width: "100%" }}
              placeholder="Write Your Name"
            />
          </Box>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box>
            <label width={"50%"}>Address 1: </label>
          </Box>
          <Box width={"70%"}>
            <Input
              ref={Address1}
              sx={{ width: "100%" }}
              placeholder="Address Line 1"
            />
          </Box>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box>
            <label width={"50%"}>Address 2: </label>
          </Box>
          <Box width={"70%"}>
            <Input
              ref={Address2}
              sx={{ width: "100%" }}
              placeholder="Address Line 2"
            />
          </Box>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <label>Email: </label>
          <Box width={"70%"}>
            <Input ref={Email} sx={{ width: "100%" }} placeholder="Email ID" />
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
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <label>Confirm Password: </label>
          <Box width={"70%"}>
            <Input type="password" ref={ConPass} sx={{ width: "100%" }} placeholder="Confirm Your Password" />
          </Box>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <label>PAN: </label>
          <Box width={"70%"}>
            <Input ref={Pan} sx={{ width: "100%" }} placeholder="PAN" />
          </Box>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <label>GST: </label>
          <Box width={"70%"}>
            <Input ref={Gst} sx={{ width: "100%" }} placeholder="GST" />
          </Box>
        </Box>
        <br />
        <Box
          display={"flex"}
          alignItems={"center"}
          // justifyContent={"space-between"}
        >
          <Box width={"7%"}>
            <Input ref={isSelling} type={"checkbox"} sx={{ width: "100%" }} placeholder="GST" />
          </Box>
          <label>Want to Sell? </label>
        </Box>
        <Button variant="contained" onClick={SignUp}>
          SignUp
        </Button>
      </Box>
    </Box>
  );
}

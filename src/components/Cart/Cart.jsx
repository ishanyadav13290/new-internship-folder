import { CheckOutlined } from "@mui/icons-material";
import {
  Button,
  Input,
  Slider,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/Contexts";
import toIndianNumberingSystem from "../Features/RupeeConversion";
import Cards from "./Cards";

export default function Cart() {
  let { isAuth, cart, walletBalance } = useContext(AuthContext);
  let [subTotal,setSubTotal] = useState(0)
  let [total,setTotal] = useState(0)
  let [walletDiscount, setWalletDiscount] = useState(0);
  let [useDiscount, setUseDiscount] = useState(true)

  useEffect(()=>{
    cart.map((el,i)=>{
      let Totaltemp = 0;
    for (const items of cart) {
      let Temp = items.qty * items.price;
      Totaltemp += Temp;
    }
    setSubTotal(Totaltemp)
    setTotal(Totaltemp+40-walletDiscount);
   })
  },[cart,total, walletDiscount, useDiscount])
  return !isAuth ? (
    <Navigate to="/login" />
  ) : (
    <Box minHeight={"100vh"} p={["20px"]}>
      <Typography variant="h4" fontWeight={"700"}>Shopping Cart ({cart.length} Items) </Typography>
      <Box display={["block", "block", "flex"]} justifyContent={"space-around"}>
        <Box height={"auto"} width={["90%"]}>
          {cart.map((el, i) => {
            return (
              <Cards key={i} data={el} index={i} />
            );
          })}
        </Box>
        <Box
        bgcolor={"rgb(245, 245, 245)"}
          height={"300px"}
          width={["100%", "100%", "40%"]}
          mr={["0","0","5%"]}
          boxShadow={"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"}
          sx={{
                  "&:hover": {
                    boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
,
                    borderRadius:"25px",
                  transition:" 0.2s ease-in"
                  },
                }}
        >
          <br />
          <Typography variant="h5" fontWeight={700}>
            Proceed to Checkout
          </Typography>
          <Box
            textAlign={"left"}
            display={"flex"}
            justifyContent={"space-around"}
            p={"10px 0"}
          >
            <Box>
              <Typography variant="h6" fontSize={"16px"}>
                Subtotal:
              </Typography>
              <Typography variant="h6" fontSize={"16px"}>
                Shipping + Tax:
              </Typography>
              <Typography variant="h6" fontWeight={700}>
                Total:{" "}
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" fontSize={"16px"}>
                {toIndianNumberingSystem(subTotal)}
              </Typography>
              <Typography variant="h6" fontSize={"16px"}>
                +{toIndianNumberingSystem(40)}
              </Typography>
              <Typography variant="h6" fontWeight={700}>
                {toIndianNumberingSystem(total)}
              </Typography>
            </Box>
          </Box>
          <br />
          <Box width={"80%"} m={"auto"} >
          <Box display={"flex"}>
          <Input type="checkbox" onChange={()=>{setUseDiscount(false)}} />
          <Typography fontWeight={700}> Pay using Wallet Balance</Typography>
          </Box>
          <Slider valueLabelDisplay="auto" defaultValue={0} step={100} marks min={0} max={walletBalance} disabled={useDiscount} onChange={(e)=>{
            setWalletDiscount((prev)=>prev=e.target.value)
          }} />
          </Box>
          <br />
          <Button sx={{ backgroundColor: "rgb(246, 126, 34)" }} variant="contained">
            <CheckOutlined />
            Checkout
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

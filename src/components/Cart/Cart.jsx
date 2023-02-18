import { CheckOutlined } from "@mui/icons-material";
import {
  Button,
  Divider,
  Input,
  Slider,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import { Navigate, NavLink } from "react-router-dom";
import { AuthContext } from "../Context/Contexts";
import toIndianNumberingSystem from "../Features/RupeeConversion";
import Cards from "./Cards";
import EmptyCart from "../../components/Static Data/Imgs/emptycart.png"
import { lb } from "../Static Data/theme";

export default function Cart() {
  let { isAuth, cart, walletBalance, setWalletBalance,total, setTotal } = useContext(AuthContext);
  let [subTotal,setSubTotal] = useState(0)
  // let [total,setTotal] = useState(0)
  let [walletDiscount, setWalletDiscount] = useState(0);
  let [useDiscount, setUseDiscount] = useState(false)
  let [shippingTax, setShippingTax] = useState(40)

  useEffect(()=>{
    console.log(useDiscount)
    cart.map((el,i)=>{
      let Totaltemp = 0;
    for (const items of cart) {
      let Temp = items.qty * items.price;
      Totaltemp += Temp;
    }
    setSubTotal(Totaltemp)
    subTotal<=10000?setShippingTax(100):subTotal>10000 && subTotal<=100000?setShippingTax(250):setShippingTax(500)
    setTotal(Totaltemp+shippingTax-walletDiscount);
   })
  },[cart,total, walletDiscount, useDiscount])
  return !isAuth ? (
    <Navigate to="/login" />
  ) : cart.length === 0 ? (
    <Box minHeight={"100vh"} p={["20px"]} mt={["10%","20%","10%"]}>
      <Typography fontWeight={700} variant="h3">Looks like you haven't added anything to your cart :(</Typography>
      <br />
      <Box maxWidth={"300px"} m={"auto"}>
      <img src={EmptyCart} alt="Shopping Cart Sign Comments - Free Icon Empty Cart@clipartmax.com" style={{width:"100%"}}  />
      </Box>
      <br />
      <br />
      <br />
      <NavLink to="/" style={{textDecoration:"none"}} >
      <Button variant="contained" sx={{bgcolor:"rgb(246, 126, 34)"}}>Let's Add something</Button>
      </NavLink>
    </Box>
  ):(<Box minHeight={"100vh"} p={["20px"]}>
  <Typography variant="h4" fontWeight={"700"}>Shopping Cart ({cart.length} Items) </Typography>
  <Box display={["block", "block", "flex"]} justifyContent={"space-around"}>
    <Box maxHeight={"800px"} sx={{overflowY:"scroll",overflowX:"hidden"}} width={["90%"]} m={"auto"}>
      {cart.map((el, i) => {
        return (
          <Cards key={i} data={el} index={i} />
        );
      })}
    </Box>
    <Box
    bgcolor={"rgb(245, 245, 245)"}
      height={"fit-content"}
      width={["100%", "100%", "40%"]}
      pb={"10px"}
      mr={["0","0","3%"]}
      ml={["0","0","2%"]}
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
            +{toIndianNumberingSystem(shippingTax)}
          </Typography>
          <Typography variant="h6" fontWeight={700}>
            {toIndianNumberingSystem(total)}
          </Typography>
        </Box>
      </Box>
      <br />
      <Box width={"80%"} m={"auto"} >
      <Box display={"flex"}>
      <Input type="checkbox" onChange={()=>{setUseDiscount(!useDiscount)}} />
      <Typography fontWeight={700}> Pay using Wallet Balance</Typography>
      </Box>
      <Slider valueLabelDisplay="auto" defaultValue={0} step={100} marks min={0} max={walletBalance} disabled={!useDiscount} onChange={(e)=>{
        setWalletDiscount((prev)=>prev=e.target.value)
      }} />
      <Typography variant="body2">Remaining Wallet Balance: <b>{walletBalance-walletDiscount}</b></Typography>
      {/* <br /> */}
      <Divider />
      <Typography variant="body2" fontSize={"12px"} ><b>Alert:</b> Clicking Checkout will deduct your wallet balance. You'll have to pay the remaining amount using other mode.</Typography>
      </Box>
      <br />
      <Button sx={{ backgroundColor: lb }} variant="contained" onClick={()=>{
        setWalletBalance(walletBalance-walletDiscount)
      }}>
        <NavLink to="/checkout" style={{color:"white",textDecoration:"none", display:"flex",alignItems:"center"}} >
        <CheckOutlined />
        Checkout
        </NavLink>
      </Button>
    </Box>
  </Box>
</Box>)
}

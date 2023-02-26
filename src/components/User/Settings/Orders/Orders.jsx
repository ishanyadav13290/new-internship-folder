import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { AuthContext } from "../../../Context/Contexts";
import { lb } from "../../../Static/theme";
import OrderCards from "./orderCards";

export default function Orders(){
    let {userOrders} = useContext(AuthContext)
    return <Box minHeight={"100vh"} minWidth={"60vw"}>
        <Box><Typography variant="h4" color={lb} fontWeight={700}> Your Orders</Typography></Box>
        <br />
        {userOrders.map((el,i)=>{
            return <OrderCards key={i} name={el.name} date={"26 Feb"} price={el.price} img={el.Img} />
        })}
    </Box>
}
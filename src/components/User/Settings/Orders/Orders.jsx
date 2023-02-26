import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { lb } from "../../../Static/theme";
import OrderCards from "./orderCards";

let arr = new Array(30).fill("items")
export default function Orders(){
    return <Box minHeight={"100vh"} minWidth={"70vw"}>
        <Box><Typography variant="h4" color={lb} fontWeight={700}> Your Orders</Typography></Box>
        <br />
        {arr.map((el,i)=>{
            return <OrderCards name={"name"} date={"26 Feb"} price={"2414"} img={"https://rukminim1.flixcart.com/image/l19m93k0/mobile/q/f/w/-original-imagcv2dgezfbfet.jpeg"} />
        })}
    </Box>
}
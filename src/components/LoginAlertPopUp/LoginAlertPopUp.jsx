import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";



export default function LoginAlertPopUp({isAuth}){
    return (
        <NavLink to={"/supplyChain"}>
            <Box position={"fixed"} bottom={"5%"} right={"5%"} color={"white"} display={isAuth?"none":"flex"} borderRadius={"30px"}  justifyContent={"center"} padding={"10px 20px"} zIndex={999} bgcolor={"rgba(91, 0, 183, 0.8)"} alignItems={"center"}>
            <Typography fontSize={"25px"} fontWeight={"900"}>Avail Credit</Typography>
        </Box>
        </NavLink>
    )
}
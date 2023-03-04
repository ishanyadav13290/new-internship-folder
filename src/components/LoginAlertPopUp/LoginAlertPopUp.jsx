import { Typography } from "@mui/material";
import { Box } from "@mui/system";



export default function LoginAlertPopUp({isAuth}){
    return (
        <Box position={"fixed"} bottom={"5%"} right={"5%"} color={"white"} display={isAuth?"none":"flex"} borderRadius={"30px"} width={"300px"} height={"150px"} justifyContent={"center"} padding={"20px"} zIndex={999} bgcolor={"rgba(91, 0, 183, 0.8)"} alignItems={"center"}>
            <Typography fontSize={"30px"} fontWeight={"900"}>Login To Avail Credits</Typography>
        </Box>
    )
}
import { Box } from "@mui/material"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/Contexts";

export default function Footer(){
  let {isSeller} = useContext(AuthContext)
    let style={
        backgroundColor:"black",
        position:"relative",
        bottom:0,
        width:"100%",
        color:"white",
        fontWeight:700,
        fontSize:"20px",
        padding:"10px 0"
    }
    return <Box sx={style}>
        Footer
        <a href="#">
          <Box
            position="fixed"
            bottom={5}
            right={10}
            bgcolor="white"
            zIndex={1}
            p="10px 15px"
            borderRadius="50%"
            border="2px solid black"
            fontWeight={700}
            fontSize="xl"
          >
            <ArrowUpwardIcon />
          </Box>
        </a>
        {isSeller?<NavLink to="/admin" >
        <Box  position="fixed"
            bottom={20}
            left={10}
            bgcolor={"rgb(195, 232, 141)"}
            color={"black"}
            zIndex={1}
            p="10px 15px"
            borderRadius="50px"
            border="2px solid black"
            fontWeight={700}
            fontSize="xl">
            Admin
        </Box>
        </NavLink>:null}
    </Box>
}
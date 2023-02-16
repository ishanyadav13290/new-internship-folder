import { Box } from "@mui/material"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/Contexts";
import { Sell } from "@mui/icons-material";
import { lb } from "../Static Data/theme";

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
            p="5px 10px"
            borderRadius="50%"
            border="1px solid rgb(72, 98, 208)"
            fontWeight={700}
          >
            <ArrowUpwardIcon  style={{color:lb}} />
          </Box>
        </a>
        {isSeller?<NavLink to="/admin" >
        <Box  position="fixed"
            bottom={20}
            left={10}
            bgcolor={"white"}
            color={"black"}
            zIndex={1}
            p="10px 15px"
            borderRadius="50%"
            border="2px solid rgb(246, 126, 34)"
            fontWeight={700}
            fontSize="xl">
            <Sell style={{color:"rgb(246, 126, 34)"}} />
        </Box>
        </NavLink>:null}
    </Box>
}
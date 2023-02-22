import { Box, Divider, Grid, Typography } from "@mui/material"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/Contexts";
import { Call, Email, Facebook, Instagram, LinkedIn, Sell, Twitter } from "@mui/icons-material";
import { lb } from "../Static/theme";

export default function Footer(){
  let {isSeller} = useContext(AuthContext)
    let style={
        backgroundColor:lb,
        width:"100%",
        color:"white",
        fontWeight:700,
        fontSize:"20px",
    }
    return <>
    <Box sx={style} height={"auto"} padding={"50px 0"}>
    <Box width={"90%"} m={"auto"} sx={{display:"grid", gridTemplateColumns:["repeat(1,1fr)","repeat(2,1fr)","repeat(3,1r)","repeat(4,1fr)"], gap:"20px"}}>
    <Box borderRight={"1px solid white"} p={"0 10px"}>
      <Typography variant="h6" fontWeight={700}>COMPANY</Typography>
      <Divider sx={{bgcolor:"white"}} />
      <br />
      <NavLink to="about" style={{textDecoration:"none", color:"white", display:"block",fontSize:"16px"}}>About Us</NavLink>
      <NavLink to="contact" style={{textDecoration:"none", color:"white", display:"block",fontSize:"16px"}}>Contact</NavLink>
      <NavLink to="career" style={{textDecoration:"none", color:"white", display:"block",fontSize:"16px"}}>Career</NavLink>
      <NavLink to="team" style={{textDecoration:"none", color:"white", display:"block",fontSize:"16px"}}>Team</NavLink>
    </Box>
    <Box borderRight={"1px solid white"} p={"0 10px"}>
      <Typography variant="h6" fontWeight={700}>RESOURCES</Typography>
      <Divider sx={{bgcolor:"white"}} />
      <br />
      <NavLink to="ceoSpeaks" style={{textDecoration:"none", color:"white", display:"block",fontSize:"16px"}}>CEO Speaks</NavLink>
      <br />
      <Typography variant="h6" fontWeight={700}>POLICIES</Typography>
      <Divider sx={{bgcolor:"white"}} />
      <br />
      <NavLink to="return&Refunds" style={{textDecoration:"none", color:"white", display:"block",fontSize:"16px"}}>Return & Refunds</NavLink>
      <NavLink to="privacy" style={{textDecoration:"none", color:"white", display:"block",fontSize:"16px"}}>Privacy</NavLink>
    </Box>
    <Box borderRight={"1px solid white"} p={"0 10px"}>
      <Typography variant="h6" fontWeight={700}>GET IN TOUCH</Typography>
      <Divider sx={{bgcolor:"white"}} />
      <br />
      <Typography variant="body1" style={{display:"flex",alignItems:"center", justifyContent:"center"}}><Call/>+91 1234 567 890</Typography>
      <NavLink to="mailto:support@gofra.com" style={{textDecoration:"none", color:"white", fontSize:"16px",display:"flex",alignItems:"center", justifyContent:"center"}}><Email />support@gofra.com</NavLink>
    </Box>
    <Box borderRight={"1px solid white"} p={"0 10px"}>
      <Typography variant="h6" fontWeight={700}>FOLLOW US</Typography>
      <Divider sx={{bgcolor:"white"}} />
      <br />
      <LinkedIn />
      <Instagram />
      <Facebook />
      <Twitter />
    </Box>
    
    </Box>
    <br />
    <br />
    <br />
    <Typography variant="h6">© 2023-Present Gofra Pvt. Ltd. All rights reserved</Typography>
    </Box>
    <a href="#">
          <Box
            position="fixed"
            bottom={5}
            right={10}
            bgcolor="white"
            alignItems={"center"}
            justifyContent={"center"}
            zIndex={1}
            sx={{"&:hover": {
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
                }}}
            p="5px 10px"
            borderRadius="50%"
            border="2px solid rgb(72, 98, 208)"
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
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            zIndex={1}
            p="10px"
            sx={{"&:hover": {
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
                }}}
            borderRadius="50%"
            border="2px solid rgb(72, 98, 208)"
            fontWeight={700}
            fontSize="xl">
            <Sell sx={{color:lb}} />
        </Box>
        </NavLink>:null}  
    </>
}
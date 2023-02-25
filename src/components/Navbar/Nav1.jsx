import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import { styles } from "./Navbar";
import SearchField from "./SearchField";
import { useContext } from "react";
import { AuthContext } from "../Context/Contexts";
import BasicMenu from "./Hover_Menu/Menu";
import { LordAccount, LordCart } from "../Features/LordIcons";

let styles2 = {
  display: "block",
  textDecoration: "none",
  color: "white",
  fontSize:"15px",
  padding:"0 5px"
};

export default function Nav1() {
  let {isAuth} = useContext(AuthContext)
  return (
    <Box
      sx={styles}
      width={"100%"}
      display={["none", "none", "flex"]}
      m={"0 1%"}
      id="Nav"
    >
      <Box display={["none", "none", "flex"]} width={"60%"}>
        <SearchField />
      </Box>

      <Box
        width={"auto"}
        display={"flex"}
        mr={["-40%","-10%"]}
        // justifyContent={""}
        alignItems={"center"}
      >
        <Box m={"0 10px"} height="100%">
          <NavLink style={styles2} to={"/cart"}>
          <LordCart />
            {/* <ShoppingCartIcon fontSize="small" sx={{color:"white",pb:"1px"}} /> */}
          </NavLink>
          <Box display={["none", "none", "flex", "flex"]} fontSize={"15px"}>
            <NavLink style={styles2} to={"/cart"}>
              Cart
            </NavLink>
          </Box>
        </Box>
        <Box >
          {!isAuth?<NavLink style={styles2} to={"/login"}> 
          {/* <PersonIcon sx={{color:"white"}} /> */}
          <LordAccount />
           </NavLink>:null}
          <Box display={["block", "none", "block", "block"]} fontSize={"15px"}>
            
          {isAuth?<BasicMenu /> :
           <Box display={["none","flex"]}>
           <NavLink style={styles2} to={"/login"}>
              Login
            </NavLink>
            |
            <NavLink style={styles2} to={"/signup"}>
              Sign Up
            </NavLink>
            </Box>}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

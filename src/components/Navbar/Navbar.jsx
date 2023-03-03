import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import { lb } from "../Static/theme";
import Hamburger from "./Hamburger/Hamburger";
import Nav1 from "./Nav1";
import Nav2 from "./Nav2";
import SearchField from "./SearchField";
import Logo from "../Static/Imgs/GofraLogo2.png"

export let styles = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  padding: "1%",
  fontWeight: 700,
};
export let styles2 = { textDecoration: "none" };
export default function Navbar() {
  return (
    <Box display={"flex"} color={"white"} mb={["30%","10%"]} width="100%">
      <Box width={["100%","90vw"]} bgcolor={lb} position={"fixed"} top={0} right={["0","5vw"]}  zIndex={"2"}  borderRadius={"0 0 20px 20px"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}>
      <Box
        sx={styles}
        fontSize={["13px", "15px", "20px"]}
        zIndex={"10"}
        position={["static", "static", "static", "static"]}
      >
        <Box width={["100%","90%"]}>
        <Box display={"flex"} alignItems={"center"}  >
        <Hamburger  />
        <NavLink to={"/"} style={{color:"white",textDecoration:"none"}}>
          <Box  display={"flex"} height={"100%"}  alignItems={"center"}>
          <img src={Logo} style={{width:"60px"}} alt="logo" />
          </Box>
        </NavLink>
        <Nav1 />
        </Box>
        {/* <Divider /> */}
        {/* Nav 2 display changing according to screen size */}
        <Box>
        <Box display={["none","none","block","block"]}>
        <Nav2 />
        </Box>
        <Box display={["block","block","none","none"]}>
          <SearchField />
        </Box>
        </Box>

        </Box>
      </Box>
    </Box>
    </Box>
  );
}

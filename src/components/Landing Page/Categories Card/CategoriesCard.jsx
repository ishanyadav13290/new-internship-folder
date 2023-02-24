import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/Contexts";

export default function Cards({ name, image, fit, category }) {
  let {setFilterCategory} = useContext(AuthContext)
  return <NavLink to="/allitems" style={{all:"unset"}}>
  <Box onClick={()=>{
    setFilterCategory(category)
  }}>
    <img src={image}
          alt={"category"}
          height={"100px"}
          style={{ objectFit: {fit} }}
          width={"150px"} />
    <Typography>{name}</Typography>
  </Box>
  </NavLink>
  // return (
  //     <Box
  //     display={"flex"}
  //     // gridTemplateColumns={["repeat(6,1fr)"]}
  //     flexDirection={"column"}
  //     justifyContent={"space-between"}
  //     width={["140px", "180px"]}
  //     overflow="hidden"
  //     sx={{"&:hover": {
  //         boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",
  //         borderRadius: "5px",
  //         transition:"0.2s ease-in"
  //       }}}
  //   >
  //       <NavLink to="allitems" style={{all:"unset",height:"fit-content",display:"block"}}>

  //     <Box maxHeight={"100px"}>
  //       <img
          // src={image}
          // alt={""}
          // height={"100%"}
          // style={{ objectFit: {fit} }}
          // width={"100%"}
  //       />
  //     </Box>
  //     <Typography>{name}</Typography>
  //   </NavLink>
  //   </Box>
  // );
}

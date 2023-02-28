import { Box, Typography} from "@mui/material";
import s from "./intro.module.css";
import { NavLink } from "react-router-dom";

export default function Intro() {
  return (
    <Box
      className={s.main}
      mt={"-10%"}
      p={["35% 0", "35% 0", "10% 0", "10% 0"]}
    >
      {/* <img className={s.img} src={wavy} alt={"bridge"} /> */}
      <Box
        className={s.content}
        width={["90%", "90%", "70%", "70%"]}
        m={"auto"}
      >
        <Typography fontSize={["35px","55px","70px","70px"]} className={s.explore} fontWeight={700}>Explore</Typography>
        <div className={s.companyName}>
          <Typography className={s.gofra} fontSize={["50px","80px","100px","100px"]} fontWeight={"700"}>GOFRA</Typography>
          {/* <p className={s.gofra}>FRA</p> */}
        </div>
        <Box>
          <Box display={"flex"} justifyContent={"flex-end"}>
            <Typography component={"span"} className={s.normal} sx={{fontSize:["30px","40px","65px","65px"],fontWeight:700}}>A New</Typography>
            <Typography component={"span"} sx={{fontSize:["35px","45px","70px","70px"]}} className={s.funky} fontWeight={700}>Way</Typography>
          </Box>
          <Box display={"flex"} justifyContent={"flex-end"}>
          <Typography component={"span"} className={s.normal} sx={{fontSize:["30px","40px","65px","65px"],fontWeight:700}}>To</Typography>
            <Typography component={"span"} sx={{fontSize:["35px","45px","70px","70px"]}} className={s.funky} fontWeight={700}>Shop :)</Typography>
          </Box>
        </Box>
      </Box>
      <br />
      <Box className={s.button}
        m={"auto"}
        sx={{
          padding: "10px 0",
          fontSize: "30px",
          fontWeight: 700
        }}
      >
        <NavLink to="/newarrivals" style={{all:"unset", width:"100%", height:"100%", display:"flex", alignItems:"center", justifyContent:"center"}}>Shop Now</NavLink>
      </Box>
    </Box>
  );
}

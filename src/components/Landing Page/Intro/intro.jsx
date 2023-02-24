import { Box} from "@mui/material";
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
        <p className={s.explore}>Explore</p>
        <div className={s.companyName}>
          <p className={s.gofra}>GOFRA</p>
          {/* <p className={s.gofra}>FRA</p> */}
        </div>
        <Box>
          <Box display={"flex"} justifyContent={"flex-end"}>
            <span className={s.normal}>A New</span>
            <span className={s.funky}>Way</span>
          </Box>
          <Box display={"flex"} justifyContent={"flex-end"}>
            <span className={s.normal}>To</span>
            <span className={s.funky}>Shop ;)</span>
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
        <NavLink to="/newarrivals" style={{all:"unset"}}>Shop Now</NavLink>
      </Box>
    </Box>
  );
}

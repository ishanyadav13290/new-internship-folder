import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";

let arr = [
  "Reinforced Steel",
  "I Beam",
  "Angles",
  "DI Pipes",
  "Red Oxide Primar",
  "Plyboard",
  "Nails",
  "HDPE Pipes",
  "Wires and Cables",
];

export default function Nav2() {
  return (
    <Box display={"flex"} justifyContent={"space-between"}>
      <NavLink
        to="/newarrivals"
        style={{
          color: "rgb(246, 126, 34)",
          textDecoration: "none",
          fontWeight: 700,
        }}
      >
        <Typography sx={{ cursor: "pointer",
        "&:hover":{
            bgcolor:"rgb(230, 230, 230)"
        },
        padding:"3px",
        borderRadius:"3px"
         }} fontSize={"13px"} color={"red"}>
          New Arrivals
        </Typography>
      </NavLink>
      {arr.map((el, i) => {
        return (
          <Typography
            sx={{ cursor: "pointer",
        "&:hover":{
            bgcolor:"rgb(230, 230, 230)"
        },
        padding:"3px",
        borderRadius:"3px"
         }}
            key={i}
            fontSize={"13px"}
            color={"rgba(0,0,0,.362)"}
          >
            {el}
          </Typography>
        );
      })}
    </Box>
  );
}

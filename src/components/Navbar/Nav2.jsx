import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import { lb, db } from "../Static Data/theme";

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

let routes = [
  "reinforcedSteel",
  "iBeam",
  "Angles",
  "diPipes",
  "redOxidePrimar",
  "plyboard",
  "nails",
  "hdpePipes",
  "wires&Cables",
];

export default function Nav2() {
  return (
    <Box display={"flex"} justifyContent={"space-between"}>
      <NavLink
        to="/newarrivals"
        style={{
          textDecoration: "none",
          fontWeight: 700,
        }}
      >
        <Typography
          sx={{
            cursor: "pointer",
            "&:hover": {
              bgcolor: db,
            },
            color: "white",
            padding: "3px",
            borderRadius: "3px",
          }}
          fontSize={"13px"}
          color={"red"}
        >
          New Arrivals
        </Typography>
      </NavLink>
      {arr.map((el, i) => {
        return (
          <NavLink
          key={i}
            to={routes[i]}
            style={{
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            <Typography
              sx={{
                cursor: "pointer",
                "&:hover": {
                  bgcolor: db,
                },
                color:"white",
                padding: "3px",
                borderRadius: "3px",
              }}
              key={i}
              fontSize={"13px"}
              color={"rgba(0,0,0,.362)"}
            >
              {el}
            </Typography>
          </NavLink>
        );
      })}
    </Box>
  );
}

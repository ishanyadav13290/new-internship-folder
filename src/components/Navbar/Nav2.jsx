import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import { db } from "../Static Data/theme";

let arr = [
  "Home",
  "About Us",
  "Our Team",
  "Contact"
];

let routes = [
  "/",
  "about",
  "team",
  "contact"
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
            padding: "10px",
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
                padding: "10px",
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

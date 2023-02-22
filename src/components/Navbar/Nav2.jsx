import { Home, OnlinePrediction, Sell } from "@mui/icons-material";
import { Button, ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { db } from "../Static/theme";
import HoverMenu from "./Nav2Menu/HoverMenu";

let arr = [
  "About Us",
  "Our Team",
  "Contact"
];

let routes = [
  "about",
  "team",
  "contact"
];

export default function Nav2() {

  return (
    <Box display={"flex"} justifyContent={"space-between"}>
    <NavLink
        to="/"
        style={{
          textDecoration: "none",
          fontWeight: 700,
        }}
      >
        <Button sx={{
            cursor: "pointer",
            "&:hover": {
              bgcolor: db,
            },
            color: "white",
            // padding: "10px",
            borderRadius: "3px",
          }}
          fontSize={"13px"}>
          Home
        </Button>
          </NavLink>
      <NavLink
        to="/newarrivals"
        style={{
          textDecoration: "none",
          fontWeight: 700,
        }}
      >
        <Button sx={{
            cursor: "pointer",
            "&:hover": {
              bgcolor: db,
            },
            color: "white",
            // padding: "10px",
            borderRadius: "3px",
          }}
          fontSize={"13px"}>
        {/* <Typography */}
          
          New Arrivals
        {/* </Typography> */}
        </Button>
          </NavLink>

          <HoverMenu name={"Industry"}  menuItems={["Home & Personal Care","E-Commerce & Retail","Infrastructure"]} />
          
          <HoverMenu name={"Platform"} menuItems={["Supply Chain Solution","Digital Production Planning","Artwork Management"]} />
      
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
            <Button
              sx={{
                cursor: "pointer",
                "&:hover": {
                  bgcolor: db,
                },
                color:"white",
                // padding: "10px",
                borderRadius: "3px",
              }}
              key={i}
              fontSize={"13px"}
            >
              {el}
            </Button>
          </NavLink>
        );
      })}
    </Box>
  );
}

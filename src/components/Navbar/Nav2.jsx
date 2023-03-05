import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Context/Contexts";
import { db } from "../Static/theme";
import HoverMenu from "./Nav2Menu/HoverMenu";

let arr = ["About Us", "Contact"];

let routes = ["about", "contact"];

export default function Nav2() {
  let { setFilterCategory, setBrand } = useContext(AuthContext);
  return (
    <Box display={"flex"} justifyContent={"space-between"}>
      <NavLink
        to="/"
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
            color: "white",
            // padding: "10px",
            borderRadius: "3px",
          }}
          fontSize={"13px"}
        >
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
        <Button
          sx={{
            cursor: "pointer",
            "&:hover": {
              bgcolor: db,
            },
            color: "white",
            // padding: "10px",
            borderRadius: "3px",
          }}
          fontSize={"13px"}
          onClick={() => {
            setFilterCategory("all");
            setBrand("all");
          }}
        >
          New Arrivals
        </Button>
      </NavLink>

      <HoverMenu
        name={"Industry"}
        menuItems={[
          "Home & Personal Care",
          "E-Commerce & Retail",
          "Infrastructure",
        ]}
        routes={["home&care", "ecom&retail", "infrastructure"]}
      />

      <HoverMenu
        name={"Platform"}
        menuItems={[
          "Supply Chain Solution",
          "Digital Production Planning",
          "Artwork Management",
        ]}
        routes={["supplyChain", "digitalPlanning", "ArtworkManagement"]}
      />
      <HoverMenu
        name={"Join Us"}
        menuItems={[
         "Buyers",
         "Suppliers"
        ]}
        routes={["buyers", "suppliers"]}
      />

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
                color: "white",
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

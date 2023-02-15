import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Login,
  Logout,
  Share,
  ShoppingBag,
  ShoppingCart,
  Wallet,
} from "@mui/icons-material";
import { AuthContext } from "../../Context/Contexts";
import { NavLink } from "react-router-dom";

export default function Hamburger() {
  let { isAuth, setAuth, userName, setIsSeller, setUserID } =
    React.useContext(AuthContext);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  function LogOut() {
    setAuth(false);
    setIsSeller(false);
    setUserID("");
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List m={"0"} disablePadding>
        <Box
          textAlign={"center"}
          p={"5px"}
          color={"white"}
          bgcolor="rgb(246, 126, 34)"
        >{`Welcome ${userName}`}</Box>

        {isAuth ? (
          <>
            <NavLink
              to="/cart"
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <ShoppingCart sx={{ color: "rgb(246, 126, 34)" }} />
                  </ListItemIcon>
                  <ListItemText>Cart</ListItemText>
                </ListItemButton>
              </ListItem>
            </NavLink>
            <NavLink
              to="/previousOrders"
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <ShoppingBag sx={{ color: "rgb(246, 126, 34)" }} />
                  </ListItemIcon>
                  <ListItemText>Previous Orders</ListItemText>
                </ListItemButton>
              </ListItem>
            </NavLink>
            <NavLink
              to="/wallet"
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <Wallet sx={{ color: "rgb(246, 126, 34)" }} />
                  </ListItemIcon>
                  <ListItemText>Wallet</ListItemText>
                </ListItemButton>
              </ListItem>
            </NavLink>
            <ListItem disablePadding onClick={LogOut}>
              <ListItemButton>
                <ListItemIcon>
                  <Logout sx={{ color: "rgb(246, 126, 34)" }} />
                </ListItemIcon>
                <ListItemText>LogOut</ListItemText>
              </ListItemButton>
            </ListItem>
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <Login sx={{ color: "rgb(246, 126, 34)" }} />
                  </ListItemIcon>
                  <ListItemText>Log In</ListItemText>
                </ListItemButton>
              </ListItem>
            </NavLink>
            <NavLink
              to="/signup"
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <Login sx={{ color: "rgb(246, 126, 34)" }} />
                  </ListItemIcon>
                  <ListItemText>Signup</ListItemText>
                </ListItemButton>
              </ListItem>
            </NavLink>
          </>
        )}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Share sx={{ color: "rgb(246, 126, 34)" }} />
            </ListItemIcon>
            <ListItemText>Refer</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  return (
    <Box display={["block", "block", "none"]}>
      <React.Fragment>
        <Button onClick={toggleDrawer("left", true)}>
          <MenuIcon sx={{ color: "rgb(246, 126, 34)" }} />
        </Button>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </Box>
  );
}

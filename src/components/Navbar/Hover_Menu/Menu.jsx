
import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { AuthContext } from "../../Context/Contexts";
import { NavLink } from "react-router-dom";
import { LordAccount } from "../../Features/LordIcons";
import { CheckCircle, CreditCard, Sell } from "@mui/icons-material";

let exportedMenu;
export default function BasictMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  let { setIsAdmin, isAdmin,  setAuth, setIsSeller, userEmail, setUserOrders, setAllSellerItems, setUserPhone, setUserGender, userName, setUserName, setUserID, setUserEmail, setUserAddress, setCart, setWalletBalance } = React.useContext(AuthContext);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  exportedMenu = handleClick;
  const handleClose = () => {
    setAnchorEl(null);
  };
  function LogOut() {
    localStorage.setItem("isAuth", JSON.stringify(null))
    localStorage.setItem("userID", JSON.stringify(null))
    localStorage.setItem("isAdmin", false)
    setIsAdmin(false)
    setAuth(false);
    setIsSeller(false)
    setUserID("")
    setUserEmail("")
    setUserAddress("")
    setCart([])
    setWalletBalance(0)
    setUserName("")
    setAllSellerItems([])
    setUserGender("other")
    setUserPhone(1234567890)
    setUserOrders([])
    // localStorage.setItem(`userName`, JSON.stringify(""));
    // localStorage.setItem(`isAuth`, JSON.stringify(false));
    // localStorage.setItem(`userID`, JSON.stringify(""));
    // localStorage.setItem(`cart`, JSON.stringify([]));
    // localStorage.setItem(`isSeller`, JSON.stringify(false));
    // if (isSeller)
    //   localStorage.setItem(
    //     `allSellerItems`,
    //     JSON.stringify([])
    //   );
  }
  return (
    <React.Fragment>
      <Box sx={{ display: ["block"], alignItems: "center", textAlign: "center" }}>
        <LordAccount onClick={handleClick} />
        <Typography
          fontSize={"14px"}
          onClick={handleClick}
          display={["none", "block", "block"]}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          color={"white"}
          sx={{ cursor: "pointer", p: "0" }}
          fontWeight={700}
        >
          My Account
        </Typography>
      </Box>
      <Menu
        disableScrollLock={true}
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={() => console.log(userEmail)}>
          <Avatar /> {userEmail}
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to="/allSellers" style={{ all: "unset", display: "flex", width: "100%", alignItems: "center" }}>
            <ListItemIcon>
              <Sell fontSize="small" />
            </ListItemIcon>
            View Sellers
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to="/admins" style={{ all: "unset", display: "flex", width: "100%", alignItems: "center" }}>
            <ListItemIcon>
              <CheckCircle fontSize="small" />
            </ListItemIcon>
            Verify Items
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to="/creditApprove" style={{ all: "unset", display: "flex", width: "100%", alignItems: "center" }}>
            <ListItemIcon>
              <CreditCard fontSize="small" />
            </ListItemIcon>
            Approve Credit
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to="/account" style={{ all: "unset", display: "flex", width: "100%", alignItems: "center" }}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Account Settings
          </NavLink>
        </MenuItem>
        <MenuItem onClick={LogOut}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
export { exportedMenu };
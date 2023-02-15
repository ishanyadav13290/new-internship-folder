
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
import { Person, Wallet } from "@mui/icons-material";
import { Link } from "react-router-dom";

let exportedMenu;

export default function BasictMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  let { setAuth,setIsSeller, setUserID } = React.useContext(AuthContext);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  exportedMenu = handleClick;
  const handleClose = () => {
    setAnchorEl(null);
  };
  function LogOut() {
    setAuth(false);
    handleClose();
    setIsSeller(false)
    setUserID("")
  }
  return (
    <React.Fragment>
      <Box sx={{ display: ["block"], alignItems: "center", textAlign: "center" }}>
      <Person onClick={handleClick} sx={{color:"rgb(246, 126, 34)"}} />
        <Typography
          fontSize={"14px"}
          onClick={handleClick}
          display={["none","block","block"]}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          color={"black"}
          sx={{ cursor: "pointer" }}
          fontWeight={700}
          
        >
        
          My Account
        </Typography>
      </Box>
      <Menu
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
        <MenuItem>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <Link to="/wallet" style={{ color: "black", textDecoration: "none" }}>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Wallet fontSize="small" />
            </ListItemIcon>
            Wallet
          </MenuItem>
        </Link>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
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
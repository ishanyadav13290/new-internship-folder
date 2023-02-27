import { Avatar, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/Contexts";
import { lb } from "../../Static/theme";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AccountSettings from "./AccountSettings/accountSettings";
import {
    Payment, SettingsRounded, ShoppingBag
} from "@mui/icons-material";
import Orders from "./Orders/Orders";
import Payments from "./Payments/payments";

let icons = { bgcolor: lb };

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

// export default function Settings() {
//   let { userName } = useContext(AuthContext);
// //   return (
// <Box
//   minHeight={["100vh"]}
//   display={["block", "block", "flex", "flex"]}
//   padding={"20px"}
// >
//   <Box
//     width={["100%", "100%", "20%", "20%"]}
//     position={["initial", "initial", "sticky", "sticky"]}
//     top={"170px"}
//     height={["auto", "auto", "100vh", "100vh"]}
//     sx={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}
//   >
// <Box display={"flex"} padding={"10px 0"} justifyContent={"space-evenly"}>
//   <Box sx={{display:"flex",alignItems:"center"}}>
//     <Avatar sx={{ bgcolor: lb}} />
//   </Box>
//   <Box textAlign={"left"}>
//     <sub>Hello,</sub>
//     <br />
//     <Typography fontWeight={700}>{userName}</Typography>
//   </Box>
// </Box>
// //         <Divider />

// //       </Box>
// //     </Box>
// //   );
// return
// }

export default function Settings() {
  const [value, setValue] = useState(0);
  let { userName } = useContext(AuthContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      minHeight={["100vh"]}
      display={["block", "block", "flex", "flex"]}
      padding={"20px"}
    >
      <Box
        width={["100%", "100%", "30%", "30%"]}
        position={["initial", "initial", "sticky", "sticky"]}
        top={"170px"}
        maxWidth={["100vw","100vw","20vw","20vw"]}
        height={["auto", "auto", "100vh", "100vh"]}
        sx={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
      >
        <Box>
          <UserInfo userName={userName} />
        </Box>
        <Divider />
        <Tabs
        
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          <Tab sx={{color:lb}} label={<AccSettings />} {...a11yProps(0)} />
          <Tab label={<PaySettings />} {...a11yProps(1)} />
          <Tab label={<OrderSettings />} {...a11yProps(2)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <AccountSettings />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Payments />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Orders />
      </TabPanel>
    </Box>
  );
}

function UserInfo({ userName }) {
  return (
    <Box
      display={"flex"}
      width={"100%"}
      padding={"10px 0"}
      justifyContent={"space-evenly"}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Avatar sx={icons} />
      </Box>
      <Box textAlign={"left"}>
        <sub>Hello,</sub>
        <br />
        <Typography fontWeight={700}>{userName}</Typography>
      </Box>
    </Box>
  );
}

function AccSettings() {
  return (
    <Box
      display={"flex"}
      width={"100%"}
      padding={"10px 0"}
      justifyContent={"flex-start"}
    >
      <Box sx={{ display: "flex", alignItems: "center"}}>
        <SettingsRounded sx={{color:lb}} />
        <Typography pl="5px">Account Settings</Typography>
      </Box>
    </Box>
  );
}

function PaySettings(){
    return (
        <Box
          display={"flex"}
          width={"100%"}
          padding={"10px 0"}
          justifyContent={"flex-start"}
        >
          <Box sx={{ display: "flex", alignItems: "center"}}>
            <Payment sx={{color:lb}} />
            <Typography pl="5px">Payments</Typography>
          </Box>
        </Box>
      );
}

function OrderSettings(){
    return (
        <Box
          display={"flex"}
          width={"100%"}
          padding={"10px 0"}
          justifyContent={"flex-start"}
        >
          <Box sx={{ display: "flex", alignItems: "center"}}>
            <ShoppingBag sx={{color:lb}} />
            <Typography pl="5px">Orders</Typography>
          </Box>
        </Box>
      );
}


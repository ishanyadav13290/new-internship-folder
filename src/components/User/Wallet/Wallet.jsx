import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../Context/Contexts";

export default function Wallet() {
  let { isAuth, walletBalance } = useContext(AuthContext);
  return !isAuth ? (
    <Navigate to="/login" />
  ) : (
    <Box minHeight={"100vh"}>
      <Box>
      <Box width={["50%","20%"]} p={"10px"} borderRadius={"20px"} bgcolor={"rgb(254, 245, 230)"} m={"auto"} textAlign={"left"}>
        <Typography
        color={"rgb(244, 151, 0)"}
        width={"100%"}
        display={"flex"}
        // justifyContent="center"
          variant="h4"
          fontWeight={700}
        >{`${walletBalance.toLocaleString(
          "en-IN"
        )}`}</Typography>
        <p style={{margin:"0",color:"rgb(244, 151, 0)"}}>Your Gofra Wallet Balance</p>
      </Box>
      </Box>
    </Box>
  );
}

import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { AuthContext } from "../../../Context/Contexts";
import toIndianNumberingSystem from "../../../Features/RupeeConversion";
import { lb } from "../../../Static/theme";
import TransactionsCard from "./transactionCard";

export default function Payments() {
  let { walletBalance } = useContext(AuthContext);
  return (
    <Box minHeight={"100vh"} minWidth={"60vw"} textAlign={"left"}>
      <Typography color={lb} variant="h4" fontWeight={700}>
        Payments
      </Typography>
      <Divider />
      <br />
      <Typography variant="h5" sx={{color:lb}}>Wallet</Typography>
      <br />
      <Box display={["block","block","flex","flex"]}>
      <Box
        width={["70%", "fit-content"]}
        height={["auto", "auto", "65px"]}
        p={"10px"}
        borderRadius={"20px"}
        bgcolor={"rgba(72, 98, 208,0.2)"}
        textAlign={"left"}
      >
        <Typography
          color={lb}
          width={"100%"}
          display={"flex"}
          // justifyContent="center"
          variant="h4"
          fontWeight={700}
        >
          {toIndianNumberingSystem(walletBalance)}
        </Typography>
        <p style={{ margin: "0", color: lb }}>Your Gofra Wallet Balance</p>
      </Box>
      <Box width={["90%", "80%", "50%"]} m={"auto"}>
            <Typography variant="h5" fontWeight={700}>
              Wallet Transactions
            </Typography>
            <Box
              m={["0 auto", "0 auto", "0"]}
              maxHeight={"400px"}
              padding={"0 5px"}
              sx={{ overflowY: "scroll", overflowX: "hidden" }}
            >
              <Box>
                <TransactionsCard amt={9000} scene={true} />
                <TransactionsCard amt={5000} scene={false} />
                <TransactionsCard amt={9000} scene={true} />
                <TransactionsCard amt={5000} scene={false} />
                <TransactionsCard amt={9000} scene={true} />
                <TransactionsCard amt={5000} scene={false} />
                <TransactionsCard amt={9000} scene={true} />
                <TransactionsCard amt={5000} scene={false} />
                <TransactionsCard amt={9000} scene={true} />
                <TransactionsCard amt={5000} scene={false} />
                <TransactionsCard amt={9000} scene={true} />
                <TransactionsCard amt={5000} scene={false} />
              </Box>
            </Box>
          </Box>
      </Box>
    </Box>
  );
}

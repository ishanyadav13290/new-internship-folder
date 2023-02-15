import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../Context/Contexts";
import toIndianNumberingSystem from "../../Features/RupeeConversion";
import TransactionsCard from "./transactionCard";

export default function Wallet() {
  let { isAuth, walletBalance } = useContext(AuthContext);
  return !isAuth ? (
    <Navigate to="/login" />
  ) : (
    <Box minHeight={"100vh"}>
      <Box>
        <Box m={"auto"}>
          <Typography fontWeight={700} variant="h4" textAlign={"center"}>
            My Wallet
          </Typography>
        </Box>
        <Box
          display={["block", "block", "flex"]}
          justifyContent={"space-evenly"}
        >
          <Box width={"60%"}>
            <Box
              width={["50%", "20%"]}
              height={["auto", "auto", "65px"]}
              p={"10px"}
              borderRadius={"20px"}
              bgcolor={"rgb(254, 245, 230)"}
              m={"3% auto"}
              textAlign={"left"}
            >
              <Typography
                color={"rgb(244, 151, 0)"}
                width={"100%"}
                display={"flex"}
                // justifyContent="center"
                variant="h4"
                fontWeight={700}
              >
                {toIndianNumberingSystem(walletBalance)}
              </Typography>
              <p style={{ margin: "0", color: "rgb(244, 151, 0)" }}>
                Your Gofra Wallet Balance
              </p>
            </Box>
            <Box>
              <Typography fontWeight={700}>
                Tip: You can earn more gift vouchers using wallet ;)
              </Typography>
              <br />
              <Button variant="contained" sx={{bgcolor:"rgb(246, 126, 34)"}}>Add to Wallet</Button>
            </Box>
          </Box>
          <Box width={["90%", "80%", "30%"]} m={"auto"}>
            <Typography variant="h5" fontWeight={700}>
              Recent Transactions
            </Typography>
            <Box
              m={["0 auto", "0 auto", "0"]}
              maxHeight={"400px"}
              padding={"0 5px"}
              sx={{ overflowY: "scroll", overflowX: "hidden" }}
            >
              <Box></Box>
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
    </Box>
  );
}

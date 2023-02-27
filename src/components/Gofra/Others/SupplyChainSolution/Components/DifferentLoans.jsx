import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { CurveUnderline, WaveLine } from "../../../../Features/FunkyTexts/HoverTexts";
import { LordCoin, LordSaving } from "../../../../Features/LordIcons";
import { db } from "../../../../Static/theme";

export default function DifferentLoans() {
  return (
    <Box bgcolor={db} color={"white"}>
      <Box display={["block", "block", "flex", "flex"]} justifyContent={"space-evenly"}>
        <Box width={["100%","100%","60%","50%"]} >
          <img
          style={{width:"100%"}}
            src={
              "https://cdn.pixabay.com/photo/2016/08/06/14/11/money-1574450_960_720.png"
            }
            alt="loan"
          />
        </Box>
        <Box display={"flex"} flexDirection={"column"} justifyContent={"space-evenly"}>
            <Box>
            <CurveUnderline content={"Loans for all your needs"} variant={"h4"} />
            <br />
            <Typography variant="body2">Presenting a wide range of loans to empower your dreams.</Typography>
            <br />
            <Divider sx={{bgcolor:"white"}} />
            <br />
            <Box display={"flex"} justifyContent={"space-evenly"}>
            <Box>
                <LordCoin /><br />
                <Typography fontWeight={700}>100% Financing</Typography>
                </Box>
                <Box>
                <LordSaving /><br />
                <Typography fontWeight={700}>100% Savings</Typography>
                </Box>
            </Box>
            </Box>
        </Box>
      </Box>
    </Box>
  );
}

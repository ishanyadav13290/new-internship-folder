import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { lb } from "../../../Static/theme";
import Assistance from "./Assistance";
import DifferentLoans from "./Components/DifferentLoans";
import RangeOfLoans from "./Components/RangeOfLoans";

export default function SupplyChain(){
    return <Box minHeight={"100vh"} textAlign={"left"}>
    <Box mt={["40%","25%","15%","10%"]}>
    <Typography variant="h5" color={lb} ml={"8%"} fontWeight={700}>Supply Chain Solutions</Typography>
    <br />
    <DifferentLoans />
    <br />
    <Box ml={["0","0","8%","8%"]}>
    <RangeOfLoans />
    <br />
    <br />
    <Assistance />
    </Box>
    <br />
    <br />
    <br />
    </Box>
    
    </Box>
}
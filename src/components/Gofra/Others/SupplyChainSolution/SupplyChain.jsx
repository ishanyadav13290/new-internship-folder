import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { lb } from "../../../Static/theme";
import DifferentLoans from "./Components/DifferentLoans";

export default function SupplyChain(){
    return <Box minHeight={"100vh"} textAlign={"left"}>
    <Box mt={["40%","25%","15%","10%"]}>
    <Typography variant="h5" color={lb} ml={"8%"} fontWeight={700}>Supply Chain Solutions</Typography>
    <br />
    <DifferentLoans />
    </Box>
    </Box>
}
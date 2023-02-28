import { Box, Typography } from "@mui/material";
import { lb } from "../../../../Static/theme";
import LoanCards from "./LoanCards/LoanCards";

export default function RangeOfLoans(){
    let arr= Array(6).fill("A")
    return <Box>
        <Typography color={lb} fontWeight={700} variant="h6">Explore our range of loans designed for your unique needs ;)</Typography>
        <br />
        <Box display={"grid"} gridTemplateColumns={["repeat(2,1fr)","repeat(3,1fr)","repeat(4fr)"]} gap={"10px"}>
        {arr.map((el,i)=>{
           return <LoanCards key={i} title={"Loan 1"} description={"A wide range of loan to provide best-suited plan for you"} />
        })}
        </Box>

    </Box>
}
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { lb } from "../../../../../Static/theme";

export default function LoanCards({title, description}){
    return <Box maxWidth={"300px"} bgcolor={lb} color={"white"} borderRadius={"10px"} padding={"20px"} sx={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
    <Box>
    <Box>
        <Typography variant="h4" fontWeight={700}>{title}</Typography>
    </Box>
    <Box>
        <Typography variant="body1">{description}</Typography>
    </Box>
    <br />
    <Box display={"flex"}>
        <Button variant="outlined" sx={{color:"white", borderColor:"white", mr:"10px"}}>Know More</Button>
        <Button variant="outlined" sx={{color:"white", borderColor:"white"}}>Apply Online</Button>
    </Box>
    </Box>
    </Box>
}
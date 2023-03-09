import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function SupplierCards({img, title}){
    return <Box boxShadow={"rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"} borderRadius={"10px"} padding={"20px"} width={"300px"}>
    <Box height={"140px"}>
        <img style={{height:"100%", width:"100%"}} src={img} alt="cards" />
    </Box>
    <br />
    <Typography variant="body1" fontWeight={700}>{title}</Typography>
</Box>
}
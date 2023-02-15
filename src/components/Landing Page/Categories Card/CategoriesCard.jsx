import { Typography } from "@mui/material";
import { Box } from "@mui/system";


export default function Cards({name,image}){
    return <Box display={"flex"} flexDirection={"column"} justifyContent={"space-between"} width={["140px","180px"]} >
    <Box maxHeight={"100px"}><img src={image} alt={""} height={"100%"} style={{objectFit:"cover"}} width={"100%"} /></Box>
    <Typography>{name}</Typography>
    </Box>
}
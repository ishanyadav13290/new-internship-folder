import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { LordBag, LordClock, LordHeart, LordTarget } from "../../Features/LordIcons";

export default function Reasons(){
    return <Box height={["fit-content","300px"]} textAlign={"left"} display={["block","block","flex","flex"]} justifyContent={"space-between"} p={["20px"]}>
        <Box width={["100%","100%","30%","70%"]}>
            <Box display={["flex"]} alignItems={"center"}>
            <Typography sx={{display:["initial","initial","flex","flex"], alignItems:"center"}} variant="h3" fontWeight={700}>Reasons To <LordHeart /> Gofra! </Typography>
            </Box>
            <br />
            <Typography variant="h6">Gofra's excellent team of experts ensures you've best of both - Qualtiy and Cost!</Typography>
        </Box>
        <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}>
            <Box borderLeft={"1px solid white"} pl={"10px"}>
            <LordTarget />
                <Typography fontWeight={600} variant="h6">WE ASSURE YOU ON TIME DELIVERY</Typography>
            </Box>
            <br />
            <Box borderLeft={"1px solid white"} pl={"10px"}>
            <LordBag />
                <Typography fontWeight={600} variant="h6">NO CHANCES OF STOCKOUTS ;)</Typography>
            </Box>
            <Box borderLeft={"1px solid white"} pl={"10px"}>
            <LordClock />
                <Typography fontWeight={600} variant="h6">SERVICES 24x7</Typography>
            </Box>
        </Box>
    </Box>
}
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { lb } from "../../../Static/theme";

export default function NoItemsToVerify(){
    return <Box height={"50vh"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Typography color={lb} fontWeight={700} variant={"h3"}>No Items to Verify</Typography>
    </Box>
}
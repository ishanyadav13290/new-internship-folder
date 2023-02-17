import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function NoData(){
    return <Box minHeight={"100vh"} width={["100vw","100vw","99vw"]} m={"auto"}>
    <Typography variant="h1">Sorry, No Results Found :(</Typography>
    </Box>
}
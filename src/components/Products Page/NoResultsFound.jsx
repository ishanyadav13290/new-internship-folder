import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function NoResultsFound(){
    return <Box width={"70vw"}>
        <Typography variant="h5" fontSize={"40px"}>Sorry :(</Typography>
        <Typography variant="h6" fontSize={"40px"}>No Results Found</Typography>
    </Box>
}
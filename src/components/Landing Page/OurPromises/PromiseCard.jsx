import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { lb } from "../../Static Data/theme";

export default function PromiseCard({ logo, title }) {
  return (
    <Box
      display={"flex"}
      borderRadius={"20px"}
      height={["150px"]}
      minWidth={["80%", "50%", "20%"]}
      m={["0 5px", "0 5px", "0 auto"]}
      flexDirection={"column"}
      justifyContent={"space-evenly"}
      bgcolor={lb}
    >
      <Box width={"100%"}>{logo}</Box>
      <Box width={"100%"}>
        <Typography variant="h6" color={"white"} fontWeight={700}>
          {title}
        </Typography>
      </Box>
    </Box>
  );
}

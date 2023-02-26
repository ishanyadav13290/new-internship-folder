import { Add, Remove } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import toIndianNumberingSystem from "../../../Features/RupeeConversion";

export default function TransactionsCard({ amt, scene }) {
  return (
    <Box
      display={"flex"}
      m={"5px 0"}
      alignContent={"center"}
      borderRadius={"5px"}
      border={scene?"1px solid green": "1px solid blue"}
      // bgcolor={scene ? "rgb(139, 231, 139)" : "rgb(255, 153, 154)"}
      bgcolor={scene ? "rgba(72, 98, 208,0.5)" : "rgb(255, 255, 255)"}
      width={["100%", "90%", "100%"]}
    >
      <Box
        display={"flex"}
        alignContent={"center"}
        width={"90%"}
        m={"auto"}
        justifyContent={"space-between"}
      >
        <Box>{scene ? <Add /> : <Remove />}</Box>
        <Box display={"flex"} width={"40%"} justifyContent={"space-between"}>
        <Typography fontWeight={700}>{scene?"Added":"Removed"}</Typography>
        <Typography fontWeight={700}>{toIndianNumberingSystem(amt)}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

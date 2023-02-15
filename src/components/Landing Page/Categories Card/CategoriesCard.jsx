import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Cards({ name, image, fit }) {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      width={["140px", "180px"]}
      overflow="hidden"
      sx={{"&:hover": {
          boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",
          borderRadius: "5px",
          transition:"0.2s ease-in"
        }}}
    >
      <Box maxHeight={"100px"}>
        <img
          src={image}
          alt={""}
          height={"100%"}
          style={{ objectFit: {fit} }}
          width={"100%"}
        />
      </Box>
      <Typography>{name}</Typography>
    </Box>
  );
}

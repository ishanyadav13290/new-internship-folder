import { Check, CheckCircle } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { lb } from "../../Static/theme";
import WorkWithUsForm from "./workWithUsForm";
import s from "./workWithUs.module.css"

export default function WorkForUs() {
  return (
    <Box
    height={["auto","600px"]}
    borderRadius={"20px"}
    padding={"20px"}
    className={s.container}
      display={["block","block","flex","flex"]}
      justifyContent={"space-between"}
      bgcolor={lb}
      color={"white"}
      width={["90%","70%"]}
      m={"auto"}
    >
      <Box m={"auto"}  textAlign={"left"} width={["100%","40%"]}>
        <Typography className={s.hoverTitle} variant="h4" >Work With Us For...</Typography>
        <br />
        <Box>
          <Box display={"flex"} alignItems={"center"}>
            <CheckCircle sx={{fontSize:"2rem"}} />
            <Typography variant="h5">Smooth Business Operations</Typography>
          </Box>
          <br />
          <Box display={"flex"} alignItems={"center"}>
          <CheckCircle sx={{fontSize:"2rem"}} />
            <Typography variant="h5">Multiple Vendors at One Place</Typography>
          </Box>
          <br />
          <Box display={"flex"} alignItems={"center"}>
          <CheckCircle sx={{fontSize:"2rem"}} />
            <Typography variant="h5">Uninterrupted</Typography>
          </Box>
        </Box>
      </Box>
      <Box
      height={"fit-content"}
      right={["0","0","20px","20px"]}
      borderRadius={"10px"}
        bgcolor={"white"}
        position={"relative"}
        top={"-10%"}
        sx={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          "&:hover": {
            //   boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
          },
        }}
      >
        <WorkWithUsForm />
      </Box>
    </Box>
  );
}

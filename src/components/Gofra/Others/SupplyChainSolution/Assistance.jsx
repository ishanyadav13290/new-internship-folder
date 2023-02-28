import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { lb } from "../../../Static/theme";

export default function Assistance() {
  return (
    <Box width={"fit-content"}>
      <Typography variant="h4">Need Assistance?</Typography>
      <br />
      <Box display={["block","block","flex","flex"]} borderRadius={"10px"} overflow={"hidden"} p={"0 10px 0 0"}>
        <Box maxWidth={["auto", "300px"]} padding={"10px"} m={["0","0","0 10px","0 10px 0 0"]} bgcolor={lb} color={"white"}>
          <br />
          <br />
          <Typography variant="h5" fontWeight={700}>Request Assistance!</Typography>
          <Typography variant="body1">
            Please fill the details in the form so we can assist you.
          </Typography>
          <br />
          <br />
        </Box>
        <Box>
          <Box>
            <TextField type={"text"} placeholder={"First Name"} />
            <TextField type={"text"} placeholder={"Second Name"} />
            <TextField type={"Number"} placeholder={"Contact Number"} />
          </Box>
          <br />
          <Box>
          <TextField type={"Number"} placeholder={"Pin Code"} />
            <TextField type={"email"} placeholder={"Email ID"} />
          </Box>
          <br />
          <Box display={"flex"} justifyContent={"center"}>
          <Button sx={{bgcolor:lb, color:"white"}}>Submit</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

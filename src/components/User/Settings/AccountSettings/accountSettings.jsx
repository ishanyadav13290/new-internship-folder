import { Button, FormControl, FormControlLabel, FormLabel, Input, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Context/Contexts";
import { db, lb } from "../../../Static/theme";

let buttonStyle = {
  backgroundColor: lb,
  marginLeft:"10px",
  "&:hover": {
    bgcolor: db,
  }
};

export default function AccountSettings() {
    let {userName, userEmail, userPhone, userGender,setUserGender, userAddress} = useContext(AuthContext)
    let [isDisable, setIsDisable] = useState(true)
  return (
    <Box minHeight={"100vh"} minWidth={"70vw"}>
      <Box display={"flex"} alignItems={"center"}>
        <Typography variant="h5">Personal Information</Typography>
        <Button variant={"contained"} sx={buttonStyle} onClick={()=>{
            setIsDisable(false)
        }}>
          Edit
        </Button>
      </Box>
      <br />

      <Box display={"flex"}>
        <Box textAlign={"left"} width={"100%"}>
            <Typography variant={"body1"}>User Name</Typography>
            <TextField sx={{width:["100%","50%"]}} type="text" disabled={isDisable} placeholder={userName || "User Name"} />
        </Box>
      </Box>
      <br />
      <Box display={"flex"}>
        <Box textAlign={"left"} width={"100%"}>
            <Typography variant={"body1"}>Email Address</Typography>
            <TextField sx={{width:["100%","50%"]}} type="email" fullWidth disabled={isDisable} placeholder={userEmail || "User Email"} />
        </Box>
      </Box>
      <br />
      <Box display={"flex"}>
        <Box textAlign={"left"} width={"100%"}>
            <Typography variant={"body1"}>Phone Number</Typography>
            <TextField sx={{width:["100%","50%"]}} type="number" fullWidth disabled={isDisable} placeholder={ userPhone || "Phone Number"} />
        </Box>
      </Box>
      <br />
      <Box display={"flex"}>
      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue={"other"}
        value={userGender}
      >
        <FormControlLabel onClick={()=>{
          if(!isDisable)  setUserGender("female")
        }} disabled={isDisable} value="female" control={<Radio />} label="Female" />
        <FormControlLabel onClick={()=>{
          if(!isDisable)  setUserGender("male")
        }} disabled={isDisable} value="male" control={<Radio />} label="Male" />
        <FormControlLabel onClick={()=>{
          if(!isDisable)  setUserGender("other")
        }} disabled={isDisable} value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
      </Box>
      <br />
      <Box display={"flex"}>
        <Box textAlign={"left"} width={"100%"}>
            <Typography variant={"body1"}>Saved Address</Typography>
            <TextField sx={{width:["100%","50%"]}} type="text" fullWidth disabled={isDisable} placeholder={ userAddress || "Address"} />
        </Box>
      </Box>
      <br />
      <Button variant={"contained"} sx={buttonStyle} onClick={()=>{
            setIsDisable(true)
        }}>Save</Button>

    </Box>
  );
}

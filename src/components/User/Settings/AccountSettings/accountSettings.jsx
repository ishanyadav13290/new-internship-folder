import { Button, FormControl, FormControlLabel, FormLabel, Input, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/Contexts";
import { db, lb } from "../../../Static/theme";
import AccountSettingsFaq from "./accountSettingsFaq";

let buttonStyle = {
  backgroundColor: lb,
  marginLeft:"10px",
  "&:hover": {
    bgcolor: db,
  }
};

export default function AccountSettings() {
    let {userID,userName,setUserName, userEmail, setUserEmail, userPhone, setUserPhone, userGender,setUserGender, userAddress, setUserAddress} = useContext(AuthContext)
    let [isDisable, setIsDisable] = useState(true)
    let [newChangedItem,setNewChangedItem] = useState({
        name:userName,
        email:userEmail,
        phone:userPhone,
        address:userAddress,
        gender:userGender
    })

    function userNameChange(newValue){
        let val =newValue.target.value
        if(val.length===0) val= userName
        setNewChangedItem({...newChangedItem,name:val})
    }

    function emailChange(newValue){
        let val = newValue.target.value
        if(val.length === 0) val = userEmail
        setNewChangedItem({...newChangedItem,email:val})
    }

    function phoneChange(newValue){
        let val = newValue.target.value
        setNewChangedItem({...newChangedItem,phone:val})
    }

    function changeAddress(newValue){
        let val = newValue.target.value
        if (val.length === 0) val = userAddress
        setNewChangedItem({...newChangedItem,address:val})
    }

    function submit(){
        if(isDisable)return
        setUserName(newChangedItem.name)
        setUserEmail(newChangedItem.email)
        setUserPhone(newChangedItem.phone)
        setUserAddress(newChangedItem.address)
        axios.patch(`http://localhost:3001/users/${userID}`,newChangedItem)
        console.log(newChangedItem)
        setIsDisable(true)
    }
    
  return (
    <>
        <Box minHeight={"90vh"} minWidth={"60vw"}>
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
            <TextField onChange={userNameChange} sx={{width:["100%","50%"]}} type="text" disabled={isDisable} placeholder={userName || "User Name"} />
        </Box>
      </Box>
      <br />
      <Box display={"flex"}>
        <Box textAlign={"left"} width={"100%"}>
            <Typography variant={"body1"}>Email Address</Typography>
            <TextField sx={{width:["100%","50%"]}} type="email" fullWidth disabled={isDisable} onChange={emailChange} placeholder={userEmail || "User Email"} />
        </Box>
      </Box>
      <br />
      <Box display={"flex"}>
        <Box textAlign={"left"} width={"100%"}>
            <Typography variant={"body1"}>Phone Number</Typography>
            <TextField onChange={phoneChange} sx={{width:["100%","50%"]}} type="number" fullWidth disabled={isDisable} placeholder={String(userPhone) || "Phone Number"} />
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
          if(isDisable) return
            setUserGender("female")
          setNewChangedItem({...newChangedItem,gender:"female"})
        }} disabled={isDisable} value="female" control={<Radio />} label="Female" />
        <FormControlLabel onClick={()=>{
          if(isDisable) return
            setUserGender("male")
            setNewChangedItem({...newChangedItem,gender:"male"})
        }} disabled={isDisable} value="male" control={<Radio />} label="Male" />
        <FormControlLabel onClick={()=>{
          if(isDisable) return
            setUserGender("other")
            setNewChangedItem({...newChangedItem,gender:"other"})
        }} disabled={isDisable} value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
      </Box>
      <br />
      <Box display={"flex"}>
        <Box textAlign={"left"} width={"100%"}>
            <Typography variant={"body1"}>Saved Address</Typography>
            <TextField sx={{width:["100%","50%"]}} type="text" fullWidth onChange={changeAddress} disabled={isDisable} placeholder={ userAddress || "Address"} />
        </Box>
      </Box>
      <br />
      <Button disabled={isDisable} variant={"contained"} sx={buttonStyle} onClick={()=>{
            submit()
        }}>Save</Button>
    </Box>
    <AccountSettingsFaq />
    </>
  );
}

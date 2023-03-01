import { Button, Checkbox, FormControl, FormControlLabel, FormLabel, InputLabel, ListItemText, MenuItem, OutlinedInput, Radio, RadioGroup, Select, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Context/Contexts";
import { cardNames } from "../../../Static/db";
import { db, lb } from "../../../Static/theme";

let buttonStyle = {
    backgroundColor: lb,
    marginLeft:"10px",
    "&:hover": {
      bgcolor: db,
    }
  };
  const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

export default function CompanyInfo(){
    let {userID,userName,setUserName, userEmail, setUserEmail, userPhone, setUserPhone, userGender,setUserGender, userAddress, setUserAddress} = useContext(AuthContext)
    let [isDisable, setIsDisable] = useState(true)
    let [newChangedItem,setNewChangedItem] = useState({
        name:userName,
        email:userEmail,
        phone:userPhone,
        address:userAddress,
        gender:userGender
    })

    const [categoryName, setCategoryName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setCategoryName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

    function companyNameChange(newValue){
        let val =newValue.target.value
        if(val.length===0) val= userName
        setNewChangedItem({...newChangedItem,name:val})
    }

    function pinCodeChange(newValue){
        let val = newValue.target.value
        if(val.length === 0) val = userEmail
        setNewChangedItem({...newChangedItem,email:val})
    }

    function GSTChange(newValue){
        let val = newValue.target.value
        setNewChangedItem({...newChangedItem,phone:val})
    }

    function PostalAddress(newValue){
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
        // axios.patch(`http://localhost:3001/users/${userID}`,newChangedItem)
        setIsDisable(true)
    }
    return <>
    <Box minHeight={"90vh"} minWidth={"60vw"}>
  <Box display={"flex"} alignItems={"center"}>
    <Typography color={lb} variant="h4" fontWeight={700}>Company Information</Typography>
    <Button variant={"contained"} sx={buttonStyle} onClick={()=>{
        setIsDisable(false)
    }}>
      Edit
    </Button>
  </Box>
  <br />

  <Box display={"flex"}>
    <Box textAlign={"left"} width={"100%"}>
        <Typography variant={"body1"}>Company's Name</Typography>
        <TextField onChange={companyNameChange} sx={{width:["100%","50%"]}} type="text" disabled={isDisable} placeholder={"Company's Name"} />
    </Box>
  </Box>
  <br />
  <Box display={"flex"}>
    <Box textAlign={"left"} width={"100%"}>
    <Typography variant={"body1"}>Categories</Typography>
    <div>
      <FormControl sx={{width: ["100%","50%"] }}>
        <InputLabel id="demo-multiple-checkbox-label">Select Categories You Deal With</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={categoryName}
          onChange={handleChange}
          input={<OutlinedInput label="Select Categories You Deal With" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {cardNames.map((name,i) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={categoryName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
    </Box>
  </Box>
  <br />
  <Box display={"flex"}>
    <Box textAlign={"left"} width={"100%"}>
        <Typography variant={"body1"}>Pin Code</Typography>
        <TextField sx={{width:["100%","50%"]}} type="number" fullWidth disabled={isDisable} onChange={pinCodeChange} placeholder={"PIN Code"} />
    </Box>
  </Box>
  <br />
  <Box display={"flex"}>
    <Box textAlign={"left"} width={"100%"}>
        <Typography variant={"body1"}>Postal Address</Typography>
        <TextField sx={{width:["100%","50%"]}} type="text" fullWidth onChange={PostalAddress} disabled={isDisable} placeholder={ userAddress || "Address"} />
    </Box>
  </Box>
  <br />
  <Box display={"flex"}>
    <Box textAlign={"left"} width={"100%"}>
        <Typography variant={"body1"}>GST Number</Typography>
        <TextField onChange={GSTChange} sx={{width:["100%","50%"]}} type="number" fullWidth disabled={isDisable} placeholder={ "GST Number"} />
    </Box>
  </Box>
  <br />
  <Box display={"flex"}>
    <Box textAlign={"left"} width={"100%"}>
        <Typography variant={"body1"}>GST Certificate</Typography>
        <TextField sx={{width:["100%","50%"]}} type="number" fullWidth disabled={isDisable} placeholder={ "GST Certificate"} />
    </Box>
  </Box>
  <br />
  <Box display={"flex"}>
    <Box textAlign={"left"} width={"100%"}>
        <Typography variant={"body1"}>PAN Card</Typography>
        <TextField sx={{width:["100%","50%"]}} type="text" fullWidth onChange={PostalAddress} disabled={isDisable} placeholder={"PAN Card"} />
    </Box>
  </Box>
  <br />
  <Button disabled={isDisable} variant={"contained"} sx={buttonStyle} onClick={()=>{
        submit()
    }}>Save</Button>
</Box>
{/* <AccountSettingsFaq /> */}
</>
}
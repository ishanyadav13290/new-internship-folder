import { Button, Checkbox, FormControl, FormControlLabel, FormLabel, Input, InputLabel, ListItemText, MenuItem, OutlinedInput, Radio, RadioGroup, Select, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Context/Contexts";
import { cardNames } from "../../../Static/db";
import { db, lb } from "../../../Static/theme";

let buttonStyle = {
  backgroundColor: lb,
  marginLeft: "10px",
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

export default function CompanyInfo() {
  let { userID, userName, setUserName, userEmail, setUserEmail, userPhone, setUserPhone, userGender, setUserGender, userAddress, setUserAddress } = useContext(AuthContext)
  let [isDisable, setIsDisable] = useState(true)
  let [newChangedItem, setNewChangedItem] = useState({})
  const [GST, setGST] = useState("")
  const [panCardImg, setPanCardImg] = useState("")
  const [categoryName, setCategoryName] = useState([]);
  const [subCategoryName, setSubCategoryName] = useState([]);
  const [subCategoryValue, setSubCategoryValue] = useState([]);
  const [locations, setLocations] = useState([]);
  const [postalAddress, setPostalAddress] = useState([]);
  const [turnover, setTurnover] = useState("")

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setCategoryName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const handleTurnoverChange = (e)=>{
    setTurnover(e.target.value)
  }
  const handleChange2 = (event) => {
    const {
      target: { value },
    } = event;
    setSubCategoryValue(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handlePostalChange = (event) => {
    setPostalAddress(event.target.value);
  };

  function companyNameChange(newValue) {
    let val = newValue.target.value
    setNewChangedItem({ ...newChangedItem, companyName: val })
  }

  function pinCodeChange(newValue) {
    let val = newValue.target.value;
    if (val.length == 6) {
      axios.get(`https://api.postalpincode.in/pincode/${val}`).then(res => setLocations(res.data[0].PostOffice ? res.data[0].PostOffice : []))
    }
    else setLocations([])
    setNewChangedItem({ ...newChangedItem, pinCode: val })
  }

  function GSTChange(newValue) {
    let val = newValue.target.value
    setNewChangedItem({ ...newChangedItem, GST_Number: val })
  }

  function PostalAddress(newValue) {
    let val = newValue.target.value
    if (val.length === 0) val = userAddress
    setNewChangedItem({ ...newChangedItem, PostalAddress: val })
  }

  function submit() {
    if (isDisable) return
    setUserName(newChangedItem.name)
    setUserEmail(newChangedItem.email)
    setUserPhone(newChangedItem.phone)
    setUserAddress(newChangedItem.address)
    // axios.patch(`http://localhost:3001/users/${userID}`,newChangedItem)
    setIsDisable(true)
  }
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setGST(reader.result);
    };
  };

  const handleFileChange1 = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPanCardImg(reader.result);
      console.log(reader.result);
    };
  };

  let subCategroies = {}
  for (let i = 0; i < cardNames.length; i++) {
    let arr = [];
    for (let j = 0; j < 5; j++) {
      arr.push(cardNames[i] + " " + (j + 1));
    }
    subCategroies[cardNames[i]] = arr
  }
  return <>
    <Box minHeight={"90vh"} minWidth={"60vw"}>
      <Box display={"flex"} alignItems={"center"}>
        <Typography color={lb} variant="h4" fontWeight={700}>Company Information</Typography>
        <Button variant={"contained"} sx={buttonStyle} onClick={() => {
          setIsDisable(false)
        }}>
          Edit
        </Button>
      </Box>
      <br />
      <Box display={"flex"}>
        <Box textAlign={"left"} width={"100%"}>
          <Typography variant={"body1"}>Company's Name</Typography>
          <TextField onChange={companyNameChange} sx={{ width: ["100%", "50%"] }} type="text" disabled={isDisable} placeholder={"Company's Name"} />
        </Box>
      </Box>
      <br />
      <Box display={"flex"}>
        <Box textAlign={"left"} width={"100%"}>
          <Typography variant={"body1"}>Turnover</Typography>
          <Box sx={{ width: ["100%", "50%"] }}>
      <FormControl fullWidth disabled={isDisable}>
        <InputLabel id="demo-simple-select-label">Turnover (in Crores)</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={turnover}
          label="Turnover (in Crores)"
          onChange={handleTurnoverChange}
        >
            <MenuItem value={"0-10Cr"}>0-10 Cr</MenuItem>
            <MenuItem value={"11-25Cr"}>11-25 Cr</MenuItem>
            <MenuItem value={"25-50Cr"}>25-50 Cr</MenuItem>
            <MenuItem value={"50-100Cr"}>50-100 Cr</MenuItem>
            <MenuItem value={"100-200Cr"}>100-200 Cr</MenuItem>
            <MenuItem value={"200-300Cr"}>200-300 Cr</MenuItem>
            <MenuItem value={"300-400Cr"}>300-400 Cr</MenuItem>
            <MenuItem value={"400-500Cr"}>400-500 Cr</MenuItem>
            <MenuItem value={"500+Cr"}>500+ Cr</MenuItem>
        </Select>
      </FormControl>
    </Box>
        </Box>
      </Box>
      <br />
      <Box display={"flex"}>
        <Box textAlign={"left"} width={"100%"}>
          <Typography variant={"body1"}>Categories</Typography>
          <div>
            <FormControl sx={{ width: ["100%", "50%"] }} disabled={isDisable}>
              <Select
                MenuProps={{
                  variant: 'menu',
                  disableScrollLock: true,
                }}
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={categoryName}
                onChange={(e) => {
                  let arr = [];
                  for (let i of e.target.value) {
                    arr = [...arr, ...subCategroies[i]]
                  }
                  setSubCategoryName(arr);
                  console.log(arr)
                  handleChange(e)
                }}
                input={<OutlinedInput />}
                renderValue={(selected) => selected.join(', ')}
              >
                {cardNames.map((name, i) => (
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
          <Typography variant={"body1"}>Sub Categories</Typography>
          <div>
            <FormControl sx={{ width: ["100%", "50%"] }} disabled={isDisable}>
              <Select
                MenuProps={{
                  variant: 'menu',
                  disableScrollLock: true,
                }}
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={subCategoryValue}
                onChange={handleChange2}
                input={<OutlinedInput />}
                renderValue={(selected) => selected.join(', ')}
              >
                {subCategoryName.map((name, i) => (
                  <MenuItem key={name + i} value={name}>
                    <Checkbox checked={subCategoryValue.indexOf(name) > -1} />
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
          <TextField sx={{ width: ["100%", "50%"] }} type="number" fullWidth disabled={isDisable} onChange={pinCodeChange} placeholder={"PIN Code"} />
        </Box>
      </Box>
      <br />
      <Box display={"flex"}>
        <Box textAlign={"left"} width={"100%"}>
          <Typography variant={"body1"}>Postal Address</Typography>
          <Box sx={{ width: ["100%", "50%"] }}>
            <FormControl fullWidth disabled={isDisable}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={postalAddress}
                label="Postal Address"
                onChange={handlePostalChange}
              >
                {locations.map((name, i) => (
                  <MenuItem key={i} value={name}>{`${name.Name}, ${name.District}, ${name.State}`}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Box>
      <br />
      <Box display={"flex"}>
        <Box textAlign={"left"} width={"100%"}>
          <Typography variant={"body1"}>GST Number</Typography>
          <TextField onChange={GSTChange} sx={{ width: ["100%", "50%"] }} type="number" fullWidth disabled={isDisable} placeholder={"GST Number"} />
        </Box>
      </Box>
      <br />
      <Box display={"flex"}>
        <Box textAlign={"left"} width={"100%"}>
          <Typography variant={"body1"}>Upload GST Document</Typography>
          <Input onChange={handleFileChange} sx={{ width: ["100%", "50%"] }} type="file" fullWidth disabled={isDisable} placeholder={"GST Number"} />
        </Box>
      </Box>
      <br />
      <Box display={"flex"}>
        <Box textAlign={"left"} width={"100%"}>
          <Typography variant={"body1"}>PAN Card</Typography>
          <TextField sx={{ width: ["100%", "50%"] }} type="text" fullWidth onChange={PostalAddress} disabled={isDisable} placeholder={"PAN Card"} />
        </Box>
      </Box>
      <br />
      <Box display={"flex"}>
        <Box textAlign={"left"} width={"100%"}>
          <Typography variant={"body1"}>PAN Card Image</Typography>
          <Input sx={{ width: ["100%", "50%"] }} type="file" fullWidth onChange={handleFileChange1} disabled={isDisable} placeholder={"PAN Card"} />
        </Box>
      </Box>
      <br />
      <Button disabled={isDisable} variant={"contained"} sx={buttonStyle} onClick={() => {
        submit()
      }}>Save</Button>
    </Box>
    {/* <AccountSettingsFaq /> */}
  </>
}
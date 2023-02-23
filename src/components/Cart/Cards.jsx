import { Cancel } from "@mui/icons-material";
import {
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/Contexts";
import toIndianNumberingSystem from "../Features/RupeeConversion";
import { lb } from "../Static/theme";

export default function Cards({ data, index }) {
  const [Qty, setQty] = useState(1);
  let { isAuth,cart, setCart, userID } = useContext(AuthContext);
  const handleChange = (event) => {
    let temp = [...cart];
    temp[index].qty = event.target.value;
    setCart(temp);
    setQty(event.target.value);
    axios.patch(`http://localhost:3001/users/${userID}`, {
      cart: temp,
    });
    // axios.patch(`https://sedate-laced-chestnut.glitch.me/users/${userID}`, {
    //   cart: temp,
    // });
  };
  function removeItem() {
    let tempCart = [...cart];
    tempCart.splice(index, 1);
    setCart(tempCart);
    axios.patch(`http://localhost:3001/users/${userID}`, {
      cart: tempCart,
    });
    // axios.patch(`https://sedate-laced-chestnut.glitch.me/users/${userID}`, {
    //   cart: tempCart,
    // });
  }
  useEffect(() => {}, [cart]);

  return (
    <Box
      display={["block", "flex"]}
      p={["10px 20px", "10px 40px"]}
      justifyContent={"space-evenly"}
      width={["80%", "80%"]}
      m={["10% auto", "2% auto"]}
      sx={{
        boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
            borderRadius:"25px",
        "&:hover": {
          boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",
          borderRadius: "5px",
          transition:"0.2s ease-in"
        },
      }}
    >
      <Box width={"200px"} m={"auto"}>
        <img src={data.Img} width={"100%"} alt="cover" />
      </Box>
      <Box padding={"0 10px"} width={["95%", "70%"]} textAlign={"left"}>
        <p>
          <b>{data.name}</b>
        </p>
        <p>{toIndianNumberingSystem(data.price)}</p>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel>Qty: </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={data.qty}
            onChange={handleChange}
            autoWidth
            label="Quantity"
          >
            <MenuItem value={1}>
              <em>1</em>
            </MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
          </Select>
        </FormControl>
        <Divider />
        <br />
        <Button
        sx={{ backgroundColor: lb }} 
          onClick={() => {
            removeItem();
          }}
          variant={"contained"}
        >
          {" "}
          <Cancel /> Remove
        </Button>
      </Box>
    </Box>
  );
}

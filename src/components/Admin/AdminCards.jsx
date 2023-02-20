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
import { lb } from "../Static Data/theme";

export default function AdminCards({ data }) {
  let { userID, allSellerItems, setAllSellerItems } = useContext(AuthContext);

  function removeItem(data) {
    axios.delete(`https://sedate-laced-chestnut.glitch.me/allItems/${data.id}`)

    let newArr = allSellerItems.filter((el,i)=>{
       return el.id!==data.id
    })
    setAllSellerItems(newArr)
    axios.patch(`https://sedate-laced-chestnut.glitch.me/users/${userID}`, {
      sellerItems:newArr
    });
  }
//   useEffect(() => {}, []);

  return (
    <Box
      display={["block", "flex"]}
      p={["10px 20px", "10px 40px"]}
      justifyContent={"space-evenly"}
      width={["80%", "80%"]}
      m={["10% auto", "2% auto"]}
      position={"relative"}
      sx={{
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
        borderRadius: "25px",
        "&:hover": {
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          borderRadius: "5px",
          transition: "0.2s ease-in",
        },
      }}
    >
      <Box width={"200px"} m={"auto"}>
        <img src={data.Img} width={"100%"} alt="cover" />
      </Box>
      <Box
        bgcolor={lb}
        color={"white"}
        borderRadius={"5px"}
        p={"5px"}
        position={"absolute"}
        sx={{ top: 15, right: 15 }}
        variant={"span"}
      >
        <b>Category:</b> {data.category}
      </Box>
      <Box padding={"0 10px"} width={["95%", "70%"]} textAlign={"left"}>
        <p>
          <b>{data.name}</b>
        </p>
        <p>{(data.description).slice(0,70)}...</p>
        <p>{toIndianNumberingSystem(data.price)}</p>
        <Divider />
        <br />
        <Button
          sx={{ backgroundColor: lb }}
          onClick={() => {
            removeItem(data);
          }}
          variant={"contained"}
        >
          <Cancel /> Remove
        </Button>
      </Box>
    </Box>
  );
}

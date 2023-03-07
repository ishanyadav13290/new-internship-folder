import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../Context/Contexts";
import { lb } from "../../../Static/theme";
import ListingCards from "./ListingCards";

export default function YourListings() {
  let { pendingItems, setPendingItems, userID } = useContext(AuthContext);

  useEffect(()=>{
    (async()=>{
     let temp = await axios.get(`http://localhost:3001/users/${userID}`)
     setPendingItems(temp.data.pendingItems)
    })()
  },[])
  return (
    <Box minHeight={"100vh"} minWidth={"60vw"} textAlign={"left"}>
      <Box>
        <Typography variant="h4" color={lb} fontWeight={700}>
          {" "}
          Your Listings
        </Typography>
      </Box>
      <br />
      {pendingItems.reverse().map((el, i)=>{
        return <ListingCards
            key={i}
            name={el.name}
            status={el.status}
            price={el.price}
            img={el.Img}
          />
      })}
    </Box>
  );
}

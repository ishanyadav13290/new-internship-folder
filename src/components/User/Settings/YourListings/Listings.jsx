import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { AuthContext } from "../../../Context/Contexts";
import { lb } from "../../../Static/theme";
import ListingCards from "./ListingCards";

export default function YourListings() {
  let { pendingItems } = useContext(AuthContext);
  console.log(pendingItems)
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

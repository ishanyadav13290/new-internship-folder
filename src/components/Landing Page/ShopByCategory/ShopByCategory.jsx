import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { cardImgs, cardNames } from "../../Static Data/db";
import Cards from "../Categories Card/CategoriesCard";

export default function ShopByCategory(){
    return <>
        <Box textAlign={"left"} m={"0 5%"}>
        {" "}
        <Typography variant="h4" textAlign={"left"}>
          Shop By Category
        </Typography>
      </Box>

      <Box
        display={"flex"}
        gap="20px"
        padding={"20px 0"}
        width={"80%"}
        justifyContent={"flex-start"}
        m={"auto"}
        flexWrap={"wrap"}
      >
        {cardImgs.map((el, i) => {
          return <Cards key={i} name={cardNames[i]} image={el} fit={"cover"} />;
        })}
      </Box>
    </>
}
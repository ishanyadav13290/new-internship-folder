import { Box, Typography } from "@mui/material";
import { BrandNames, BrandValues } from "../../Static/db";
import { useRef } from "react";
import Cards from "../Categories Card/CategoriesCard";

export default function ShopByBrands(){
    return <span>
        <Box textAlign={"left"} m={"0 5%"}>
    {" "}
    <Typography variant="h4"  textAlign={"left"}>
      Shop By Brands
    </Typography>
  </Box>
  <Box
    display={"grid"}
    gridTemplateColumns={["repeat(2,1fr)","repeat(3,1fr)","repeat(4,1fr)","repeat(5,1fr)"]}
    gap="20px"
    padding={"20px 0"}
    width={"80%"}
    m={"auto"}
  >
    {BrandNames.map((el, i) => {
      return <Cards key={i} name={el} brand={BrandValues[i]}/>
    })}
    
  </Box>
    </span>

}
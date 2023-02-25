import { Box, Typography } from "@mui/material";
import { BrandNames } from "../../Static/db";
import { useRef } from "react";
import Cards from "../Categories Card/CategoriesCard";

export default function ShopByBrands(){
  const ref = useRef(null);
  const variants = { 
    hidden: { opacity: 0, x: 440 },
    visible: { opacity: 1, x: 0 },
};
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
      return <Cards key={i} name={el} brand={"kajaria"}/>
    })}
    
  </Box>
    </span>

}
import { Box, Typography } from "@mui/material";
import { BrandImgs } from "../../Static Data/db";
import Cards from "../Categories Card/CategoriesCard";

export default function ShopByBrands(){
    return <>
        <Box textAlign={"left"} m={"0 5%"}>
    {" "}
    <Typography variant="h4" textAlign={"left"}>
      Shop By Brands
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
    {BrandImgs.map((el, i) => {
      return <Cards key={i} image={el} fit={"contain"} />;
    })}
  </Box>
    </>

}
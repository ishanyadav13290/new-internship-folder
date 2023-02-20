import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { AuthContext } from "../Context/Contexts";
import { BrandImgs, BrandNames, cardImgs, cardNames } from "../Static Data/db";
import Carousel from "./Carousel/Carousel";
import Cards from "./Categories Card/CategoriesCard";
import OurPromise from "./OurPromises/OurPromises";
import ShopByBrands from "./ShopByBrands/ShopByBrands";
import ShopByCategory from "./ShopByCategory/ShopByCategory";
import WorkForUs from "./WorkWithUs/workWithUs";

export default function HomePage() {
  let { isAuth, userName } = useContext(AuthContext);
  return (
    <Box m={"2% 0"} height={"100%"}>
      <Typography variant={"h5"} fontWeight={600}>
        {isAuth ? `Welcome ${userName}` : null}
      </Typography>

      <Carousel />

      <ShopByCategory />

      <ShopByBrands />

      <br />
      <br />
      <WorkForUs />
      <br />
      <br />
      <br />

      <OurPromise />
    </Box>
  );
}

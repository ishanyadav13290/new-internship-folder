import { Box, Typography } from "@mui/material";
import { BrandImgs } from "../../Static/db";
import Cards from "../Categories Card/CategoriesCard";
import {motion, useInView} from "framer-motion"
import { useRef } from "react";

export default function ShopByBrands(){
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const variants = { 
    hidden: { opacity: 0, x: 440 },
    visible: { opacity: 1, x: 0 },
};
    return <motion.div style={{overflowX:"hidden"}} ref={ref} animate={isInView ? "visible" : "hidden"}
    variants={variants}
    transition={{ duration: 0.75 }}>
    <span style={{
      transform: isInView ? "none" : "translateX(-200px)",
      opacity: isInView ? 1 : 0,
      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
    }}>
        <Box textAlign={"left"} m={"0 5%"}>
    {" "}
    <Typography variant="h4"  textAlign={"left"}>
      Shop By Brands
    </Typography>
  </Box>
  <Box
    display={"grid"}
    gridTemplateColumns={["repeat(3,1fr)","repeat(5,1fr)"]}
    gap="20px"
    padding={"20px 0"}
    width={"80%"}
    m={"auto"}
  >
    {BrandImgs.map((el, i) => {
      return <Cards key={i} image={el} fit={"contain"} />;
    })}
  </Box>
    </span>
    </motion.div>

}
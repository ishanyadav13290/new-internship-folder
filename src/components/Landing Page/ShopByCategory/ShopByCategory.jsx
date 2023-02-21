import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { cardImgs, cardNames } from "../../Static Data/db";
import Cards from "../Categories Card/CategoriesCard";
import {motion, useInView} from "framer-motion"
import { useRef } from "react";

export default function ShopByCategory(){
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const variants = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0 },
};

    return <motion.div ref={ref} animate={isInView ? "visible" : "hidden"}
    variants={variants}
    transition={{ duration: 0.75 }}>
      <span >
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
      </span>
    </motion.div>
}
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { cardImgs, cardNames } from "../../Static/db";
import Cards from "../Categories Card/CategoriesCard";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { routeNames } from "../../Static/db";

export default function ShopByCategory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      style={{ overflowX: "hidden" }}
      ref={ref}
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.75 }}
    >
      <span>
        <Box textAlign={"left"} m={"0 5%"}>
          {" "}
          <Typography variant="h4" textAlign={"left"}>
            Shop By Category
          </Typography>
        </Box>

        <Box
          display={"grid"}
          gridTemplateColumns={["repeat(2,1fr)","repeat(3,1fr)","repeat(4,1fr)", "repeat(5,1fr)"]}
          gap="20px"
          padding={"20px 0"}
          width={"80%"}
          m={"auto"}
        >
          {cardImgs.map((el, i) => {
            return (
              <Cards key={i} name={cardNames[i]} category={routeNames[i]} image={el} fit={"cover"} />
            );
          })}
        </Box>
      </span>
    </motion.div>
  );
}

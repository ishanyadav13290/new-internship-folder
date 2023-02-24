import React from "react";
import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import s from "./customerStories.module.css";
import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Star } from "@mui/icons-material";

/**
 * This is an example of animating shared layouts in Framer Motion 2.
 *
 * The open state of each panel is contained locally to that component. Wrapping
 * them all in the same AnimateSharedLayout component allows them all to animate
 * in response to state changes that affect each other's layout.
 *
 * Try removing AnimateSharedLayout to see how that affects the animation.
 */

export default function CustomerStories({items}) {
  return (
    <AnimateSharedLayout>
      <motion.ul className={s.uls} style={{width:"400px"}} layout initial={{ borderRadius: 25 }}>
        {items.map((item, i) => (
          <Item key={i} data={item} />
        ))}
      </motion.ul>
    </AnimateSharedLayout>
  );
}

function Item({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li className={s.lis}  layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
      <div style={{ display: "flex", justifyContent:"center", alignItems:"center" }}>
        <motion.div className={s.avatar} layout style={{objectFit:"contain"}}>
          {/* <Avatar sx={{bgcolor:"white",color:"rgb(72, 98, 208)"}} /> */}
          {data.img?<img src={data.img} alt="avatar" style={{objectFit:"cover", width:"100%",height:"100%"}} />:<Avatar sx={{bgcolor:"white",color:"rgb(72, 98, 208)"}} />}
          {/* <img src={data.img} alt="avatar" style={{objectFit:"contain", width:"100%",height:"100%"}} /> */}
        </motion.div>
          <Typography display={isOpen?"none":"initial"} color={"white"} m={"auto"} textAlign={"left"} variant="body1" fontWeight={700}>{data.name}</Typography>
      </div>
      <AnimatePresence>{isOpen && <Content data={data} />}</AnimatePresence>
    </motion.li>
  );
}

function Content({ data }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Typography variant="h6" color={"white"} textAlign={"left"}>{data.name}</Typography>
      <Typography variant="body2" color={"white"} sx={{fontSize:"10px"}} textAlign={"left"}>{data.work}</Typography>
      <br />
      <Typography variant="body2" color={"white"} sx={{fontSize:"14px"}} textAlign={"left"}>{data.review}</Typography>
      <Box display={"flex"}><Star sx={{color:"gold"}} /><Star sx={{color:"gold"}} /><Star sx={{color:"gold"}} /><Star sx={{color:"gold"}} /><Star sx={{color:"gold"}} /></Box>
    </motion.div>
  );
}

// const items = [0, 1, 2];

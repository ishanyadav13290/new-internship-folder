import { Skeleton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import {motion, useInView} from "framer-motion"
import React from "react";

export default function SkeletonCard(){
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });
  const variants = {
    hidden: { opacity: 0, x: 150 },
    visible: { opacity: 1, x: 0 },
};
    return <motion.div ref={ref} animate={isInView ? "visible" : "hidden"}
variants={variants}
transition={{ duration: 0.75 }}><Box
    minHeight={"200px"}
    height={"fit-content"}
    boxShadow={
      "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
    }
  >
    <Box height={"200px"} overflow={"hidden"}>
      <Skeleton sx={{ height: "100%", width: "90%", margin:"auto" }} animation={"wave"} />
    </Box>
    <Box
      height={"60%"}
      display={"flex"}
      gap={"10px"}
      flexDirection={"column"}
      padding={"20px"}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box width={"80%"}>
        <Skeleton animation={"wave"} width={"100%"} />
          <Typography
            fontWeight={700}
            fontSize={"18px"}
            textAlign={"left"}
            variant="body1"
          >
            <Skeleton animation={"wave"} width={"100%"} />
          </Typography>
          <Typography color={"grey"} textAlign={"left"} variant="body2">
          <Skeleton animation={"wave"} width={"100%"} />
          </Typography>
        </Box>
        <Box width={"20%"}>
        <Skeleton sx={{ height: "50px", width: "90%", ml:"auto" }} animation={"wave"} />
          <Box display={"flex"}>
            <Skeleton sx={{ height: "10px", width: "90%", ml:"auto" }} />
          </Box>
        </Box>
      </Box>
      <Box width={"100%"}>
        <Skeleton animation={"wave"} height={"70px"} />
      </Box>
    </Box>
  </Box></motion.div>
}
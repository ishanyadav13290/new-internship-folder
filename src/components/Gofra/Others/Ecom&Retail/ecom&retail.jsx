import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import { LordGrowth } from "../../../Features/LordIcons";
import { BrandImgs } from "../../../Static/db";
import {motion} from "framer-motion"
import WorkForUs from "../../../Landing Page/WorkWithUs/workWithUs";
import BgRotateCard from "../SharedComponent/bgRotateCard";
import { db, lb } from "../../../Static/theme";

export default function EcomRetail() {
  return (
    <Box minHeight={"100vh"} m={"2% 0"}>
      <Box
        sx={{
          p: "0 30px",
          textAlign: "left",
          borderRadius: "20px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          width: ["90vw", "90vw", "40%", "40%"],
          height:"fit-content",
          m: ["auto", "auto", "0 0 0 10%", "0 0 0 10%"],
        }}
      >
      <motion.div
      initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.8 }}
      >
        <Box>
          <Box>
            <br />
            <Typography color={lb} fontWeight={700} variant="h5">
              E-Commerce & Retail
            </Typography>
            <br />
          </Box>
        </Box>
        <Box >
          <Typography variant="h4" fontWeight={700}>
              Wish To Have Complete Visibility On Your Supply Chain?
            </Typography>
          <Box display={["block","block","flex","flex"]} justifyContent={"space-between"}>
            <Box>                
            <br />
            <LordGrowth />
            <br />
            <Button variant="contained" sx={{m:"auto", display:["block","flex"],bgcolor:lb,"&:hover": {
              bgcolor: db,
            }}}>
              <a style={{ all: "unset" }} href={"#contactus"}>
                Contact Us!
              </a>
            </Button>
            </Box>
            <Box m={"auto"}>
            <Typography textAlign={"center"} fontWeight={700} variant={"body1"}>
              Companies We Work With!
            </Typography>
            <Box display={"grid"} gridTemplateColumns={"repeat(2,1fr)"}>
            {BrandImgs.map((el,i)=>{
                if (i>=4) return null
                return <img style={{width:["150px"]}} src={el} key={i} alt={"i"} />
            })}
            </Box>
          </Box>
          </Box>
        </Box>
        <br />
        </motion.div>
      </Box>
      <br /><Box>
        <Typography variant="h4" color={lb} fontWeight={700}>Products Under Home & Personal Care</Typography>
        <br />
        <Box display={"flex"} justifyContent={"space-evenly"} flexWrap={"wrap"}>
        <BgRotateCard img={"https://cdn.pixabay.com/photo/2012/04/24/23/19/recycling-41078_960_720.png"} name="Bins" />
        <BgRotateCard img={"https://cdn.pixabay.com/photo/2014/04/03/11/07/crate-311771_960_720.png"} name="Crates" />
        <BgRotateCard img={"https://cdn.pixabay.com/photo/2014/03/24/17/06/box-295029_960_720.png"} name="Cartons" />
        </Box>
        <br />
        <br />
        <br />
      </Box>
      <WorkForUs id={"contactus"} />
    </Box>
  );
}

import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import {motion} from "framer-motion"
import { LordHome } from "../../../Features/LordIcons";
import WorkForUs from "../../../Landing Page/WorkWithUs/workWithUs";
import { BrandImgs } from "../../../Static/db";
import { db, lb } from "../../../Static/theme";
import BgRotateCard from "../SharedComponent/bgRotateCard";

export default function HomeCare(){
    return <Box minHeight={"100vh"}>
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
              Home and Personal Care
            </Typography>
            <br />
          </Box>
        </Box>
        <Box >
          <Typography variant="h4" color={db} fontWeight={700}>
              Get High Quality Products from Our Reliable Vendors!
            </Typography>
          <Box display={["block","block","flex","flex"]} justifyContent={"space-between"}>
            <Box>                
            <br />
            <LordHome />
            <br />
            <Button variant="contained" sx={{m:"auto", display:["block","flex"], bgcolor:lb,"&:hover": {
              bgcolor: db,
            }}}>
              <a style={{ all: "unset" }} href={"#contactus"}>
                Contact Us!
              </a>
            </Button>
            </Box>
            <Box m={"auto"}>
            <Typography textAlign={"center"} fontWeight={700} variant={"h6"}>
              Brands We Work With!
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
      <br />
      <Box>
        <Typography variant="h4" color={lb} fontWeight={700}>Products Under Home & Personal Care</Typography>
        <br />
        <Box display={"flex"} justifyContent={"space-evenly"} flexWrap={"wrap"}>
        <BgRotateCard img={"https://cdn.pixabay.com/photo/2021/03/26/11/57/recycling-symbol-6125728_960_720.jpg"} name="Eco Friendly Bags" />
        <BgRotateCard img={"https://cdn.pixabay.com/photo/2016/07/23/12/54/box-1536798_960_720.png"} name="Cardboard Boxes" />
        <BgRotateCard img={"https://cdn.pixabay.com/photo/2021/03/26/11/57/recycling-symbol-6125728_960_720.jpg"} name="Eco Friendly Bags" />
        </Box>
        <br />
        <br />
        <br />
      </Box>
      <br />
      <WorkForUs />
      <br />
      <br />
    </Box>
}
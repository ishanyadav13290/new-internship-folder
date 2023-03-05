import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import {motion} from "framer-motion"
import { lb } from "../../../Static/theme";

export default function OurStory() {
  return (
    <>
    <Typography color={lb} fontWeight={700} variant="h3">About Us</Typography>
    <br />
      <motion.div
      initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.8 }}
      >
      <Box
        display={["block", "block", "flex", "flex"]}
        width={"60%"}
        m={"auto"}
      >
        <Box width={"70%"}>
          <Typography variant="h5" color={lb} fontWeight={700}>
            Our Mission
          </Typography>
          <br />
          <Typography variant="body2" textAlign={"left"} width={["80%", "70%"]}>
            There's this notion that to grow a business, you have to be
            ruthless. But we know there's a better way to grow. One where what's
            good for the bottom line is also good for customers. We believe
            businesses can grow with a conscience, and succeed with a soul — and
            that they can do it with inbound. That's why we've created an
            ecosystem uniting software, education, and community to help
            businesses grow better every day.
          </Typography>
        </Box>
        <Box width={"30%"}>
          <img
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "33% 67% 26% 74% / 17% 20% 80% 83% ",
            }}
            src="https://cdn.pixabay.com/photo/2017/10/13/12/29/hands-2847508_960_720.jpg"
            alt="help"
          />
        </Box>
      </Box>
      </motion.div>
      <br />
      <br />
      <br />
      <motion.div initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.8 }}>
      <Box
        display={["block", "block", "flex", "flex"]}
        width={"60%"}
        m={"auto"}
      >
        <Box width={"30%"}>
          <img
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "68% 32% 66% 34% / 22% 68% 32% 78% ",
            }}
            src="https://cdn.pixabay.com/photo/2022/05/10/20/52/calligraphy-7188024_960_720.jpg"
            alt="help"
          />
        </Box>
        <Box width={"70%"}>
          <Typography color={lb} variant="h5" fontWeight={700}>
            Our Story
          </Typography>
          <br />
          <Typography
            variant="body2"
            textAlign={"left"}
            width={["80%", "70%"]}
            ml={"auto"}
          >
            There's this notion that to grow a business, you have to be
            ruthless. But we know there's a better way to grow. One where what's
            good for the bottom line is also good for customers. We believe
            businesses can grow with a conscience, and succeed with a soul — and
            that they can do it with inbound. That's why we've created an
            ecosystem uniting software, education, and community to help
            businesses grow better every day.
          </Typography>
        </Box>
      </Box>
      </motion.div>
    </>
  );
}

import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { lb } from "../../Static Data/theme";
import {motion} from "framer-motion"

export default function PromiseCard({ logo, title }) {
  // return (
  //   <Box
  //     display={"flex"}
  //     borderRadius={"20px"}
  //     height={["150px"]}
  //     minWidth={["80%", "50%", "20%"]}
  //     m={["0 5px", "0 5px", "0 auto"]}
  //     flexDirection={"column"}
  //     justifyContent={"space-evenly"}
  //     bgcolor={lb}
  //   >
  //     <Box width={"100%"}>{logo}</Box>
  //     <Box width={"100%"}>
  //       <Typography variant="h6" color={"white"} fontWeight={700}>
  //         {title}
  //       </Typography>
  //     </Box>
  //   </Box>
  // );
  return <Box
      display={"flex"}
      borderRadius={"20px"}
      height={["150px"]}
      minWidth={["80%", "50%", "20%"]}
      m={["0 5px", "0 5px", "0 auto"]}
      flexDirection={"column"}
      justifyContent={"space-evenly"}
      bgcolor={lb}
    >
    <motion.div
    style={{height:"50%"}}
  initial={{scale: 1.2, rotate: 0 }}
  whileHover={{ scale: 0.8, rotate: 360, borderRadius: "100%" }}
  whileTap={{ scale: 0.8, rotate: 0,  }}
  
>
      <Box width={"100%"}>{logo}</Box>
      <Box width={"100%"}>
        <Typography variant="h6" color={"white"} fontWeight={700}>
          {title}
        </Typography>
      </Box>
      </motion.div>
    </Box>
}

import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function OurGoal() {
  return (
    <Box position={"relative"} minHeight={["350px","50vh"]} width={["100%","50%"]} m={"auto"}>
    <img src="https://cdn.pixabay.com/photo/2013/04/12/06/03/darts-102919_960_720.jpg" alt="bg" style={{width:"100%", position:"absolute",left:"0", height:"100%",filter:"grayscale(100%)"}} />
    {/* <img src="https://cdn.pixabay.com/photo/2018/02/02/17/14/triangle-3125882_960_720.jpg" alt="bg" style={{width:"100%", position:"absolute",left:"0", height:"100%",filter:"grayscale(100%)"}} /> */}

    <Box width={"100%"} height={"100%"} color={"white"} position={"absolute"} border={"1px solid white"}>
    <Typography variant="h3" fontWeight={700}>Our Goal</Typography>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    
    <br />
    <Typography variant="h4"  border={"1px solid white"} fontWeight={700} >Quality Service, Reasonable Price</Typography>
    </Box>

    </Box>
  );
}

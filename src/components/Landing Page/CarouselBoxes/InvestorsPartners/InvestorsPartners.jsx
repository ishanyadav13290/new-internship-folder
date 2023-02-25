import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { BrandImgs } from "../../../Static/db";

export default function Investors() {
  return (
    <Box position={"relative"} minHeight={["auto","50vh"]} width={["100%","50%"]} m={"auto"} p={"20px"} >
    <img src="https://cdn.pixabay.com/photo/2018/03/21/16/18/investment-3247252_960_720.jpg" alt="bg" style={{width:"100%", position:"absolute",left:"0", height:"100%", filter:"grayscale(100%)"}} />

    <Box width={"100%"} height={"100%"} color={"black"} position={"absolute"}>
    <br />
    <Typography textAlign={"left"} fontWeight={700} color={"rgb(41, 42, 45)"} variant={"body1"}>We're Stronger With....</Typography>
    <br />
    <Typography textAlign={"left"} variant="h3" fontWeight={700}>Our Investors</Typography>
    <br />
    <br />
    <br />
    <Box display={"flex"} justifyContent={"space-evenly"}>
    {BrandImgs.map((el,i)=>{
                if (i>=4) return null
                return <img style={{width:["150px"]}} src={el} key={i} alt={"i"} />
            })}
    </Box>
    <br />
    <br />
    <br />
    </Box>

    </Box>
  );
}

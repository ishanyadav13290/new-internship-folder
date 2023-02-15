import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { AuthContext } from "../Context/Contexts";
import { cardImgs, cardNames } from "../Static Data/db";
import Carousel from "./Carousel/Carousel";
import Cards from "./Categories Card/CategoriesCard";

export default function HomePage(){
    let {isAuth,userName} = useContext(AuthContext)
    return <Box m={"2% 0"} height={"100%"}>
    
    <Typography variant={"h5"} fontWeight={600}>{isAuth?`Welcome ${userName}`:null}</Typography>

    <Carousel />

        <Box textAlign={"left"} m={"0 5%"}> <Typography variant="h4" textAlign={"left"}>Shop By Category</Typography></Box>
       
        <Box display={"flex"} gap="20px" padding={"20px 0"} width={"80%"} justifyContent={"flex-start"} m={"auto"} flexWrap={"wrap"}>
        {cardImgs.map((el,i)=>{
            return <Cards key ={i} name={cardNames[i]} image={el} />
        })}
       
        </Box>
    </Box>
}
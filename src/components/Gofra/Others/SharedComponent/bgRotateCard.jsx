import { Box, Typography } from "@mui/material"
import s from "./bgRotateCard.module.css"

export default function BgRotateCard({name,img}){
    return <Box className={s.container}>
    <div>
    <img className={s.content}  src={img} alt="bgrotate" />
    </div>
    <Typography fontWeight={600} variant={"h5"}>{name}</Typography>
  </Box>
}
import { Typography } from "@mui/material"
import s from "./HoverTexts.module.css"
export function CurveUnderline({content, variant, sx}){
    return <Typography className={s.curve} sx={sx} variant={variant}>{content}</Typography>
}

export function WaveLine({content, variant, sx}){
    return <Typography className={s.linewave} sx={sx} variant={variant}>{content}</Typography>
}
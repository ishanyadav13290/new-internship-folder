import { Box } from "@mui/system";
import s from "./WaveSection.module.css"

export default function WaveSection({content}){
    return <Box sx={{position:"relative"}} >
    <Box width={"70%"} position={"relative"} m={"auto"} zIndex={1} bgcolor={"transparent"}>
    {content}
    </Box>
        <Box className={s.ocean}>
    <Box className={s.wave}>
    </Box>
    <Box className={s.wave}>
    </Box>
    </Box>
    
    </Box>
}
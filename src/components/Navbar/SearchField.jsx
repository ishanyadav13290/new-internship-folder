import { TextField } from "@mui/material";

export default function SearchField(){
    return <TextField className="filled-basic"  sx={{width:["90%","100%"],border:"none",bgcolor:"white",borderRadius:"5px"}} size={"small"} label="Search Products" variant="filled" />
}
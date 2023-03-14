import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";

export default function AllSellers(){
    const [allUsers, setAllUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(()=>{
        (async()=>{
            setIsLoading(true)
            let temp = await axios.get(`http://localhost:3001/users?isSeller=true`)
            setAllUsers(temp.data)
            console.log(temp.data)
            setIsLoading(false)
        })()
    },[])
    return <Box>
        {isLoading?<Typography>Loading....Please Wait</Typography>:
        allUsers.map((el,i)=>{
           return <Box key={i}>
           <Typography>{el.email}</Typography>
           <Typography>{el.phone}</Typography>
           </Box>
        })}
    </Box>
}
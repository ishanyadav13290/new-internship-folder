import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/Contexts";
import AdminApprovalCards from "./Components/AdminApprovalCards/AdminApprovalCards";
import NoItemsToVerify from "./Components/AdminApprovalCards/NoItems";

export default function Admin(){
    let {verificationItems, setVerificationItems} = useContext(AuthContext)
    let [isLoading, setIsLoading] = useState(false)
    useEffect(()=>{
        (async ()=>{
            setIsLoading(true)
            let temp=await axios.get("http://localhost:3001/verifyItems")
            setVerificationItems(temp.data.data)
            setIsLoading(false)
        })()
    },[])
    return <Box minHeight={"100vh"}>
    { isLoading? <Typography variant={"h3"}>Loading...</Typography>: verificationItems.length===0?<NoItemsToVerify />:verificationItems.map((el,i)=>{
        return <AdminApprovalCards key={i} data={el} />
    })}
    </Box>
}
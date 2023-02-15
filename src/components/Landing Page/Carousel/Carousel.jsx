import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";

let images=["https://www.hippostores.com/_next/image?url=https%3A%2F%2Fd2k503pumj0lc5.cloudfront.net%2Fdalmia%2Fdisk%3Fobject_token%3DeyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiI3Z2Z4b2dsMTkzOHdiNXl0d2c5cHZmaTcxemFkIiwiZmlsZW5hbWUiOiJIaXBwbyBzdG9yZXMgb2ZmZXJzIHBseXdvb2Qud2VicCIsImNvbnRlbnRfdHlwZSI6ImltYWdlL3dlYnAiLCJibG9iX2tleSI6IjdnZnhvZ2wxOTM4d2I1eXR3ZzlwdmZpNzF6YWQiLCJjb252ZXJ0X3dlYnAiOnRydWV9.SdLlD0W663g_8RtHe89-EQOKUJRv-oYR6BR4oMctiMA&w=1920&q=75",
"https://www.hippostores.com/_next/image?url=https%3A%2F%2Fd2k503pumj0lc5.cloudfront.net%2Fdalmia%2Fdisk%3Fobject_token%3DeyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiI0Mm41ZHV4NDF1NHdreWs0YzhqZmJqMjI4NHVzIiwiZmlsZW5hbWUiOiJNb2R1bGFyLWtpdGNoZW4taGlwcG8tc3RvcmVzLndlYnAiLCJjb250ZW50X3R5cGUiOiJpbWFnZS93ZWJwIiwiYmxvYl9rZXkiOiI0Mm41ZHV4NDF1NHdreWs0YzhqZmJqMjI4NHVzIiwiY29udmVydF93ZWJwIjp0cnVlfQ.1z2U_mEth26vcSwcZJ9EBhQ8qhICAE_rOawjEZxHLNg&w=1920&q=75",
"https://www.hippostores.com/_next/image?url=https%3A%2F%2Fd2k503pumj0lc5.cloudfront.net%2Fdalmia%2Fdisk%3Fobject_token%3DeyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJvcnZsMWFqcDA4bngycDJ4enZtM2UyMmFyZTFtIiwiZmlsZW5hbWUiOiJIaXBwbyBzdG9yZXMgb2ZmZXJzIHRpbGVzLndlYnAiLCJjb250ZW50X3R5cGUiOiJpbWFnZS93ZWJwIiwiYmxvYl9rZXkiOiJvcnZsMWFqcDA4bngycDJ4enZtM2UyMmFyZTFtIiwiY29udmVydF93ZWJwIjp0cnVlfQ.QQIeKGccpo3582BC4aAurUwFzQk6paF6m2_jWDZtqwo&w=1920&q=75",
"https://www.hippostores.com/_next/image?url=https%3A%2F%2Fd2k503pumj0lc5.cloudfront.net%2Fdalmia%2Fdisk%3Fobject_token%3DeyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJmMnJjOWU5NTlkamdtNnUzNDdrbXJqYzUxcnhkIiwiZmlsZW5hbWUiOiJIaXBwbyBzdG9yZXMgb2ZmZXJzIHNhbml0YXJ5IGJhdGgud2VicCIsImNvbnRlbnRfdHlwZSI6ImltYWdlL3dlYnAiLCJibG9iX2tleSI6ImYycmM5ZTk1OWRqZ202dTM0N2ttcmpjNTFyeGQiLCJjb252ZXJ0X3dlYnAiOnRydWV9.eEFaHdrYD_qR_Qs7UfrNzNZe8VS82GgDOTU1ipdeVsk&w=1920&q=75",
"https://www.hippostores.com/_next/image?url=https%3A%2F%2Fd2k503pumj0lc5.cloudfront.net%2Fdalmia%2Fdisk%3Fobject_token%3DeyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiIwdjd6dmFlMGo5d3hhcjZsaXVsaG1va2g3b3Y1IiwiZmlsZW5hbWUiOiJNb2Rlcm4tQmF0aHJvb20taGlwcG8tc3RvcmVzLndlYnAiLCJjb250ZW50X3R5cGUiOiJpbWFnZS93ZWJwIiwiYmxvYl9rZXkiOiIwdjd6dmFlMGo5d3hhcjZsaXVsaG1va2g3b3Y1IiwiY29udmVydF93ZWJwIjp0cnVlfQ.MiXcE5FvKOT6uncPP9LZ9rWRAAfR7NFbhWAhFkBMSn0&w=1920&q=75"]

export default function Carousel(){
    let styles = {
        position:"absolute",
        top:"50%",
        display:"flex",
        left:"10px",
        backgroundColor:"rgba(253, 253, 253,0.8)"
    }
    let box
    let [count,setCount]= useState(0)
    useEffect(()=>{
        let box1 = document.querySelector(".container");
        box=box1
    },[count])
    const btnpressprev = ()=>{
        count<=0?setCount(0):setCount(prev=>prev-1)
        let width = box.clientWidth ;
        box.scrollLeft = box.scrollLeft - width
    }

    const btnpressnext =()=>{
        count>=4?setCount(4):setCount(prev=>prev+1)
        let width = box.clientWidth 
        box.scrollLeft = box.scrollLeft + width 
    }
    
    return <Box className={"carousel"} position={"relative"} overflow={"hidden"} m={"2% 0"}>
        <Button disabled={count==0?true:false} onClick={btnpressprev} sx={styles} ><ArrowLeft /></Button>
        <Button disabled={count==4?true:false} onClick={btnpressnext} sx={{right:"10px", backgroundColor:"rgba(253, 253, 253,0.8)",position:"absolute",top:"50%"}} ><ArrowRight /></Button>
        <Box className={"container"} display={"flex"} sx={{overflowX:"hidden", scrollBehavior:"smooth"}}>
    {images.map((el,i)=>{
        return <Box key={i} maxHeight={"100%"} minWidth={"100%"} m={"auto"} overflow="hidden">
            <img src={el} alt={"img"+i} height={"100%"}  width={"100%"} />
        </Box>
    })}
        </Box>
        <Button disabled={count==0?true:false} onClick={btnpressprev}><ArrowLeft /></Button>
    <Button disabled={count==4?true:false} onClick={btnpressnext}><ArrowRight /></Button>
    </Box>
}





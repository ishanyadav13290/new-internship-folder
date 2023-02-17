import { SearchOutlined } from "@mui/icons-material";
import { IconButton, Paper, } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect, useRef, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import { AuthContext } from "../Context/Contexts";

export default function SearchField(){
    let {isInputSearch, setIsInputSearch} = useContext(AuthContext)
    let [searchQuery, setSearchQuery] = useState("")
    let reference = useRef("")
    let searchButton = useRef(null)
    let [searchParams, setSearchParams] = useSearchParams("")

    function Search(e){
        // console.log(searchQuery)
        setSearchParams({query:searchQuery})
        setIsInputSearch(true)
    }

    useEffect(()=>{
        console.log(searchParams.get("query"))
    },[searchParams])
    
    // return <Box display={"flex"} width={"100%"} alignItems={"center"}>
    //     <TextField ref={reference} className="filled-basic"  sx={{width:["90%","100%"],border:"none",bgcolor:"white",borderRadius:"5px"}} size={"small"} label="Search Products" variant="filled" onInput={(e)=>{
    //     setSearchQuery(e.target.value)
        
    // }} onKeyDown={(e)=>{
    //     if(e.key=="Enter"){
    //         Search()
    //         e.target.value=""
    //     }
    // }} />
    // <SearchOutlined sx={{fontSize:"2rem", color:"white"}} onClick={()=>{
    //     Search()
    // }} />
    // </Box>
    return <Paper
    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400}}
  >
    <input
    style={{height:"100%",width:"100%", border:"none"}}
    ref={reference}
      sx={{ ml: 1, flex: 1 }}
      placeholder="Search"
    //   inputProps={{ 'aria-label': 'Search' }}
      onInput={(e)=>{
        setSearchQuery(e.target.value)
        
    }} onKeyDown={(e)=>{
        if(e.key=="Enter"){
            Search()
            searchButton.current.click()
            e.target.value=""
        }
    }}
    />
    <NavLink to={`/search/${searchQuery}` }>
    <IconButton ref={searchButton} onClick={()=>{
        Search()
        reference.current.value=""
    }} type="button" sx={{ p: '10px' }} aria-label="search">
      <SearchOutlined  />
    </IconButton>
    </NavLink>
  </Paper>
}
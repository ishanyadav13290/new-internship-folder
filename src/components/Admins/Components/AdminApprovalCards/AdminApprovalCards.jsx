import { Cancel, Check } from "@mui/icons-material";
import { Button, Divider } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { func } from "prop-types";
import { async } from "q";
import { useContext } from "react";
import { AuthContext } from "../../../Context/Contexts";
import toIndianNumberingSystem from "../../../Features/RupeeConversion";
import { lb } from "../../../Static/theme";

export default function AdminApprovalCards({ data }) {
    let {verificationItems, setVerificationItems}= useContext(AuthContext)
    let sellerID = data.sellerID

    // to delete items from verifyItems endpoint
    function Delete(){
        axios.delete(`http://localhost:3001/verifyItems/${data._id}`);
        let newArr = verificationItems.filter((el,i)=>{
            return el._id!==data._id
         })
         setVerificationItems(newArr)
    }
   async function Approve(){

    let temp = await axios.get(`http://localhost:3001/users/${data.sellerID}`)
        temp = temp.data
        let {pendingItems, sellerItems} = temp
    let obj
    for (let i = 0; i < pendingItems.length; i++) {
        if(pendingItems[i]._id == data._id){
            pendingItems[i].status = "approved"
            obj=pendingItems[i]
            break;
        }
        
    }
    axios.patch(`http://localhost:3001/users/${data.sellerID}`,{
        sellerItems:[...sellerItems,obj]
    })
    axios.patch(`http://localhost:3001/users/${data.sellerID}`,{
        pendingItems
    })
    axios.post(`http://localhost:3001/allItems`,data)
    Delete()
    }
    async function Reject(){
        let temp = await axios.get(`http://localhost:3001/users/${data.sellerID}`)
        temp = temp.data
        let {pendingItems} = temp
    let obj
    for (let i = 0; i < pendingItems.length; i++) {
        if(pendingItems[i]._id == data._id){
            pendingItems[i].status = "rejected"
            obj=pendingItems[i]
            break;
        }
        
    }
    axios.patch(`http://localhost:3001/users/${data.sellerID}`,{
        pendingItems
    })
        Delete()
    }
  return (
    <Box
      display={["block", "flex"]}
      p={["10px 20px", "10px 40px"]}
      justifyContent={"space-evenly"}
      width={["80%", "80%"]}
      m={["10% auto", "2% auto"]}
      position={"relative"}
      sx={{
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
        borderRadius: "25px",
        "&:hover": {
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          borderRadius: "5px",
          transition: "0.2s ease-in",
        },
      }}
    >
      <Box width={"200px"} m={"auto"}>
        <img src={data.Img} width={"100%"} alt={data.name} />
      </Box>
      <Box
        bgcolor={lb}
        color={"white"}
        borderRadius={"5px"}
        p={"5px"}
        position={"absolute"}
        sx={{ top: 15, right: 15 }}
        variant={"span"}
      >
        <b>Category:</b> {data.category}
      </Box>
      <Box padding={"0 10px"} width={["95%", "70%"]} textAlign={"left"}>
        <p>
          <b>{data.name}</b>
        </p>
        <p>{data.description.slice(0, 70)}...</p>
        <p>{toIndianNumberingSystem(data.price)}</p>
        <Divider />
        <br />
        <Box display={"flex"} width={"40%"} justifyContent={"space-between"}>
          <Button sx={{ backgroundColor: lb }} variant={"contained"}
          onClick={Reject}
          >
            <Cancel /> Reject
          </Button>
          <Button sx={{ backgroundColor: lb }} variant={"contained"}
          onClick={Approve}
          >
            <Check /> Approve
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

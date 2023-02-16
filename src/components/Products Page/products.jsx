import { Box } from "@mui/system";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Context/Contexts";
import MediaCard from "./ProductsCards/ProductsCards";

export default function Products() {
  let { allSellerItems, setAllSellerItems } = useContext(AuthContext);
  let [isLoading,setIsLoading] = useState(false)
  let {category} = useParams()
  // reinforcedSteel
  // iBeam
  // Angles
  // diPipes
  // redOxidePrimar
  // plyboard
  // nails
  // hdpePipes
  // wires&Cables
  useEffect(() => {
    (async () => {
      setIsLoading(true)
      let temp = category=="newarrivals"? await axios.get(
        "https://sedate-laced-chestnut.glitch.me/allItems"
      ): await axios.get(
        `https://sedate-laced-chestnut.glitch.me/allItems?&category=${category}`
      )
      setAllSellerItems(temp.data);
      setIsLoading(false)
    })();
  }, [category]);
  return (
    <Box minHeight={"100vh"} mt={["30%", "20%", "10%"]} display={["block","block","flex"]} flexWrap={"wrap"}>
      {allSellerItems.map((el, i) => {
        return (
          <Box key={i} sx={{textDecoration:"none",color:"black", display:"flex",margin:"1% auto",justifyContent:"center"}} >
          <MediaCard el={el} loading={isLoading} />
          </Box>
        );
      })}
    </Box>
  );
}

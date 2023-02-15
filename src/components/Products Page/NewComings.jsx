import { Box } from "@mui/system";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/Contexts";
import MediaCard from "./ProductsCards/ProductsCards";

export default function NewComings() {
  let { allSellerItems, setAllSellerItems } = useContext(AuthContext);
  let [isLoading,setIsLoading] = useState(false)
  useEffect(() => {
    (async () => {
      setIsLoading(true)
      let temp = await axios.get(
        "https://sedate-laced-chestnut.glitch.me/allItems"
      );
      setAllSellerItems(temp.data);
      setIsLoading(false)
    })();
  }, []);
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

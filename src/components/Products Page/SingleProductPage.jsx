import {
  Expand,
  ExpandLess,
  ExpandMore,
  ExpandMoreSharp,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Skeleton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Context/Contexts";
import toIndianNumberingSystem from "../Features/RupeeConversion";
import useAddToCart from "./addToCartFunction";

export default function SingleProductPage() {
  let { id } = useParams();
  let [data, setData] = useState({});
  let { userID, cart, setCart } = useContext(AuthContext);

  let temp = useAddToCart();

  // accordion
  const [expanded, setExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      let temp = await axios.get(
        `https://sedate-laced-chestnut.glitch.me/allItems/${id}`
      );
      setIsLoading(false);
      setData(temp.data);
    })();
  }, []);
  return (
    <Box minHeight={"100vh"} mt={["30%", "20%", "10%"]}>
      <Box
        display={["block", "block", "flex"]}
        justifyContent="space-between"
        alignItems={"flex-start"}
        minHeight={"100%"}
        p={["0", "40px"]}
      >
        {isLoading ? (
          <Skeleton
            sx={{
              width: ["200px", "400px", "100%"],
              margin: ["auto", "auto", "auto 5% auto 5%"],
              height: ["100px", "150px", "300px"],
            }}
            animation="wave"
            variant="rectangular"
          />
        ) : (
          <Box
            maxWidth={["200px", "400px", "600px"]}
            m={["auto", "auto", "auto 5% auto 5%"]}
          >
            <img width={"100%"} src={data.Img} alt={data.name} />
          </Box>
        )}
        {/* <Skeleton sx={{ width:["200px", "400px", "100%"],margin:["auto", "auto", "auto 5% auto 5%"], height:["100px","150px","300px"] }} animation="wave" variant="rectangular" /> */}

        <Box m={["auto", "0 5% auto auto"]} width={"100%"} height={"100%"}>
          <Box width={"90%"} m={"auto"}>
          {/* skeleton or Name */}
            {isLoading ? (
              <Skeleton
                sx={{ height: "80px", width: "100%" }}
                animation="wave"
                variant="rectangular"
              />
            ) : (
              <Typography variant="h5">{data.name}</Typography>
            )}
          </Box>
          <Box width={"90%"} m={"auto"}>
            <br />
            {/* skelton or accordion */}
            {isLoading?<Skeleton sx={{width:"100%",height:["50px"]}} animation="wave" variant="rectangular" />: <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreSharp />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography
                  sx={{ width: "33%", flexShrink: 0, fontWeight: 700 }}
                >
                  Description:
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  {expanded
                    ? null
                    : (data.description + "").slice(0, 20) + "..."}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{data.description}</Typography>
              </AccordionDetails>
            </Accordion> }
          </Box>
          <br />
          <Box
            width={"90%"}
            m={"auto"}
            display={"flex"}
            justifyContent={"space-evenly"}
          >
          
            <Typography
              variant="h4"
              fontWeight={700}
              color={"rgb(246, 126, 34)"}
            >
              {isLoading?<Skeleton sx={{width:"100px",height:"50px"}} />:toIndianNumberingSystem(data.price)}
            </Typography>
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{ textDecoration: "line-through" }}
            >
              {isLoading?<Skeleton sx={{width:"60px",height:"40px"}} />:toIndianNumberingSystem(data.price + 7000)}
            </Typography>
          </Box>
          <Box m={"5%"}>
            <Button
              mt={"5px"}
              sx={{ backgroundColor: "rgb(246, 126, 34)" }}
              variant="contained"
              onClick={async () => {
                let data1 = {
                  Img: data.Img,
                  name: data.name.toUpperCase(),
                  price: data.price,
                  qty: 1,
                  id: data.id,
                };
                temp(data1);
              }}
            >
              Add to Cart
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

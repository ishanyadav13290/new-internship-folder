import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import useAddToCart from "../addToCartFunction";
import { Box } from "@mui/system";
import { ShoppingCart, Star } from "@mui/icons-material";
import toIndianNumberingSystem from "../../Features/RupeeConversion";
import { AuthContext } from "../../Context/Contexts";
import { motion,useInView } from "framer-motion";

export default function MediaCard({ el, broad, gap }) {
  let { isAuth } = React.useContext(AuthContext);
  let temp = useAddToCart();

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });
  const variants = {
    hidden: { opacity: 0, x: 150 },
    visible: { opacity: 1, x: 0 },
};
  return (<motion.div ref={ref} animate={isInView ? "visible" : "hidden"}
  variants={variants}
  transition={{ duration: 0.75 }}>

    <Box
      minHeight={"200px"}
      height={"fit-content"}
      margin={gap}
      width={broad}
      boxShadow={
        "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
      }
    >
      <Box height={"200px"} overflow={"hidden"}>
        <img src={el.Img} style={{ height: "100%", width: "100%" }} />
      </Box>
      <Box
        height={"60%"}
        display={"flex"}
        gap={"10px"}
        flexDirection={"column"}
        padding={"20px"}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <NavLink
            to={`/newarrivals/${el.id}`}
            style={{ color: "black", textDecoration: "none" }}
          >
            <Box>
              <Typography
                fontWeight={700}
                textAlign={"left"}
                variant="body2"
                fontSize={"12px"}
              >
                {el.category}
              </Typography>
              <Typography
                fontWeight={700}
                fontSize={"18px"}
                textAlign={"left"}
                variant="body1"
              >
                {el.name.slice(0, 8)}...
              </Typography>
              <Typography color={"grey"} textAlign={"left"} variant="body2">
                {el.description.slice(0, 10)}...
              </Typography>
            </Box>
          </NavLink>
          <Box>
            <Typography fontWeight={700} variant="body1">
              {toIndianNumberingSystem(el.price)}
            </Typography>
            <Box display={"flex"}>
              <Star sx={{ fontSize: "1em", color: "gold" }} />
              <Star sx={{ fontSize: "1em", color: "gold" }} />
              <Star sx={{ fontSize: "1em", color: "gold" }} />
              <Star sx={{ fontSize: "1em", color: "gold" }} />
              <Star sx={{ fontSize: "1em" }} />
            </Box>
          </Box>
        </Box>
        <Box width={"100%"}>
          <Button
            variant={"contained"}
            sx={{ flex: "1", width: "100%", display: "flex", gap: "5px" }}
            onClick={() => {
              if (!isAuth) return alert("Login First");
              let data1 = {
                Img: el.Img,
                name: el.name.toUpperCase(),
                price: el.price,
                qty: 1,
                id: el.id,
              };
              temp(data1);
            }}
          >
            <ShoppingCart />
            Add to Cart
          </Button>
        </Box>
      </Box>
    </Box>
  </motion.div>
  );
  // return (
  //   <Box
  //     minHeight={"200px"}
  //     height={"fit-content"}
  //     margin={gap}
  //     width={broad}
  //     boxShadow={
  //       "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
  //     }
  //   >
  //     <Box height={"200px"} overflow={"hidden"}>
  //       <img src={el.Img} style={{ height: "100%", width: "100%" }} />
  //     </Box>
  //     <Box
  //       height={"60%"}
  //       display={"flex"}
  //       gap={"10px"}
  //       flexDirection={"column"}
  //       padding={"20px"}
  //     >
  //       <Box
  //         display={"flex"}
  //         justifyContent={"space-between"}
  //         alignItems={"center"}
  //       >
  //         <NavLink
  //           to={`/newarrivals/${el.id}`}
  //           style={{ color: "black", textDecoration: "none" }}
  //         >
  //           <Box>
  //             <Typography
  //               fontWeight={700}
  //               textAlign={"left"}
  //               variant="body2"
  //               fontSize={"12px"}
  //             >
  //               {el.category}
  //             </Typography>
  //             <Typography
  //               fontWeight={700}
  //               fontSize={"18px"}
  //               textAlign={"left"}
  //               variant="body1"
  //             >
  //               {el.name.slice(0, 8)}...
  //             </Typography>
  //             <Typography color={"grey"} textAlign={"left"} variant="body2">
  //               {el.description.slice(0, 10)}...
  //             </Typography>
  //           </Box>
  //         </NavLink>
  //         <Box>
  //           <Typography fontWeight={700} variant="body1">
  //             {toIndianNumberingSystem(el.price)}
  //           </Typography>
  //           <Box display={"flex"}>
  //             <Star sx={{ fontSize: "1em", color: "gold" }} />
  //             <Star sx={{ fontSize: "1em", color: "gold" }} />
  //             <Star sx={{ fontSize: "1em", color: "gold" }} />
  //             <Star sx={{ fontSize: "1em", color: "gold" }} />
  //             <Star sx={{ fontSize: "1em" }} />
  //           </Box>
  //         </Box>
  //       </Box>
  //       <Box width={"100%"}>
  //         <Button
  //           variant={"contained"}
  //           sx={{ flex: "1", width: "100%", display: "flex", gap: "5px" }}
  //           onClick={() => {
  //             if (!isAuth) return alert("Login First");
  //             let data1 = {
  //               Img: el.Img,
  //               name: el.name.toUpperCase(),
  //               price: el.price,
  //               qty: 1,
  //               id: el.id,
  //             };
  //             temp(data1);
  //           }}
  //         >
  //           <ShoppingCart />
  //           Add to Cart
  //         </Button>
  //       </Box>
  //     </Box>
  //   </Box>
  // );
}

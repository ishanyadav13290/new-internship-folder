import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import useAddToCart from "../addToCartFunction";
import { Box } from "@mui/system";
import { Skeleton } from "@mui/material";
import { db, lb } from "../../Static Data/theme";
import { ShoppingCart } from "@mui/icons-material";
import toIndianNumberingSystem from "../../Features/RupeeConversion";

export default function MediaCard({ el, loading }) {
  let temp = useAddToCart();

  return (
    <Card sx={{ position:"relative", padding: "0px",margin:"auto",textAlign:"left",minWidth:["auto","auto","300px"],maxWidth:["auto","auto","300px"],"&:hover": {
      boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
,
      borderRadius:"25px",
    transition:" 0.2s ease-in"
    } }} p={"0px"} >
      {loading?<Skeleton sx={{ height: 140, width:"100%" }} animation="wave" variant="rectangular" />:
      <CardMedia
        sx={{ height: 140, width: "85%" ,margin: " 2% auto auto auto", "&:hover": {
          width:"90%",
      boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
,
      borderRadius:"25px",
    transition:" 0.2s ease-in"
    } }}
        image={el.Img}
        title="green iguana"
      />}
      {!loading?<Box
        bgcolor={db}
        color="white"
        borderRadius={"5px"}
        p={"5px"}
        position={"absolute"}
        sx={{ top: 0, right: 0 }}
        variant={"span"}
      >
        <b>Category: </b>{el.category}
      </Box>:null}
      <NavLink
        to={`/newarrivals/${el.id}`}
        style={{ color: "black", textDecoration: "none" }}
      >
        <CardContent>
        {loading?<Skeleton sx={{ height: 30 }} animation="wave" variant="rectangular" />:
          <Typography gutterBottom variant="h6" component="div">
            {el.name.slice(0, 20)}
            {el.name.length > 20 ? "..." : null}
          </Typography>}
          {loading?<br />:null}
          {loading?<Skeleton sx={{ height: 30, width:"100%" }} animation="wave" variant="rectangular" />:<Typography variant="body2" color="text.secondary">
            {el.description.slice(0, 30)}
            {el.name.length > 30 ? "..." : null}
          </Typography>}
          {/* <br /> */}
          {loading?<Skeleton sx={{height:30, width:"100%"}} />:<Box display={"flex"} justifyContent={"space-between"}><Typography variant="h6" fontWeight={700}>{toIndianNumberingSystem(el.price)}</Typography><Box>
        <Button
          size="small"
          variant="contained"
          sx={{ backgroundColor: lb }}
          onClick={() => {
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
        </Button>
        </Box></Box>}
        </CardContent>
      </NavLink>
    </Card>
  );
}

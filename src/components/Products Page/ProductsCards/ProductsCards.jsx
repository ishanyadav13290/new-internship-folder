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

export default function MediaCard({ el, loading }) {
  let temp = useAddToCart();

  return (
    <Card sx={{ minWidth:"300px",maxWidth:"300px",position:"relative", padding: "10px 0",margin:"auto","&:hover": {
      boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
,
      borderRadius:"25px",
    transition:" 0.2s ease-in"
    } }} >
      {loading?<Skeleton sx={{ height: 140, width:"100%" }} animation="wave" variant="rectangular" />:
      <CardMedia
        sx={{ height: 140, width: "80%", margin: "auto" }}
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
          <Typography gutterBottom variant="h5" component="div">
            {el.name.slice(0, 20)}
            {el.name.length > 20 ? "..." : null}
          </Typography>}
          {loading?<br />:null}
          {loading?<Skeleton sx={{ height: 30, width:"100%" }} animation="wave" variant="rectangular" />:<Typography variant="body2" color="text.secondary">
            {el.description.slice(0, 40)}
            {el.name.length > 30 ? "..." : null}
          </Typography>}
          <br />
          {loading?<Skeleton sx={{height:30, width:"100%"}} />:<Typography variant="h6" fontWeight={700}>{el.price}</Typography>}
        </CardContent>
      </NavLink>
      <CardActions>
        {/* <Button size="small">Buy</Button> */}
        <Box width={"100%"}>
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
          Add to Cart
        </Button>
        </Box>
      </CardActions>
    </Card>
  );
}

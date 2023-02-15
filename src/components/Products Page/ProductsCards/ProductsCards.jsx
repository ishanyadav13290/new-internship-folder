import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import useAddToCart from "../addToCartFunction";

export default function MediaCard({ el }) {
  let temp = useAddToCart();

  return (
    <Card sx={{ minWidth: 330, padding: "10px 0" }}>
      <CardMedia
        sx={{ height: 140, width: "80%", margin: "auto" }}
        image={el.Img}
        title="green iguana"
      />
      <NavLink
        to={`/newarrivals/${el.id}`}
        style={{ color: "black", textDecoration: "none" }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {el.name.slice(0, 20)}
            {el.name.length > 20 ? "..." : null}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {el.description.slice(0, 40)}
            {el.name.length > 30 ? "..." : null}
          </Typography>
        </CardContent>
      </NavLink>
      <CardActions>
        {/* <Button size="small">Buy</Button> */}
        <Button
          size="small"
          variant="contained"
          sx={{ backgroundColor: "rgb(246, 126, 34)" }}
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
      </CardActions>
    </Card>
  );
}

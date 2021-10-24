import React from "react";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import classes from "./Product.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
const ProductCard = (props) => {
  return (
    <Box className={classes.card}>
    <Link to={props.link}>
    <Box>
      <img
        src={props.img}
        alt="productImg"
        width="300px"
      />
      <Typography variant="inherit" className={classes.cardTitle}>
       {props.title}
      </Typography>
      <Typography variant="inherit" className={classes.size}>
        Size:
        <Typography variant="inherit" className={classes.sizeTag}>
         Lg
        </Typography>
      </Typography>
      <Box className={classes.price}>
        <Typography className={classes.cancelledPrice}>₹{props.cancelledPrice}</Typography>
        <Typography className={classes.confirmedPrice}>₹{props.actualPrice}</Typography>
      </Box>
      </Box>
      </Link>
      <Box className={classes.action}>
        <Button
          variant="contained"
          color="inherit"
          className={classes.addToCartButton}
          style={{
            backgroundColor: "blueviolet",
            color: "white",
            marginTop: "10px",
          }}
          startIcon={<ShoppingCartIcon />}
        >
          Add to Cart
        </Button>
        <Button
          variant="contained"
          color="inherit"
          className={classes.addToCartButton}
          style={{
            backgroundColor: "green",
            color: "white",
            marginTop: "10px",
            marginLeft: "10px",
          }}
          startIcon={<ShoppingCartIcon />}
        >
          Buy Now
        </Button>
      </Box>
    </Box>
  );
};

export default ProductCard;

import React from "react";
import classes from "./ProductSection.module.css";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";
import {Link} from "react-router-dom"
const ProductSection = ({products,view}) => {
  return (
    <div className={classes.products}>
      <h1 className="font-bold text-3xl text-center pt-8 text-purple-900">
        Branded Clothing 
      </h1>
       <Box className={classes.goods}>
       <Box className={classes.goodsContainer}>
      {products.map((product,id)=>(
        
          <Box className={classes.goodItems}>
            <ProductCard cancelledPrice={product.price.mrp} link={`${view}/${product.id}`} actualPrice={product.price.cost} title={product.title.shortTitle} img={product.url}  />
          </Box>
          
      ))}
      </Box>
      </Box>
    </div>
  );
};

export default ProductSection;

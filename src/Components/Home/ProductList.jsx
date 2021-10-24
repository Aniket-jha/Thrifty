import React from 'react'
import { productOneData } from './productData'
import classes from "./ProductList.module.css"
const ProductList = () => {
    return (
        <div className={classes.brand}>
           {productOneData.map(images=>(
               <div className={classes.brandImg}>
               <img src={images.url} alt={images.text} width="300px" />
               </div>
           ))} 
            
        </div>
    )
}

export default ProductList

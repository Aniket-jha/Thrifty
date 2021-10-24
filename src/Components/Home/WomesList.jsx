import React from 'react'
import { productTwoData } from './productData'
import classes from "./ProductList.module.css"
const WomensList = () => {
    return (
        <div className={classes.brand}>
           {productTwoData.map(images=>(
               <div className={classes.brandImg}>
               <img src={images.url} alt={images.text}  />
               </div>
           ))} 
            
        </div>
    )
}

export default WomensList

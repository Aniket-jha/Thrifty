import React from 'react'
import { productThreeData } from './productData'
import classes from "./ProductList.module.css"
const CuratedList = () => {
    return (
        <div className={classes.brand}>
           {productThreeData.map(images=>(
               <div className={classes.brandImg}>
               <img src={images.url} alt={images.text}    />
               </div>
           ))} 
            
        </div>
    )
}

export default CuratedList

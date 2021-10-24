import React from 'react'
import Header from '../Components/UI/Header'
import Navbar from '../Components/UI/Navbar'
import classes from "./Brand.module.css"
import { Grid } from '@mui/material'
import { brandList } from './BrandList'
import Footer from '../Components/UI/Footer'
const Brand = () => {
    return (
        <div>
        <Header/>
        <Navbar/>
            <img src="https://www.kiabza.com/media/wysiwyg/Brands_Banner.jpg.mst.webp" alt="brand banner"></img>
            <h1 className="text-center text-4xl pt-8 font-bold">OUR BEST BRANDS</h1>
             <div className={classes.totalBrand}>
            {brandList.map(brand=>(
                <div className={classes.brandsection} >
            <div  className={classes.brandBox}>
                 <h1 className="pt-3">{brand}</h1>
            </div>
            </div>
            ))}
           </div>
               <Footer/>
        </div>
    )
}

export default Brand

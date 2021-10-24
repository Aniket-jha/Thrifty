import React from 'react'
import Header from '../UI/Header'
import Navbar from '../UI/Navbar'
import { Box } from '@mui/system'
import classes from "./Sell.module.css"
import SellForm from "./SellForm"
import Footer from '../UI/Footer'
const Sell = () => {
    return (
        <div>
            <Header/>
            <Navbar/>
            <img src="https://www.kiabza.com/media/wysiwyg/slider/selloct.jpg.mst.webp" alt="sell banner" />
             <Box className={classes.formContent}>
             <Box><h1 className="font-bold text-4xl text-purple-600">Request Pickup</h1></Box>
                
                <SellForm/>
             </Box>
             <Footer/>
        </div>
    )
}

export default Sell

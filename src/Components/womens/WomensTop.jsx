import React,{useEffect} from "react";
import Header from "../UI/Header";
import Navbar from "../UI/Navbar";
import classes from "./Womens.module.css";
import { Box } from "@mui/system";

import ProductSection from "./WomensProducts/ProductSection";
import { useDispatch, useSelector } from "react-redux";
import {getWomensTop as womensTopList} from '../../redux/actions/productAction'
import Footer from "../UI/Footer";

const WomensTop = () => {
      const {womensTop}=useSelector(state=>state.getWomensTop)
  const dispatch=useDispatch()
  useEffect(() => {
      console.log("nam")
     dispatch(womensTopList())
    
  }, [dispatch])
    return (
        <div>
             <Header />
      <Navbar />
      <img
        src="https://www.kiabza.com/media/wysiwyg/slider/womenoct.jpg.mst.webp"
        alt="mensWear banner"
      />
      <Box className={classes.contentSection}>
        <Box className={classes.clothes}>
          <ProductSection view="womensTop" products={womensTop} />
        </Box>
      </Box>
      <Footer/>
        </div>
    )
}

export default WomensTop

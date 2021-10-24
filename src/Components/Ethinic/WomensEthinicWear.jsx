import React,{useEffect} from "react";
import Header from "../UI/Header";
import Navbar from "../UI/Navbar";
import classes from "./MensEthinicWear.module.css";
import { Box } from "@mui/system";

import ProductSection from "./EthinicProducts/ProductSection";
import { useDispatch, useSelector } from "react-redux";
import {getWomensEthinic as womensEthinicList} from '../../redux/actions/productAction'
import Footer from "../UI/Footer";

const WomensEthinicWear = () => {
      const {womensEthinic}=useSelector(state=>state.getWomensEthinic)
  const dispatch=useDispatch()
  useEffect(() => {
      console.log("nam")
     dispatch(womensEthinicList())
    
  }, [dispatch])
    return (
        <div>
             <Header />
      <Navbar />
      <img
        src="https://www.kiabza.com/media/wysiwyg/slider/brandoct.jpg.mst.webp"
        alt="mensWear banner"
      />
      <Box className={classes.contentSection}>
        <Box className={classes.clothes}>
          <ProductSection view="womensEthinic" products={womensEthinic} />
        </Box>
      </Box>
      <Footer/>
        </div>
    )
}

export default WomensEthinicWear
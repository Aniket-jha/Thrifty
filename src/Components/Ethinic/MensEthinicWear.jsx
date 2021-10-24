import React,{useEffect} from "react";
import Header from "../UI/Header";
import Navbar from "../UI/Navbar";
import classes from "./MensEthinicWear.module.css";
import { Box } from "@mui/system";

import ProductSection from "./EthinicProducts/ProductSection";
import { useDispatch, useSelector } from "react-redux";
import {getMensEthinic as mensEthinicList} from '../../redux/actions/productAction'
import Footer from "../UI/Footer";

const MensEthinicWear = () => {
      const {mensEthinic}=useSelector(state=>state.getMensEthinic)
  const dispatch=useDispatch()
  useEffect(() => {
      console.log("nam")
     dispatch(mensEthinicList())
    
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
          <ProductSection view="mensEthinic" products={mensEthinic} />
        </Box>
      </Box>
      <Footer/>
        </div>
    )
}

export default MensEthinicWear

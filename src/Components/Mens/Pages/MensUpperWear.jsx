import React,{useEffect} from "react";
import Header from "../../UI/Header";
import Navbar from "../../UI/Navbar";
import classes from "./MensUpperWear.module.css";
import { Box } from "@mui/system";
import FilterSection from "./filterSection";
import ProductSection from '../MensProducts/ProductSection';
import { useDispatch, useSelector } from "react-redux";
import {getMensTop as mensTopList} from '../../../redux/actions/productAction'
import Footer from "../../UI/Footer";
const MensUpperWear = () => {
  const {mensTop}=useSelector(state=>state.getMensTop)
  const dispatch=useDispatch()
  useEffect(() => {
      console.log("nam")
     dispatch(mensTopList())
    
  }, [dispatch])
 
  return (
    <div>
      <Header />
      <Navbar />
      <img
        src="https://www.kiabza.com/media/wysiwyg/slider/menoct.jpg.mst.webp"
        alt="mensWear banner"
      />
      <Box className={classes.contentSection}>
        <Box className={classes.clothes}>
          <ProductSection products={mensTop} view="mensTop" />
        </Box>
      </Box>
      <Footer/>
    </div>
  );
};

export default MensUpperWear;

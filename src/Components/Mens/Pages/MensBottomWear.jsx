import React,{useEffect} from 'react'
import Header from "../../UI/Header";
import Navbar from "../../UI/Navbar";
import classes from "./MensUpperWear.module.css";
import { Box } from "@mui/system";
import FilterSection from "./filterSection";
import ProductSection from "../MensProducts/ProductSection";
import { useDispatch, useSelector } from "react-redux";
import {getMensBottom as mensBottomList} from '../../../redux/actions/productAction'
import Footer from '../../UI/Footer';
const MensBottomWear = () => {
     const {mensBottom}=useSelector(state=>state.getMensBottom)
  const dispatch=useDispatch()
  useEffect(() => {
      console.log("nam")
     dispatch(mensBottomList())
    
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
          <ProductSection products={mensBottom} view="mensBottom" />
        </Box>
      </Box>
      <Footer/>
        </div>
    )
}

export default MensBottomWear

import React, { useState } from "react";
import Popover from "@mui/material/Popover";
import classes from "./Navbar.module.css";
import { Typography, List, ListItem } from "@mui/material";
import {Link} from 'react-router-dom'

const Navbar = () => {

 
  return (
    <div className={classes.navbar} >
    <div className={classes.dropdown}>
      <Link to='/mensupperwear'><h1   className="font-bold text-2xl text-purple-900 hover:text-yellow-400">
         Mens
      </h1>
      <div class={classes.dropdownContent}>
      <Link to='/mensupperwear'>
       <Typography variant="h6"  className={classes.dropdownText}>TopWear</Typography>
      </Link>
       <Link to='/mensbottomwear'>
       <Typography variant="h6" className={classes.dropdownText}>Bottomwear</Typography>
      </Link>
  </div>
    
    </Link>
    </div>
      <div className={classes.dropdown}>
      <Link to='/womenstopwear'><h1   className="font-bold text-2xl text-purple-900 hover:text-yellow-400">
         Womens
      </h1>
      <div class={classes.dropdownContent}>
      <Link to='/womenstopwear'>
       <Typography variant="h6"  className={classes.dropdownText}>TopWear</Typography>
      </Link>
       <Link to='/womensbottomwear'>
       <Typography variant="h6" className={classes.dropdownText}>Bottomwear</Typography>
      </Link>
  </div>
    
    </Link>
    </div>
    
      <div className={classes.dropdown}>
      <Link to='/mensupperwear'><h1   className="font-bold text-2xl text-purple-900 hover:text-yellow-400">
         Ethinic Wear
      </h1>
      <div class={classes.dropdownContent}>
      <Link to='/mensethinicwear'>
       <Typography variant="h6"  className={classes.dropdownText}>Mens</Typography>
      </Link>
       <Link to='/womensethinicwear'>
       <Typography variant="h6" className={classes.dropdownText}>Womens</Typography>
      </Link>
  </div>
    
    </Link>
    </div>
     <div className={classes.dropdown}>
      <Link to='/sellingprocess'><h1   className="font-bold text-2xl text-purple-900 hover:text-yellow-400">
         Sell
      </h1>
      <div class={classes.dropdownContent}>
      <Link to='/sellingprocess'>
       <Typography variant="h6"  className={classes.dropdownText}>How to sell?</Typography>
      </Link>
       <Link to='/sell'>
       <Typography variant="h6" className={classes.dropdownText}>Request Pickup</Typography>
      </Link>
  </div>
    
    </Link>
    </div>
      <Link to="/brand">
      <h1 className="font-bold text-2xl text-purple-900 hover:text-yellow-400">
        Brands
      </h1>
      </Link>
    </div>
  );
};

export default Navbar;

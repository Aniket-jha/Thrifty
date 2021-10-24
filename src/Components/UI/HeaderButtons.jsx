import React from "react";
import { Box, Button, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { LoginContext } from "../../context/ContextProvider";
import {Link} from "react-router-dom"
import { useSelector } from "react-redux";
import classes from "./HeaderButtons.module.css";
import Badge from "@mui/material/Badge";
import Profile from "./Profile";
const HeaderButtons = () => {
  const {account,setAccount}=React.useContext(LoginContext)
  const cartDetails = useSelector(state => state.cart);
    const { cartItems } = cartDetails;
  return (
     <Box className={classes.wrapper}>
   { account ? <Profile account={account} setAccount={setAccount}></Profile> :
     <Link to="/login"> <Button
     
        varient="contained"
        style={{
          backgroundColor: "white",
          color: "#b24080",
          textTransform: "none",
          borderRadius: "2px",
          padding: "8px 50px",
        }}
      >
      
        Login 
      </Button></Link>
}
      <Box className={classes.container}>
        <Badge color="primary" badgeContent={cartItems?.length}>
          <ShoppingCartIcon />
        </Badge>
        <Typography style={{ marginLeft: "10px" }}>cart</Typography>
      </Box>
    </Box>
  );
};

export default HeaderButtons;

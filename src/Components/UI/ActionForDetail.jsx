import React from 'react'
import { Box } from '@mui/system'
import { Button, Typography } from '@material-ui/core'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import classes from "./ActionForDetail.module.css"
import { useDispatch } from 'react-redux';

const ActionForDetail=()=>{
   const dispatch=useDispatch()
  const addToCart=()=>{

  }
    return (
        <div>
              <Box className={classes.action}>
                        <Button
          variant="contained"
          color="inherit"
          className={classes.addToCartButton}
          onClick={addToCart}
          style={{
            backgroundColor: "blueviolet",
            color: "white",
            marginTop: "10px",
            padding:"25px"
          }}
          startIcon={<ShoppingCartIcon />}
        >
          Add to Cart
        </Button>
        <Button
          variant="contained"
          color="inherit"
          className={classes.addToCartButton}
          style={{
            backgroundColor: "green",
            color: "white",
            marginTop: "10px",
            marginLeft: "30px",
            padding:"25px"
          }}
          startIcon={<ShoppingCartIcon />}
        >
          Buy Now
        </Button>
                    </Box>
               
        </div>
    )
        }

export default ActionForDetail

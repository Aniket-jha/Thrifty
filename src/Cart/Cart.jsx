import React,{useEffect} from 'react'
import Header from '../Components/UI/Header'
import Navbar from '../Components/UI/Navbar'
import { useSelector,useDispatch } from 'react-redux'
import { Box} from '@mui/system'
import { Grid } from '@material-ui/core'
import { Button, Typography } from '@material-ui/core'
import { removeFromCart } from '../redux/actions/cartActions'
import CartItem from './CartItem'
import TotalView from './TotalView'
import EmptyCart from './EmptyCart'
import classes from "./Cart.module.css"
import { Link } from 'react-router-dom'
const Cart = () => {
    const {cartItems}=useSelector(state=>state.cart)
    const dispatch= useDispatch()
    useEffect(()=>{
        console.log(cartItems)
    })
    const removeItemFromCart = (id) => {
        dispatch(removeFromCart(id));
    }
    return (
        <div>
            <Header/>
            <Navbar/>
            {cartItems.length ? 
            <Grid container className={classes.component}>
                <Grid item lg={9} md={9} sm={12} xs={12} className={classes.leftComponent}>
                    <Box className={classes.header}>
                        <Typography style={{fontWeight: 600, fontSize: 18}}>My Cart ({cartItems?.length})</Typography>
                    </Box>
                        {   cartItems.map(item => (
                                <CartItem item={item} removeItemFromCart={removeItemFromCart}/>
                            ))
                        }
                    <div className="pl-96">
                    <p className="pt-8 pb-4 text-red-600 font-bold">We only take CASH ON DELIVERY (for now)</p>
                      <Link to="/placeorder">  <Button  variant="contained" color="inherit" style={{backgroundColor:"#6a1b87",color:"white",borderRadius:"2px",width:"250px",heigth:"51px"}} className={classes.placeOrder}>Place Order</Button></Link>
                    </div>
                </Grid>
                <Grid item lg={3} md={3} sm={12} xs={12}>
                    <TotalView cartItems={cartItems} />
                </Grid>
            </Grid> : <EmptyCart /> }
        </div>
    )
}

export default Cart

import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import classes from "./PlaceOrder.module.css"
const PlaceOrder = () => {
    return (
        <div >
        <div style={{margin:"20% 30%",textAlign:"center"}}>
            <h1 className="font-bold text-4xl text-purple-600">Order Placed Sucessfully</h1>
            <p className="font-bold text-2xl pt-4 pb-4 text-purple-400"  >Continue Shopping</p>
            <Link to="/" ><Button variant="contained" style={{backgroundColor:"green",color:"white"}}>Shop More</Button> </Link>
            </div>
        </div>
    )
}

export default PlaceOrder

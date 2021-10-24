import React,{useEffect} from 'react'
import classes from "./MensTopDetailView.module.css"
import { useSelector,useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { getWomensEthinicDetails } from '../../redux/actions/productAction'
import { Box } from '@mui/system'
import { Button, Typography } from '@material-ui/core'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SellIcon from '@mui/icons-material/Sell';
import Header from '../UI/Header'
import Navbar from '../UI/Navbar'
import Footer from "../UI/Footer"
import { addWomensEthinicToCart } from '../../redux/actions/cartActions'
import { useHistory } from 'react-router'
const WomensEthinicDetailView = ({match}) => {
  const {womensEthinicId}=useSelector(state=>state.getWomensEthinicDetails)
    const history=useHistory()
  const {id}=useParams()
  console.log(id)
  const dispatch=useDispatch()
  useEffect(() => {
      console.log("nam")
      console.log(id)
     dispatch(getWomensEthinicDetails(id))
    
  }, [dispatch,id])
 console.log(womensEthinicId)
  const addItemToCart=()=>{
   dispatch(addWomensEthinicToCart(id))
   history.push("/cart")
 }
    return (
        <div>
        <Header/>
        <Navbar/>
        <Box className={classes.border}>
           <Button className={classes.sellButton} startIcon={<SellIcon/>} style={{backgroundColor:"blueviolet",color:"white",padding:"18px"}} variant="contained">Sell With Us</Button>
        </Box>
            {womensEthinicId && Object.keys(womensEthinicId).length && 
           ( <Box className={classes.product}>
                <Box className={classes.sectionOne}>
                    <img src={womensEthinicId.detailUrl} alt="detail"></img>
                </Box>
                <Box className={classes.sectionTwo}>
                    <h1 className="font-bold text-center text-purple-600 text-2xl mb-4">{womensEthinicId.title.shortTitle}</h1>
                    <p className=" text-center text-gray-400 text-md">{womensEthinicId.description}</p>
                    <Box className={classes.size}>
                         <p className="font-bold text-purple-400 text-lg">Size Available:</p>
                         <p className="font-bold text-green-700 ml-3 text-md">Lg</p>
                    </Box>
                   
                    <Box className={classes.prices}>
                        <Box className={classes.cancelledPrice}>
                            <p className="font-bold text-gray-400 text-lg">Regular Price</p>
                            <p className="text-red-600 text-lg" style={{textDecoration: "line-through"}}>₹{womensEthinicId.price.mrp}</p>
                        </Box>
                        <Box className={classes.actualPrice}>
                            <p className="font-bold text-gray-400 text-lg"  >Thrifty Price</p>
                            <p className="text-green-600 text-lg font-bold" >₹{womensEthinicId.price.cost}</p>
                        </Box>
                       
                    </Box>
                     <Box className={classes.deals}>
                                <LocalFireDepartmentIcon/>
                              <p className="font-bold ">{womensEthinicId.tagline}</p>
                        </Box>
                     
                    <Box className={classes.action}>
                        <Button
          variant="contained"
          color="inherit"
          onClick={()=>addItemToCart()}
          className={classes.addToCartButton}
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
                </Box>
            </Box>)}
            <Footer/>
        </div>
    )
}

export default WomensEthinicDetailView

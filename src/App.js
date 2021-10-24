
import './App.css';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register/Register';
import Header from './Components/UI/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import MensUpperWear from './Components/Mens/Pages/MensUpperWear';
import Brand from './Brand/Brand';
import SellingProcess from './Components/Sell/SellingProcess';
import Sell from './Components/Sell/Sell';
import ContextProvider from './context/ContextProvider.js';
import MensBottomWear from './Components/Mens/Pages/MensBottomWear';
import WomensTop from './Components/womens/WomensTop';
import WomensBottom from './Components/womens/WomensBottom';
import MensEthinicWear from './Components/Ethinic/MensEthinicWear';
import WomensEthinicWear from "./Components/Ethinic/WomensEthinicWear"
import MensTopDetailView from './Components/Details/MensTopDetailView';
import MensBottomDetailView from './Components/Details/MensBottomDetailView';
import WomensTopDetailView from './Components/Details/WomensTopWear';
import WomensBottomDetailView from './Components/Details/WomensBottomDetail';
import WomensEthinicDetailView from './Components/Details/WomensEthinicDetailView';
import MensEthinicDetailView from './Components/Details/MensEthinicDetailView';
import Cart from "./Cart/Cart"
import PlaceOrder from './Cart/PlaceOrder';
function App() {
  return (
    <ContextProvider>
        <Router>
       <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
           <Login/>
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
           <Route exact path="/mens">
            <Register />
          </Route>
            <Route exact path="/mensupperwear">
            <MensUpperWear />
          </Route>
           <Route exact path="/mensbottomwear">
            <MensBottomWear/>
          </Route>
           <Route exact path="/womenstopwear">
            <WomensTop/>
          </Route>
          <Route exact path="/womensbottomwear">
            <WomensBottom/>
          </Route>
            <Route exact path="/mensethinicwear">
            <MensEthinicWear/>
          </Route>
           <Route exact path="/womensethinicwear">
            <WomensEthinicWear/>
          </Route>
           <Route exact path="/sellingprocess">
            <SellingProcess />
          </Route>
           <Route exact path="/sell">
            <Sell/>
          </Route>
            <Route exact path="/mensTop/:id" >
            <MensTopDetailView/>
            </Route>
             <Route exact path="/mensBottom/:id" >
            <MensBottomDetailView/>
            </Route>
             <Route exact path="/womensTop/:id" >
            <WomensTopDetailView/>
            </Route>
          <Route exact path="/womensBottom/:id" >
            <WomensBottomDetailView/>
            </Route>
             <Route exact path="/womensEthinic/:id" >
            <WomensEthinicDetailView/>
            </Route>
             <Route exact path="/mensEthinic/:id" >
            <MensEthinicDetailView/>
            </Route>
          <Route exact path="/brand">
            <Brand />
          </Route>
           <Route exact path="/cart">
            <Cart/>
          </Route>
            <Route exact path="/placeorder">
            <PlaceOrder/>
          </Route>
        </Switch>
        </Router>
      </ContextProvider>
    
  );
}

export default App;

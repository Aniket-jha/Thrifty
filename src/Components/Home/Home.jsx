import React from 'react'
import Banner from '../UI/Banner';

import Header from '../UI/Header';
import Navbar from '../UI/Navbar';
import ProductList from './ProductList';
import WomesList from "../Home/WomesList"
import CuratedList from './CuratedList';
import Footer from '../UI/Footer';
const Home = () => {
    return (
        <div>
            <Header/>
                <Navbar/>
                <Banner/>
                <img src="https://www.kiabza.com/media/wysiwyg/slider/band.png.mst.webp" alt="cod" />
                <h1 className="font-bold text-4xl text-center pt-10 text-purple-900">Featured Brands</h1>
                <ProductList/>
                <img src="https://www.kiabza.com/media/wysiwyg/slider/ethnicwear.jpg.mst.webp" width="100%" alt="offer"/>
               <h1 className="font-bold text-4xl text-center pt-10 text-purple-900">Treding Womens Styles</h1>
                <WomesList/>
                 <h1 className="font-bold text-4xl text-center pt-10 text-purple-900">Curated Collections</h1>
                <CuratedList/>
                <img src="https://www.kiabza.com/media/wysiwyg/slider/newarrivalAug.jpg.mst.webp" width="100%" alt="offer"/>
                <img src="https://www.kiabza.com/media/wysiwyg/slider/whykiabzawebAug.jpg.mst.webp" style={{paddingTop:"50px",paddingBottom:"20px"}} width="100%" alt="offer"/>
                <Footer/>
        </div>
    )
}

export default Home

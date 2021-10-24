import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Searchbar from './Searchbar';
import classes from "./Header.module.css"
import { Typography } from '@mui/material';
import HeaderButtons from './HeaderButtons';
import {Link} from "react-router-dom"

const Header = () => {
    
    
    return (
        <div>
            <AppBar style={{backgroundColor:'#B24080'}}  className={classes.header}>
                <Toolbar>
                
                    <Typography variant="inherit" className={classes.logo} as={Link} to="/"  >Thrifty</Typography>
                    <Searchbar/>
                    <HeaderButtons/>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header

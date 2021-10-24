import React from 'react'
import classes from "./Login.module.css"
import {Link} from "react-router-dom"
import LoginForm from './LoginForm'
const login = () => {
    return (
        <>
        <div className={classes.login}>
           
            <div className={classes.loginlogo}>
                <h1 className="font-bold text-8xl">Thrifty</h1>
            </div>
            <div className={classes.form}>
            
                <LoginForm/>
            </div>
              
                </div>
        <div className={classes.register}><h1 className="text-xl">Using For the first time</h1>
        <Link to="./register"> <button
        
            type="submit"
            className=" text-center mx-8 py-2 px-3 font-bold  bg-pink-900 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-36   transition ease-in duration-200 text-center text-base shadow-lg focus:outline-none   rounded-full font-sans"
          >
            Register
          </button></Link></div>
        
        
        </>
    )
}

export default login

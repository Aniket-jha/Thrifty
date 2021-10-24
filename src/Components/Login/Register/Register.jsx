import React from 'react'
import classes from "./Register.module.css"
import RegisterForm from './RegisterForm'
import {Link} from "react-router-dom"
const Register = () => {
    return (
        <div>
        <h1 className="font-bold text-6xl mt-10 text-center">Register</h1>
         <div className={classes.register}>
           
            <div className={classes.registerlogo}>
                <h1 className="font-bold text-8xl">Thrifty</h1>
            </div>
            <div className={classes.form}>
            
                <RegisterForm/>
            </div>
              
                </div>
        <div className={classes.login}><h1 className="text-xl">Aleardy a user</h1>
         <Link to="./login"><button
            type="submit"
            className=" text-center mx-8 py-2 px-3 font-bold  bg-pink-900 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-36   transition ease-in duration-200 text-center text-base shadow-lg focus:outline-none   rounded-full font-sans"
          >
            Login
          </button></Link></div>
        </div>
    )
}

export default Register

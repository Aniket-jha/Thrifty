import React from "react";
import { Formik, Form, Field } from "formik";
import {Link} from "react-router-dom"
import TextField from "./TextField";
import { useHistory } from "react-router-dom";
import { authenticateLogin } from "../../service/api";
import { LoginContext } from "../../context/ContextProvider";
import { Typography } from "@material-ui/core";
const LoginForm = () => {
   const {account,setAccount}=React.useContext(LoginContext)
   const [errorMessage,setErrorMessage]=React.useState(false)
 const history=useHistory()
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={async (data, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        console.log("submit:", data);
         let response= await authenticateLogin(data)
        if(!response){
            setErrorMessage(true)
             return
        }
        setSubmitting(false);
        history.push("/")
         setAccount(data.name)
        resetForm();
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <Form className="space-y-6">
        {errorMessage && <Typography>Invalid username or password</Typography>}
          <Field
            name="name"
            label="Name"
            type="text"
            placeholder="Enter Your Name"
            as={TextField}
          />
          <Field
            name="email"
            label="Email"
            type="email"
            placeholder="Enter Your Email"
            as={TextField}
          />
          <Field
            name="password"
            label="Password"
            type="password"
            placeholder="Enter Your Password"
            as={TextField}
          />
          
          <button
            type="submit"
            className=" text-center mt-10 mx-28 py-3.5 px-6 font-bold  bg-pink-900 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-36   transition ease-in duration-200 text-center text-base shadow-lg focus:outline-none   rounded-full font-sans"
          >
            Login
          </button>
         
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;

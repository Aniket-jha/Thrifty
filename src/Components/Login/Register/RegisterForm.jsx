import React from 'react'
import { Formik, Form, Field } from "formik";
import {Link} from "react-router-dom"
import TextField from "../TextField";
import { useHistory } from "react-router-dom";
import { LoginContext } from "../../../context/ContextProvider";
import { authenticateSignup } from '../../../service/api.js';
const RegisterForm = () => {
   const {account,setAccount}=React.useContext(LoginContext)
  const history=useHistory()
    return (
        <div>
               <Formik
      initialValues={{
        name: "",
        contact:"",
        email: "",
        password: "",
        addresslineone: "",
        addresslinetwo: "",
        addresslinethree:"",
      }}
       onSubmit= { async (data, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        console.log("submit:", data);
        let response= await authenticateSignup(data)
        if(!response) return
        setSubmitting(false);
        history.push("/")
        setAccount(data.name)
        resetForm();
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <Form className="space-y-6">
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
           <Field
            name="contact"
            label="Contact no"
            type="text"
            placeholder="Enter Your Contact no"
            as={TextField}
          />
            <Field
            name="addresslineone"
            label="Address Line 1"
            type="text"
            placeholder="Flat no./Complex/ Street"
            as={TextField}
          />
           <Field
            name="addresslinetwo"
            label="Address Line 2"
            type="text"
            placeholder="Locality/City/ District/Pin-code"
            as={TextField}
          />
           <Field
            name="addresslinethree"
            label="State"
            type="text"
            placeholder="Enter your State"
            as={TextField}
          />
          <button
            type="submit"
            className=" text-center mx-28 py-3.5 px-6 font-bold mt-10  bg-pink-900 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-36   transition ease-in duration-200 text-center text-base shadow-lg focus:outline-none   rounded-full font-sans"
          >
            Sign-up
          </button>
        </Form>
      )}
    </Formik>
        </div>
    )
}

export default RegisterForm

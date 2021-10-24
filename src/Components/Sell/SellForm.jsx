import React from 'react'
import { Formik, Form, Field } from "formik";
import {Link} from "react-router-dom"
import TextField from "./SellTextfield";
import { Button } from '@mui/material';
const SellForm = () => {
    return (
        <div>
               <Formik
      initialValues={{
        name: "",
        contact:"",
        email:"",
        addresslineone: "",
        addresslinetwo: "",
        addresslinethree:"",
      }}
      onSubmit={(data, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        console.log("submit:", data);
        setSubmitting(false);
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
           <Field
            name="contact"
            label="Contact no"
            type="text"
            placeholder="Enter Your Contact no"
            as={TextField}
          />
         <Link to="./"><Button style={{backgroundColor:"#B24080", padding:"15px", marginLeft:"35%", marginTop:"5%",marginBottom:"5%"}} variant="contained">
             Request
         </Button></Link>
        </Form>
      )}
    </Formik>
        </div>
    )
}

export default SellForm
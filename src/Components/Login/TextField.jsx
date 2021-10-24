import React from "react";
import classes from "./TextField.module.css";
const TextField = (props) => {
  return (
    <div className={classes.field}>
      <label htmlFor={props.name}  className="block text-pink-900 mb-2 font-bold text-lg">{props.label}
      <span className="text-red-600 required-dot">
            *
        </span></label>
       
      <input
      id={props.name}
      name={props.name}
        value={props.value}
         onChange={props.onChange}
         onBlur={props.onBlur}
        type={props.type}
        placeholder={props.placeholder}
        className=" rounded-3xl border-transparent  hover:border-yellow-200 focus:border-light-blue flex-1 appearance-none border border-indigo-900 w-80 py-3 px-4 bg-white text-gray-700 placeholder-pink-900 shadow-sm text-base focus:outline-none "
      />
    </div>
  );
};

export default TextField;

import React from "react";
import Carousel from "react-material-ui-carousel";
import { bannerData } from "./bannerData";
import classes from "./Banner.module.css";
const Banner = () => {
  return (
    <div className={classes.carousel}>
      <Carousel
        autoPlay={true}
        animation="slide"
        indicators={false}
        navButtonsAlwaysVisible={true}
        navButtonsProps={{
          style: {
            backgroundColor: "#FFFFFF",
            color: "#494949",
            borderRadius: 0,
            margin: 0,
            height: "80px",
            width: "40px",
          },
        }}
      >
        {bannerData.map((image) => (
          <img src={image} alt="carousel img" />
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;

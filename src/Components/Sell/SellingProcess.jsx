import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../UI/Header";
import Navbar from "../UI/Navbar";
import classes from "./SellingProcess.module.css";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import Footer from "../UI/Footer";
const SellingProcess = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <img
        className={classes.topbanner}
        alt="sell bilboard"
        src="https://www.kiabza.com/media/wysiwyg/panel/selling-process--banner.jpg.mst.webp"
      />
      <Box className={classes.sellTopContent}>
        <p className="text-center text-lg ">
          With Thrifty you have the opportunity to earn easy cash by selling
          your branded pre-owned fashion merchandise at great prices. You can
          now choose to Sell your Products and take money right away or opt for
          the Consignment Model and earn a lot more
        </p>
        <Link to="/sell">
          <Button
            variant="contained"
            className={classes.sellButton}
            color="inherit"
            style={{
              padding: "1.5%",
              margin: "3% 40%",
              backgroundColor: "#B24080",
              color: "white",
              lineHeight: "25px",
            }}
          >
            Request a Pick up (For Sellers Only)
          </Button>
        </Link>
      </Box>

      <h1 className="font-bold text-center text-5xl text-purple-900">
        How to sell
      </h1>
      <Box className={classes.howToSell}>
        <Box className={classes.sellBoxes}>
          <img src="http://kiabza.com/media/kiabzaImg/s1.jpg" alt="process" />
          <Typography className={classes.sellText}>
            You decide to consign your clothes to Thrify
          </Typography>
        </Box>
        <Box className={classes.sellBoxes}>
          <img src="http://kiabza.com/media/kiabzaImg/s2.jpg" alt="process" />
          <Typography className={classes.sellText}>
            Thrifty arranges a free pick-up & bring the clothes inhouse
          </Typography>
        </Box>
        <Box className={classes.sellBoxes}>
          <img src="http://kiabza.com/media/kiabzaImg/s3.jpg" alt="process" />
          <Typography className={classes.sellText}>
            Thrifty does a quality check
          </Typography>
        </Box>
        <Box className={classes.sellBoxes}>
          <img src="http://kiabza.com/media/kiabzaImg/s4.jpg" alt="process" />
          <Typography className={classes.sellText}>
            The price of approved clothing is defined by Thrifty and agreed to
            by the seller.
          </Typography>
        </Box>
        <Box className={classes.sellBoxes}>
          <img src="http://kiabza.com/media/kiabzaImg/s5.jpg" alt="process" />
          <Typography className={classes.sellText}>
            Thrifty sanitizes the clothing
          </Typography>
        </Box>
        <Box className={classes.sellBoxes}>
          <img src="http://kiabza.com/media/kiabzaImg/s6.jpg" alt="process" />
          <Typography className={classes.sellText}>
            Thrifty photographs and uploads the images of the clothes on its
            website
          </Typography>
        </Box>
        <Box className={classes.sellBoxes}>
          <img src="http://kiabza.com/media/kiabzaImg/s7.jpg" alt="process" />
          <Typography className={classes.sellText}>
            You are paid out for the clothing after completion of sale
          </Typography>
        </Box>
        <Box className={classes.sellBoxes}>
          <img src="http://kiabza.com/media/kiabzaImg/s8.jpg" alt="process" />
          <Typography className={classes.sellText}>
            Unapproved clothing can be returned or donated to any one of our
            charity partners
          </Typography>
        </Box>
      </Box>
      <h1 className="font-bold text-center text-5xl text-purple-900">
        Important Guidelines
      </h1>
      <Box className={classes.bottomSell}>
        <Box className={classes.toDo}>
          <h1 className="text-2xl font-bold text-purple-500">What to do?</h1>
          <p>
            <CheckIcon style={{ color: "green" }} />
            Authentic Branded clothing.
          </p>
          <p>
            <CheckIcon style={{ color: "green" }} />
            Clothes in great condition, without any visible wear, tear or
            damage.
          </p>
          <p>
            <CheckIcon style={{ color: "green" }} />
            Clothes without any stains or marks of any kind.
          </p>
          <p>
            <CheckIcon style={{ color: "green" }} />
            Clothes in their original shape and size.
          </p>
          <p>
            <CheckIcon style={{ color: "green" }} />
            Clothes with their original colors intact.
          </p>
          <p>
            <CheckIcon style={{ color: "green" }} />
            Clothes which have been washed and are clean.
          </p>
        </Box>
        <Box className={classes.toDo}>
          <h1 className="text-2xl font-bold text-purple-500">What not do?</h1>
          <p>
            <ClearIcon style={{ color: "red" }} />
            Fakes or Replicas.
          </p>
          <p>
            <ClearIcon style={{ color: "red" }} />
            Clothes not as per our Approved Brand List.
          </p>
          <p>
            <ClearIcon style={{ color: "red" }} />
            Innerwear or Nightwear.
          </p>
          <p>
            <ClearIcon style={{ color: "red" }} />
            Clothes with artificial leather.
          </p>
          <p>
            <ClearIcon style={{ color: "red" }} />
            Clothes with visible wear & tear, holes, loose threads etc.
          </p>
          <p>
            <ClearIcon style={{ color: "red" }} />
            Clothes with visible wear & tear, holes, loose threads etc.
          </p>
          <p>
            <ClearIcon style={{ color: "red" }} />
            Clothes which have lost shape or where the fabric is overstretched /
            has shrunk.
          </p>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default SellingProcess;

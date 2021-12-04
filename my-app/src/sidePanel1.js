import React from "react";
import { useState, useEffect, createContext } from "react";
import { Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
const useStyles = makeStyles((theme) => ({
  card: {
    top: "195px",
    left: "1492px",
    width: "350px",
    height: "356px",
     marginTop: "200px",
    padding: "28px 4px 20px 20px",
    boxShadow: " 0 7px 15px 0 rgba(23, 115, 166, 0.07)",
    backgroundColor: " #F4F4F4",
    [theme.breakpoints.down("sm")]: {
      top: "195px",
      marginLeft: "26px",
      width: "300px",
      height: "356px",
       marginTop: "190px",
      padding: "28px 4px 20px 20px",
      boxShadow: " 0 7px 15px 0 rgba(23, 115, 166, 0.07)",
      backgroundColor: " #F4F4F4",
    },
  },
  buyCurrency: {
    width: "190px",
    height: "36px",
    margin: "0 134px 0px 0",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "2",
    textAlign: "left",
    font: "normal normal bold 14px/17px Inter",
    letterSpacing: "0px",
    color: "#363A46",
    opacity: "1",
  },
  whatCurrencies: {
    width: "270px",
    height: "22px",
    margin: "5px 43px 18px 0",
    fontSize: "15px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.57",
    letterSpacing: "normal",
    textAlign: "left",
    font: "normal normal normal 16px/20px Inter",
    color: "#29313A",
    opacity: 1,
  },

}));
const SidePanel1 = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.card}>
        <Typography className={classes.buyCurrency}>Vendor Details-</Typography>
        <Typography className={classes.whatCurrencies}>Vendor No-</Typography>
        <Typography className={classes.whatCurrencies}>Balance-</Typography>
        <Typography className={classes.whatCurrencies}>Outstanding Orders-</Typography>
        <Typography className={classes.whatCurrencies}>Amt Received-</Typography>
        <Typography className={classes.whatCurrencies}>Outstanding-</Typography>
        <Typography className={classes.whatCurrencies}>Total-</Typography>
        <Typography className={classes.whatCurrencies}>Overdue Amount-</Typography>
        <Typography className={classes.whatCurrencies}>Invoice Prepayment Amount-</Typography>
      </div>
    </div>
  );
};
export default SidePanel1;

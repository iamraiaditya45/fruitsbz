import React from "react";
import TextField from "@mui/material/TextField";
import { ClassNames } from "@emotion/react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import Divider from '@mui/material/Divider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import { Typography, useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  field: {
    marginTop: "180px",
    marginLeft: "20px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "80px",
      marginLeft: "20px",
    },
  },

  textFieldContainer: {
    display: "flex",
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexWrap: "wrap",
      flexDirection:"column",
    },
  },
  textField: {
    width: "610px",
    margin: "15px",
    [theme.breakpoints.down("sm")]: {
      width: "300px",
      margin: "15px",
      marginLeft:"25px"
    },
  },
  textFieldSmall:{
   margin:"15px",
   width:"290px",
   [theme.breakpoints.down("sm")]: {
    width: "300px",
    margin: "15px",
    marginLeft:"25px"
  },
  },
  supplier: {
    font: "normal normal bold 18px/21px Inter",
    letterSpacing: "0px",
    color: "#29313A",
    opacity: 1,
    marginLeft:"15px",
    [theme.breakpoints.down("sm")]: {
      font: "normal normal bold 22px/21px Inter",
      letterSpacing: "0px",
      color: "#29313A",
      opacity: 1.5,
      marginLeft:"28px",
    },
  },
  divider:{
      width:"1250px",
      margin:"15px",
      color:"black",
      [theme.breakpoints.down("sm")]: {
        width:"300px",
        marginLeft:"25px",
        color:"black",
      }, 
  }
}));
const SupplierDetail = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.field}>
        <Typography className={classes.supplier}>Supplier Details</Typography>
        <div className={classes.divider}>
        <Divider  />
        </div>
        <div className={classes.textFieldContainer}>
          <div className={classes.textField}>
            <TextField className={classes.textField} label="Supplier Name *" ></TextField>
          </div>
          <div className={classes.textField}>
            <TextField className={classes.textField} label="Supplier Address *"><MenuItem></MenuItem></TextField>
          </div>
          <div className={classes.textField}>
            <TextField className={classes.textField} label="Unit *"/>
          </div>
          <div className={classes.textField}>
            <TextField className={classes.textField} label="Transaction Date*" />
          </div>
          <div className={classes.textField}>
            <TextField className={classes.textField} label="Ouote Number"/>
          </div>
          <div className={classes.textField}>
            <TextField className={classes.textField} label="Price List"/>
          </div>
          <div className={classes.textField}>
            <TextField className={classes.textField} label="Invoice Number"/>
          </div>
          <div className={classes.textField}>
            <TextField className={classes.textField} label="Invoice Date"/>
          </div>
          <div className={classes.textField}>
            <TextField className={classes.textField} label="Delivery Note"/>
          </div>
          <div className={classes.textField}>
            <TextField className={classes.textField} label="Commision Agent"/>
          </div>
          <div className={classes.textField}>
            <TextField className={classes.textField} label="Quote Date"/>
          </div>
          
              <div className={classes.textFieldSmall}>
            <TextField className={classes.textFieldSmall} label="Item Code"/>
            </div>
            <div className={classes.textFieldSmall}>
            <TextField className={classes.textFieldSmall} label="Price"/>
            </div>
        </div>
      </div>

    </>
  );
};
export default SupplierDetail;

// import * as React from 'react';
// import Paper from '@mui/material/Paper';
// import InputBase from '@mui/material/InputBase';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import DirectionsIcon from '@mui/icons-material/Directions';

// export default function CustomizedInputBase() {
//   return (
//     <Paper
//       component="form"
//       sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
//     >
//       <IconButton sx={{ p: '10px' }} aria-label="menu">
//         <MenuIcon />
//       </IconButton>
//       <InputBase
//         sx={{ ml: 1, flex: 1 }}
//         placeholder="Search Google Maps"
//         inputProps={{ 'aria-label': 'search google maps' }}
//       />
//       <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
//         <SearchIcon />
//       </IconButton>
//       <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
//       <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
//         <DirectionsIcon />
//       </IconButton>
//     </Paper>
//   );
// }

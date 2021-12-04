import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  IconButton,
  ListItemText,
  makeStyles,
  Drawer,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import PublishOutlinedIcon from '@mui/icons-material/PublishOutlined';
import { Button } from "@material-ui/core";
import Rohit from './rohit.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const DrawerComponent = () => {
  const useStyles = makeStyles(theme => ({
    drawerContainer: {
        backgroundColor:"white",
        backgroundColor: "#455060",
    },
    iconButtonContainer: {
      marginLeft: 'auto',
      color: 'black',
      [theme.breakpoints.down('sm')]: {
      marginRight:390,
      padding: "15px 1px 10px 3px",
      marginLeft:"-15px"
      
      }
    },

    menuIconToggle: {
      fontSize: 32,
      color:"white",
      marginTop:"8px",
      marginLeft:"9px"
    },
    btn:{
        border:"1px solid white",
        color:"white",
        padding:" 2px 12px 2px 12px",
        marginLeft:"15px"
      },
      btnContained:{
        backgroundColor:"#455060",
        color:"white",
        padding:"2px",
        width:"150px",
        marginLeft:"15px",
        border:"1px solid white",
      },
      top:{
          height:"100px",
          backgroundColor: "#455060",
          marginTop:"-20px"
      },
      iconBox:{
          height:"70px"
,      },
Create:{
    marginLeft:"50px",
    fontSize:"17px",
    color:"black",
    width:"250px",
    padding:"25px",
    fontWeight:"bold",
},
menuIconList:{
    fontSize:"40px",
    marginLeft:"-4px",
    height:"55px",
    fontSize:"30px",
    marginTop:"-6px",
    width:"55px",
    background: "#246BD6 0% 0% no-repeat padding-box",
    boxShadow: "0px 3px 6px #00000029",
    opacity: 1,
},
signUp: {
    marginLeft: "15px",
    // marginTop: "38px",
    fontSize: "17px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "120px",
      marginTop: "28px",
      fontSize: "18px",
      color:"white"
    },
  },
active:{
    display:"flex",
    marginTop:"-7px",

  },
  activeText:{
    fontSize:"13px",
    fontWeight:"lighter",
    color: "#FFFFFF",
    marginLeft:"18px",
     marginTop:"-10px",
     [theme.breakpoints.down("sm")]: {
      fontSize:"13px",
      fontWeight:"lighter",
      color: "#FFFFFF",
      marginLeft:"120px",
       marginTop:"-7px",
    },
  },
  arrowDown:{
    marginTop:"-14px",
    [theme.breakpoints.down("sm")]: {
      marginTop:"-12px",
      color:"white"
    },
  },
  rohit:{
    height:"10%",
    width:"10%",
    marginTop:"10px",
    marginLeft:"14px",
    [theme.breakpoints.down("sm")]: {
      height:"13%",
      width:"13%",
      marginTop:"12px",
      marginLeft:"8px",
    },
  },
  }));

  const [openDrawer, setOpenDrawer] = useState(false);

  //Css
  const classes = useStyles();
  return (
    <>
      <Drawer
        anchor='right'
        classes={{ paper: classes.drawerContainer }}
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
        onOpen={() => setOpenDrawer(true)}>
       
        <div className={classes.Left2}>
              <Link
                  to="/term"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <p className={classes.mid}>TERM&CONDITIONS</p>
                </Link>
                <Link
                  to="/refund"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <p className={classes.mid}>REFUND&CANCELL</p>{" "}
                </Link>
                <Link
                  to="/privacy"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <p className={classes.mid}>PRIVACY</p>{" "}
                </Link>
                <Link
                  to="/aboutus"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <p className={classes.mid}>ABOUT US</p>{" "}
                </Link>
              {/* <Button variant="outlined" className={classes.btn}>AboutUs</Button>
              <Button variant="outlined" className={classes.btn}>Privacy Policy</Button>
              <Button variant="outlined" className={classes.btn}>Refund&Cancellation</Button>
              <Button variant="outlined" className={classes.btn}>Terms&Condition</Button> */}
                  </div>

      </Drawer>
      {/* Since this is inside our toolbar we can push it to the end of the toolbar */}
      <IconButton
        className={classes.iconButtonContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple>
                          <ListItemIcon className={classes.menuIconList}>
        <MenuIcon className={classes.menuIconToggle} />
        </ListItemIcon>
        <Typography className={classes.Create}>Create a purchase recipt</Typography>
      </IconButton>
    </>
  );
};

export default DrawerComponent;
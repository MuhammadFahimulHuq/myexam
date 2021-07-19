import React from 'react'
import classes from './NavbarOne.module.css'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Login from '../../containers/Builder/Login';
import { Signup } from '../../containers/Builder/Signup';
import { Link } from 'react-router-dom';
const NavbarOne = () => {
    return (
        <div className={classes.container}>
     <ul className={classes.Navbar}>
      <li className={classes.MainTitle}>
         <Link to="/">myExam</Link> 
      </li>
      <li className={classes.login}>
       <Popup trigger={<button className={classes.button}> login</button>} position="bottom center">
           <Login /></Popup>  
      </li>
      <li className={classes.signup}>
      <Popup trigger={<button className={classes.button}> Signup</button>} position="bottom center">
           <Signup /></Popup>  
           </li>
     </ul>
        </div>
    )
}

export default NavbarOne

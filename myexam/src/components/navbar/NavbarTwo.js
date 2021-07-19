import React from 'react'
import classes from './NavbarTwo.module.css'
import Popup from 'reactjs-popup';
import { Link } from 'react-router-dom';
export const NavbarTwo = () => {
    return (
        <div>
            <div className={classes.container}>
                <ul className={classes.Navbar}>
                    <li className={classes.MainTitle}>
                    <Link to="/">myExam</Link>
                    </li>
                    <li className={classes.username}>
                        <Popup trigger={<button className={classes.button}> Teacher:MD Fahim</button>} position="bottom center">
                            logout</Popup>
                    </li>

                </ul>
            </div>
        </div>
    )
}

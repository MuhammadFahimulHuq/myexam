import React from 'react'
import { ViewClasses } from '../../components/TeacherDashboard/ViewClasses'
import {Addclasses} from './../../components/TeacherDashboard/Addclasses'
import classes from './TeacherDashboard.module.css'
export const TeacherDashboard = () => {
    return (
        <div>
            <div className={classes.titlebox}>
            <p className={classes.title}>Teacher Dashboard</p>
            </div>
 
         <Addclasses />
         <ViewClasses />
        </div>
    )
}

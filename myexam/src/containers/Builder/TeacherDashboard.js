import React from 'react'
import { ViewClasses } from '../../components/TeacherDashboard/Class/ViewClasses'
import {Addclasses} from './../../components/TeacherDashboard/Class/Addclasses'
import classes from './TeacherDashboard.module.css'
export const TeacherDashboard = () => {

    const data={
        "classDetails":[
            {
                ClassCode : 'CSE207',
            ClassName : 'Discrete Mathematics',
            Section: '2',
            Enrolled: '25'
    
        },
        {
            ClassCode : 'CSE209',
            ClassName : 'Algorithms',
            Section: '1',
            Enrolled: '25'
        }
        ]
      

    }

    return (
        <div>
            <div className={classes.titlebox}>
            <p className={classes.title}>Teacher Dashboard</p>
            </div>
 
         <Addclasses />
        {data.classDetails.map((data)=><ViewClasses classData={data}/>)} 
        </div>
    )
}

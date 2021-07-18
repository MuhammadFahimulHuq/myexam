import React from 'react'
import  classes  from './ViewClasses.module.css'
import {PopupForm} from './../Form/PopupForm'

export const ViewClasses = ({classData}) => {


    return (
        <div className={classes.container}>
           <table className={classes.table}>
           <tr >
        <th className={classes.header}>Class Code</th>
        <th className={classes.header}>Class Name</th>
        <th className={classes.header}>Section</th>
        <th className={classes.header}>Enrolled</th>
        <th className={classes.header}>Make Question</th>
        <th className={classes.header}>Delete Class</th>
    </tr>
    <tr>
        <td className={classes.item}>{classData.ClassCode}</td>
        <td className={classes.item}>{classData.ClassName}</td>
        <td className={classes.item}>{classData.Section}</td>
        <td className={classes.item}>{classData.Enrolled}</td>
        <td className={classes.item}><PopupForm data={classData.ClassCode}/></td>
        <td className={classes.item}><button>delete</button></td>
    </tr>
  
           </table>
  
        </div>
    )
}

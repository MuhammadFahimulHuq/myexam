import React from 'react'
import  classes  from './ViewClasses.module.css'
export const ViewClasses = () => {
    const data={
        ClassCode : 'CSE207',
        ClassName : 'Discrete Mathematics',
        Section: '2',
        Enrolled: '25'
    }

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
        <td className={classes.item}>{data.ClassCode}</td>
        <td className={classes.item}>{data.ClassName}</td>
        <td className={classes.item}>{data.Section}</td>
        <td className={classes.item}>{data.Enrolled}</td>
        <td className={classes.item}><button>+</button></td>
        <td className={classes.item}><button>delete</button></td>
    </tr>
  
           </table>
  
        </div>
    )
}

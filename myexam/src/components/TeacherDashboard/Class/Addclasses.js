import React, { useState } from 'react'
import classes from './Addclasses.module.css'
export const Addclasses = () => {

const [className,setClassName]= useState('')
const [classCode,setClassCode]=useState('')
const [sectionNo,setSectionNo]=useState('')

const handleSubmit=event=>{
    event.preventDefault()
    alert('New Class added')
}

const handleClassNameChange=event=>{
    setClassName(event.target.value)
}
const handleClassCodeChange=event=>{
    setClassCode(event.target.value)
}
const handleSectionNoChange=event=>{
    setSectionNo(event.target.value)
}

    return (
        <div className={classes.container} >
           <p className={classes.classheader}>Add Class</p> 
        
           <form onSubmit={handleSubmit} className={classes.form} >
                <label><b>Classname</b></label>
                <input type="text" value={className} onChange={handleClassNameChange}></input>
                <label><b>Class Code</b></label>
                <input type="text" value={classCode} onChange={handleClassCodeChange}></input>
                <label><b>Section Number</b></label>
                <input type="number" value={sectionNo} onChange={handleSectionNoChange}></input>
            <button type="submit" >Add Class</button>
            </form>
       
           

        </div >
    )
}

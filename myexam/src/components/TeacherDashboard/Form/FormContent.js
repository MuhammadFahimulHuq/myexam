import React, { useState } from 'react'
import classes from './FormContent.module.css'
export const FormContent = () => {
    

const handleSubmit=event=>{
    event.preventDefault();
}
const [ExamType,setExamType] = useState('')
const handleExamTypeChange = event =>{
    setExamType(event.target.value)
}
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Exam Type:</label>
                <input type="text" value={ExamType} onChange={handleExamTypeChange}></input>
                <label>Exam Date:</label>
                <input type="date" ></input>
                <label>Exam Time:</label>
                <input type="time" />
            
                <button type="submit">Submit</button>
             
           
            </form>
        </div>
    )
}

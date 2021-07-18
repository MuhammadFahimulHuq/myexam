import React, { useState } from 'react'
import { QuestionContent } from './QuestionContent';
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
                <label>Exam Duration:</label>
                <input type="time" />
               <QuestionContent />
            </form>
        </div>
    )
}

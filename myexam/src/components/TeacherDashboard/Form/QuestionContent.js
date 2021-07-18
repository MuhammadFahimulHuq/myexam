import React, { useState } from 'react'

import classes from './QuestionContent.module.css'

export const QuestionContent = () => {
    
    const [value, setValue]= useState('')
 

    
  const handleQTypeChange= event =>{
      setValue(event.target.value)

  }
  const handleSubmit=event=>{
      event.preventDefault()
  }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label>Choose Question Type:</label>
    
                <select value={value} onChange={handleQTypeChange}>
                    <option value="M.C.Q" >M.C.Q</option>
                    <option value="ShortQ">Short Question</option>
                    <option value="ParagraphQ">Paragraph Question</option>
                </select>
              
           
              <button type="submit">Submit</button>
              
            
            </form>
        </div>
    )
}

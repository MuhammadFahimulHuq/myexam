import React, { useState } from 'react'

export const SelectQuestionType = () => {
    const [Question,setQuestion] = useState('')
    const [McqAnswer,setMcqAnswer] = useState('')
   const[ShowMcqAnswer,setShowMcqAnswer] = useState(true)

    const handleMcqAnswerChange=event=>{
        setMcqAnswer(event.target.value)
    }
    const handleQuestionChange=event=>{
        setQuestion(event.target.value)
    }
    const AddAnotherOption=()=>{

    }

    return (
        <div>
           
                <div>
                 <input type="text" value={Question} onChange={handleQuestionChange} placeholder="Write Question"></input>
                </div>
            {
                ShowMcqAnswer?   <div>
                {/* ADD CHOICE FOR MUTIPLE QUESTION */}
                
                <input type="radio" value={McqAnswer}></input>
                <label><input type="text" value={McqAnswer} onChange={handleMcqAnswerChange}></input></label>
                <button type="button" onClick={AddAnotherOption}>Add Another option</button>
            </div>:null
            }
          
            <label>Choose Question Type:</label>
          <button type="button" onClick={()=>setShowMcqAnswer(true)}>Multiple choice question</button>

          <button type="button" onClick={()=>setShowMcqAnswer(false)}>Short question
               </button >
               <button onClick={()=>setShowMcqAnswer(false)}>Paragraph question
               </button >
          
          
        </div>
    )
}


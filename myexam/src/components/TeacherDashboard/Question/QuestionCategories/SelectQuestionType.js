import React, { useState } from 'react'


export const SelectQuestionType = (props) => {
    const [Question,setQuestion] = useState('')
    const [Duration,setDuration] = useState('')
   const[ShowMcqAnswer,setShowMcqAnswer] = useState(true)
   const [inputFields,setInputFields] = useState([
       {McqAnswer:'' },
      
    ])
    const handleDurationChange=(event)=>{
        setDuration(event.target.value)
    }
 
    const handleQuestionChange=event=>{
        setQuestion(event.target.value)
    }
    const AddAnotherOption=()=>{
        setInputFields([...inputFields,{McqAnswer:''}])
    }
    const handleMcqOptionChange=(index,event)=>{
    
        const values = [...inputFields];
        values[index][event.target.name] = event.target.value;
        setInputFields(values);
    }
    const handleRemoveMcqOption=(index)=>{
        const values = [...inputFields];
        values.splice(index,1);
        setInputFields(values);
    }
  
    return (
        <div>
             
                <div>
               
                 <input type="text" value={Question} onChange={handleQuestionChange} placeholder="Write Question"></input>
                 <label>Answer Duration:</label>
                <input type="time" value={Duration} onChange={handleDurationChange}/>
                </div>
            {
                ShowMcqAnswer?   <div>
                {/* ADD CHOICE FOR MUTIPLE QUESTION */}
                {inputFields.map((inputField,index)=>
                <div key={index}>
                    <input type="radio" value={inputField.McqAnswer}></input>
                   <label><input type="text" name="McqAnswer" value={inputField.McqAnswer} onChange={event =>handleMcqOptionChange(index,event)}></input></label>
                   <button type="button" onClick={()=>handleRemoveMcqOption(index)}>remove</button>
                </div>
                   
                )}
             
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


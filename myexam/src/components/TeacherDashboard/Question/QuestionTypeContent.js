import React, { useState } from 'react'
import {SelectQuestionType} from './../Question/QuestionCategories/SelectQuestionType'
import classes from '../Question/QuestionTypeContent.module.css'
export const QuestionTypeContent = (inputs) => {
   
    //parents components 

    
 ///************ */
  
    const[inputList,setInputList]=useState([
        {
            questionCount:1
        }
    ])
   
    const handleAddAnotherQClick=()=>{
      setInputList([...inputList,{questionCount:1}])
     
    }
    const handleRemoveOption=(index)=>{
        const values = [...inputList];
        values.splice(index,1);
        setInputList(values)
    }
    const handleSubmit=event=>{
        event.preventDefault();
      
    }
    return (
        <div >

            <form onSubmit={handleSubmit}>
            {inputList.map((inputList,index)=>
             <div key={index}>
             <p>Question No:{index+1}</p>
             <SelectQuestionType  />
             <button type="button" onClick={()=>handleRemoveOption(index)}>Remove Question</button>
             </div>
            )}
           <div className={classes.container}>
           <button type="button" onClick={handleAddAnotherQClick}>Add Another Question</button>
          <button className={classes.submitButton} type="submit" onSubmit={handleSubmit}>Submit</button>
           </div>
           
           
               </form>
        </div>
    )
}
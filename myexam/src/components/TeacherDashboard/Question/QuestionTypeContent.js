import React from 'react'
import {SelectQuestionType} from './../Question/QuestionCategories/SelectQuestionType'
export const QuestionTypeContent = () => {
   
    const handleSubmit=event=>{
        event.preventDefault();
    }

    return (
        <div>

<form onSubmit={handleSubmit}>
            <SelectQuestionType />
            </form>
        </div>
    )
}
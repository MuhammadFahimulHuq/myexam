import React from 'react'
import Footer from '../components/footers/Footer'
import { NavbarTwo } from '../components/navbar/NavbarTwo'
import { QuestionDashboard } from '../containers/Builder/QuestionDashboard'

export const QuestionLayout = () => {
    return (
        <div>
            <NavbarTwo />
            <QuestionDashboard />
           
        </div>
    )
}

import React from 'react'
import { NavbarTwo } from '../components/navbar/NavbarTwo'
import { TeacherDashboard } from '../containers/Builder/TeacherDashboard'
import Footer from './../components/footers/Footer'
export const TeacherLayout = () => {
    return (
        <div>
            <NavbarTwo />
            <TeacherDashboard/>
            <Footer />
        </div>
    )
}

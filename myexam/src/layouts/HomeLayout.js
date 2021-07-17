import React from 'react'
import Footer from '../components/footers/Footer'
import LoginSection from '../components/Login/LoginSection'
import NavbarOne from '../components/navbar/NavbarOne'


function Layout() {
    return (
        <div>
            <NavbarOne />
            <LoginSection />
       
            <Footer />
        </div>
    )
}

export default Layout

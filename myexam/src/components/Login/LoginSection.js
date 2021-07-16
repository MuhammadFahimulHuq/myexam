import React from 'react'
import clasess from './LoginSection.module.css'
function LoginSection() {
    return (
        <div className={clasess.container}>
            
            <img className={clasess.logo} src="https://image.flaticon.com/icons/png/512/2641/2641409.png" alt="logo"></img>
            <div className={clasess.subtitle}>
            <p>Give or Take exams.</p>
                <p>If not register! Register Now.</p>
                                {/* {register} */}
            </div>
        </div>
    )
}

export default LoginSection


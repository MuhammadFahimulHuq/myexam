import React, { useState } from 'react'
import classes from './SignupForm.module.css'
export const SignupForm = () => {
    
const [Email,setEmail] = useState('')
const [Password,setPassword]=useState('')
const [RepeatPassword,setRepeatPassword] = useState('')
const [Role,setRole]=useState('')
    const handleSubmit = event =>{
        event.preventDefault();
        alert('You have submitted the form ')
    }
    const handleEmailChange= event =>{
    setEmail(event.target.value)
    }
    const handlePasswordChange = event => {
        setPassword(event.target.value)
    }
   const handleRepeatPasswordChange = event =>{
       setRepeatPassword(event.target.value)
   }
   const HandleRoleChangeT=event=>{
       setRole(event.target.value)
   }
   const HandleRoleChange=event=>{
       setRole(event.target.value)
   }

    return (
        <div>
   <form onSubmit={handleSubmit} >
           <h1>Register</h1>

                        <label ><b>Email</b></label>
                        <input type="text" placeholder="Enter Email"  value={Email} onChange={handleEmailChange}/>

                        <label ><b>Password</b></label>
                        <input type="password" placeholder="Enter Password"  value={Password} onChange={handlePasswordChange}></input>

                        <label ><b>Repeat Password</b></label>
                        <input type="password" placeholder="Enter Repeat Password"  value={RepeatPassword} onChange={handleRepeatPasswordChange}></input>
                        {/* <input type="radio" value="Student" onClick={HandleRoleChange} > </input>
                        <label ><b>Student</b></label>
                        <input type="radio" value="Teacher" onClick={HandleRoleChangeT}></input>
                        <label ><b>Teacher</b></label> */}
                        <button type="submit" className="btn">Register</button>

           </form>

        </div>
    )
}

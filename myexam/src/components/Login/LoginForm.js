import React,{useState} from 'react'
import classes from './LoginForm.module.css'



const LoginForm = () => {

const [Email,setEmail] = useState('')
const [Password,setPassword]=useState('')

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
   
    return (
        <div className={classes.formpopup}>


           <form onSubmit={handleSubmit} className={classes.formcontainer}>
           <h1>Login</h1>

                        <label ><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" name="email" value={Email} onChange={handleEmailChange}/>

                        <label ><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" value={Password} onChange={handlePasswordChange}></input>

                        <button type="submit" className="btn">Login</button>

           </form>
   

        </div>
    )
}

export default LoginForm

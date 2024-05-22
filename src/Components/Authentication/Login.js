import React, {  useRef, useState } from "react";
import {Link, useHistory} from "react-router-dom/cjs/react-router-dom"
import classes from './Login.module.css'
import  Button from "react-bootstrap/Button";
import  FloatingLabel  from "react-bootstrap/FloatingLabel";
import  Form  from "react-bootstrap/Form";

function Login (){
    const [isvalidated,setvalidated]=useState(false)
    const emailref = useRef()
    const passwordref = useRef()
    const history = useHistory();
    const submitformHandler = async (event)=>{ 
        event.preventDefault()
        let formvalid = false;
        
        const EnteredEmail = emailref.current.value
        const EnteredPassword = passwordref.current.value

        if(!EnteredEmail.trim().includes('@')){
            
                    alert('Enter Email Correctly')
                    setvalidated(false)
        }
        else{
            if(EnteredPassword.length < 6){
                alert('PassWord Must Contain 6 letters')
                setvalidated(false)
              }
              if(EnteredPassword.length >= 6){
                    formvalid= true
                    setvalidated(true)
                    
              }
        }

        if(formvalid){
       
          const data ={
                    email: EnteredEmail,
                    password: EnteredPassword,
                    returnSecureToken : true
          } 
          //console.log(data)

          const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDAzYMyrP5pUcCeJ9QKrDnuXPIreusRbFw',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
          })

          if(response.ok){
            console.log('Login successfull')
            
            const responsedata =await response.json()
            console.log(responsedata)
            localStorage.setItem('token',responsedata.idToken)
            history.push('/Home')
          }
          else {
            const errorData = await response.json(); 
            setvalidated(false)
            alert(errorData.error.message); 
        }
        }
        

        

    }


   

    return <div className={classes["login-container"]}>

        <Form validated={isvalidated} className={classes['login-box']}>
            <h2>Login</h2>
            <FloatingLabel  controlId="email" label='Email' className="mb-3"  >
                <Form.Control type='email' placeholder='dsa' required ref={emailref} ></Form.Control >
            </FloatingLabel>
            <FloatingLabel controlId="password" label='Password' className="mb-3"  >
                <Form.Control type='password' placeholder='dsa' ref={passwordref} ></Form.Control>
            </FloatingLabel>
            <Link className={classes['link']} to='/forgetpassword'>Forget Password!</Link>
            <br></br>
            <Button className="btn-dark btn-outline-info" onClick={submitformHandler}>Submit</Button>
            <br>
            </br>
            <Link className={classes['link']} to='/signup'>If You Don't Have An Account Signup !</Link>

        </Form>
    </div>

}

export default Login;
import React, {  useRef, useState } from "react";
import {Link, useHistory} from "react-router-dom/cjs/react-router-dom"
import classes from './Login.module.css'
import  Button from "react-bootstrap/Button";
import  FloatingLabel  from "react-bootstrap/FloatingLabel";
import  Form  from "react-bootstrap/Form";
import axios from "axios";


function Login (){
    const [isvalidated,setvalidated]=useState(false)
    const emailref = useRef()
    const passwordref = useRef()
    const history = useHistory();
    const submitformHandler = async (event)=>{ 
        try{
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
              } 
              //console.log(data)
    
              const response = await axios.post('http://localhost:4000/login', data)
    
              if(response){
                console.log('Login successfull')
                console.log(response)
                localStorage.setItem('token',response.data.idToken)
                history.push('/Home')
              }
              else {
                setvalidated(false)
                alert(response.data.message); 
            } 
        }
        }
        catch(error){
            setvalidated(false);
            alert(error.response?.data?.message || 'Login failed. Please try again.');
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
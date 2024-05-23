import React, {  useRef, useState } from "react";
import  Button from "react-bootstrap/Button";
import  FloatingLabel  from "react-bootstrap/FloatingLabel";
import  Form  from "react-bootstrap/Form";
import classes from './Signup.module.css'
import { Link  , useHistory} from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

function Signup (){
    const [isvalidated,setvalidated]=useState(false)
    const emailref = useRef()
    const passwordref = useRef()
    const conformpasswordref = useRef() 
    const history = useHistory()
    const submitformHandler = async (event)=>{ 
        event.preventDefault()
        let formvalid = false;
        
        const EnteredEmail = emailref.current.value
        const EnteredPassword = passwordref.current.value
        const conformpassword = conformpasswordref.current.value

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
                  if (EnteredPassword !== conformpassword){
                    alert('PassWord MisMatch ')
                    setvalidated(false)
                  }
                  else{
                    formvalid= true
                    setvalidated(true)
                    
                  }
              }
        }

        if(formvalid){
       
          const data ={
                    email: EnteredEmail,
                    password: EnteredPassword
          } 
          //console.log(data)

          const response = await axios.post('http://localhost:4000/signup',
            data
          )

          if(response){
            alert(response.data.message)
            console.log('signup successfull')
            history.push('/login')

          }
          else {
            setvalidated(false)
            alert('Signup failed')
        }
        }
        

        

    }


   

    return <div className={classes["signup-container"]}>

        <Form validated={isvalidated} className={classes['signup-box']}>
            <h2>Signup</h2>
            <FloatingLabel  controlId="email" label='Email' className="mb-3"  >
                <Form.Control type='email' placeholder='dsa' required ref={emailref} ></Form.Control >
            </FloatingLabel>
            <FloatingLabel controlId="password" label='Password' className="mb-3"  >
                <Form.Control type='password' placeholder='dsa' ref={passwordref} ></Form.Control>
            </FloatingLabel>
            <FloatingLabel controlId="password" label='Conform Password' className="mb-3">
                <Form.Control type='password' placeholder='dsa' ref={conformpasswordref} ></Form.Control>
            </FloatingLabel>
            <Button className="btn-dark btn-outline-info" onClick={submitformHandler}>Submit</Button>
            <br></br>
            <Link className={classes['link']} to='/login'>If You Already Have An Account Login !</Link>
        </Form>
    </div>

}

export default Signup
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import axios from "axios";


const CustomLogForm = () => {

    const [email,setEmail] = useState("");
    const [password,setPass] = useState("");
    const [loading,setIsloading] = useState(false);
    const [login,setLogin] = useState(false);
    const SignUpHandler = async (event)=>{
       
       try{
        event.preventDefault();
        const obj = {"email":email,"password":password};
        if(email && password){
            setIsloading(true);
        }
        
        const response = await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD7sUmCwmx9dDxJGu9oehaoEmJKUtqm9k8",obj)
        const data = response.data;
        console.log(data);
        setEmail("");
        setPass("");
        setIsloading(false);
       }catch(error){
        alert(error.response.data.error.message);
        // console.log(error.response);
        setIsloading(false);
       }

    }
    const SignInHandler = async (event)=>{
       
       try{
        event.preventDefault();
        const obj = {"email":email,"password":password};
        if(email && password){
            setIsloading(true);
        }
        const response = await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD7sUmCwmx9dDxJGu9oehaoEmJKUtqm9k8",obj)
        const data = response.data;
        console.log(data);
        setEmail("");
        setPass("");
        setIsloading(false);
       }catch(error){
        alert(error.response.data.error.message);
        // console.log(error.response);
        setIsloading(false);
       }

    }
    const LogHandler = ()=>{
        setLogin(!login);
    }

    return <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" ,height: "80vh"}}>
        <Card style={{ width: '18rem', backgroundColor: "orange" }}>
        <Card.Body>
            <h2>{login? "Login":"Sign Up"}</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={e=>setEmail(e.target.value)} value={email}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"  onChange={e=>setPass(e.target.value)} value={password}/>
                </Form.Group>
                {!login && <Button variant="primary" type="submit" onClick={SignUpHandler}>
                    {loading && !login ?"Loading...":"Create Account"}
                </Button>}
                {login && <Button variant="primary" type="submit" onClick={SignInHandler}>Login</Button>}
                <br/>
                <Button variant="outline-info" style={{color:"white"}} onClick={LogHandler}>{login? "Create new Account":"Login with existing account"}</Button>
            </Form>
        </Card.Body>
    </Card>
    </div>
}
export default CustomLogForm;
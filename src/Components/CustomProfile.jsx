import React, { useContext, useState } from "react";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Context } from "../Store/ContextProvider";
import axios from "axios";

const CustomProfile = ()=>{
      
    const [newpass,setNewPass] = useState("");
    const ctx = useContext(Context);

    const ChangePasswordHandler = async (e)=>{
        try{
            e.preventDefault();
            const obj = {"idToken":ctx.Token,"password":newpass,"returnSecureToken":true}
            const response = await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyD7sUmCwmx9dDxJGu9oehaoEmJKUtqm9k8",obj)
            console.log(response.data)
            alert("password Changed")
        }
        catch(error){
            alert(error.response.data.error.message)
        }
       

    }

   return <div>
    <h1>Your User Profile</h1>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"40vh"}}>
    <Card style={{ width: '18rem' ,borderColor:"black"}}>
      <Card.Body>
      <>
      <Form.Label htmlFor="inputPassword5">New Password</Form.Label>
      <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        placeholder="New Password"
        onChange={e=>setNewPass(e.target.value)}
        value={newpass}
      />
    </>
        <Button variant="primary" onClick={ChangePasswordHandler}>Change Password</Button>
      </Card.Body>
    </Card>
    </div>
   </div>
}
export default CustomProfile;
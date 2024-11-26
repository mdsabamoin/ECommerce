import React from "react";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const CustomProfile = ()=>{
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
      />
    </>
        <Button variant="primary">Change Password</Button>
      </Card.Body>
    </Card>
    </div>
   </div>
}
export default CustomProfile;
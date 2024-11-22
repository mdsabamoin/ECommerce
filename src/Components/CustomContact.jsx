import React, { useState } from "react";
// import {useFirebase} from "../FireBase/FireBaseContext";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
const CustomContact = () => {
    // const firebase = useFirebase();
    const[name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [pn,setPn] = useState("");

    const FormSubmitHandler = async (e)=>{
        try{
             e.preventDefault();
        const obj ={"name":name,"email":email,"phoneN":pn};
        const response = await axios.post("https://ecommerce-react-bootstrap-default-rtdb.firebaseio.com/users.json",obj);
        console.log(response.data);
        }
        catch(error){
            console.log(error.message);
        }
       
    }

    return<div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>

        <Card style={{ width: '18rem' ,borderColor:"#333"}}>
            
            <Card.Body>
                <Form onSubmit={FormSubmitHandler}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Name"  onChange={e=>setName(e.target.value)} value={name}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" onChange={e=>setEmail(e.target.value)} value={email}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="tel" placeholder="Enter PhoneNumber" onChange={e=>setPn(e.target.value)} value={pn}/>
                    </Form.Group>


                    <Button variant="success" type="submit">
                        Submit
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    </div>
}
export default CustomContact
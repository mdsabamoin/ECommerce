import React,{useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';



const CustomForm = ()=>{

  const [title,setTitle] = useState("");
const [releaseDate,setReleaseDate] = useState("");
const [openingText,setOpeningText] = useState("");

const TitleHandler = (event) =>{
    setTitle(event.target.value)
}
const ReleaseDateHandler = (event) =>{
    setReleaseDate(event.target.value)
}
const OpeningTextHandler = (event) =>{
    setOpeningText(event.target.value)
}

  const FormHandler = (event)=>{
    event.preventDefault();
    const obj={"title":title,"releaseDate":releaseDate,"openingText":openingText};
    console.log(obj);
    setTitle("");
    setOpeningText("");
    setReleaseDate("");
    
  }
 


return <div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}><Card body style={{width:"50%",borderColor: '#333'}}> <Form onSubmit={FormHandler}>
<Form.Group className="mb-1" controlId="exampleForm.ControlInput1" >
  <Form.Label>Title</Form.Label>
  <Form.Control type="text" style={{borderColor: '#333'}}  value={title} onChange={TitleHandler}/>
</Form.Group>
<Form.Group className="mb-1" >
  <Form.Label>Opening Text</Form.Label>
  <Form.Control as="textarea" rows={4} style={{borderColor: '#333'}} value={openingText} onChange={OpeningTextHandler}/>
</Form.Group>
<Form.Group className="mb-1" >
  <Form.Label>Release Date</Form.Label>
  <Form.Control  style={{borderColor: '#333'}} value={releaseDate} onChange={ReleaseDateHandler} />
</Form.Group>
<Button type="submit">Submit</Button>
</Form>
</Card> 
</div>
}
export default CustomForm;
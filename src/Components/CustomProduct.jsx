import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from "react-bootstrap";
import CustomHoodie from "./Customhoodie";
import {Link, useNavigate } from "react-router-dom";
// import { Outlet } from "react-router-dom";


const CustomProduct = ()=>{

 return<div><Container>
           <Row>
               <Col><img src="https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/189089/optimized_product_thumb_stream.jpg" alt="unable to load" style={{width:"50%",height:"70%"}}/><div style={{marginTop:"10px"}}><Link to="/tshirt"><Button> View </Button></Link></div></Col>
               <Col><img src="https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/193945/optimized_product_thumb_m39562.jpg" alt="unable to load" style={{width:"50%",height:"70%"}}/><div style={{marginTop:"10px"}}><Link to="/hoodie"><Button>View</Button></Link></div></Col>
               <Col><img src="https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/61691/optimized_large_thumb_32599a_copy.jpg" alt="unable to load" style={{width:"50%",height:"70%"}}/><div style={{marginTop:"10px"}}><Link to="/jeans"><Button>View</Button></Link></div></Col>
           </Row> 
           <Row>
               <Col><img src="https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/189089/optimized_product_thumb_stream.jpg" alt="unable to load" style={{width:"50%",height:"70%"}}/><div style={{marginTop:"10px"}}><Button>View</Button></div></Col>
               <Col><img src="https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/193945/optimized_product_thumb_m39562.jpg"  alt="unable to load" style={{width:"50%",height:"70%"}}/><div style={{marginTop:"10px"}}><Button>View</Button></div></Col>
               <Col><img src="https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/61691/optimized_large_thumb_32599a_copy.jpg"  alt="unable to load" style={{width:"50%",height:"70%"}}/><div style={{marginTop:"10px"}}><Button>View</Button></div></Col>
           </Row> 
           <Row>
               <Col><img src="https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/189089/optimized_product_thumb_stream.jpg" alt="unable to load" style={{width:"50%",height:"70%"}}/><div style={{marginTop:"10px"}}><Button>View</Button></div></Col>
               <Col><img src="https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/193945/optimized_product_thumb_m39562.jpg" alt="unable to load" style={{width:"50%",height:"70%"}}/><div style={{marginTop:"10px"}}><Button>View</Button></div></Col>
               <Col><img src="https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/61691/optimized_large_thumb_32599a_copy.jpg" alt="unable to load"  style={{width:"50%",height:"70%"}}/><div style={{marginTop:"10px"}}><Button>View</Button></div></Col>
           </Row> 
         
     </Container>
     
     </div>
     
     
}

export default CustomProduct;
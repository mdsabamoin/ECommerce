import React, { useContext } from "react";
import { Button, Container, Image } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Context } from "../Store/ContextProvider";
import "./CustomItems.css";
// import Image from "react-bootstrap"

const CustomItems = () => {
    const ctx = useContext(Context);
    return <Container>
        <h2 bg="light" className="fs-1">Music</h2>
        <Row className="mt-5">
            {ctx.ProductsArr.map((item, index) => 
               ( <Col sm={12} md={6} lg={6} key={index}>
                    <h3>{item.title}</h3>
                    <div className="image-zoom">
                    <img src={`${item.imageUrl}`} alt="Image not found" />
                    </div>
                    <br/>
                    <div style={{display:"flex",justifyContent:"space-around"}}>
                    <p className="fs-2">${item.price}</p>
                    <Button>Add to Cart</Button>
                    </div>
                    <br/>
                </Col>
            ))}

        </Row>
    </Container>
}

export default CustomItems;
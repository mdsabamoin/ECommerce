import React, { useContext,useEffect } from "react";
import { Button, Container, Image } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Context } from "../Store/ContextProvider";
import "./CustomItems.css";
import axios from "axios";
// import Image from "react-bootstrap"

const CustomItems = () => {
    const ctx = useContext(Context);

        useEffect(()=>{
          const fetchData = async ()=>{
                try{
                    ctx.setIsLoading(true);
                    ctx.setError(null);
                    const response = await axios.get("https://crudcrud.com/api/0eccbcaa852345aead88409bdca0c3ca/ecommerce")
                    if(response.status !== 200){
                        throw new Error("Something went wrong")
                    }
                    console.log(response);
                    const data =  response.data;
                    ctx.setProductsArr(data);
                    ctx.setIsLoading(false);
                }catch(error){
                    ctx.setError(error.message)
                    ctx.setIsLoading(false);
                }
               
            } 
            fetchData()},[]) 
    return <Container>
        {ctx.error !== null && <p>{ctx.error}</p>}
        {ctx.isLoading && ctx.ProductsArr.length == 0 && ctx.error == null && <h1>Loading....</h1>}
        {!ctx.isLoading && ctx.ProductsArr.length>0 && ctx.error == null && <h2 bg="light" className="fs-1">Music</h2>}
        {!ctx.isLoading && ctx.ProductsArr.length>0 && ctx.error == null && <Row className="mt-5">
            {ctx.ProductsArr.map((item, index) =>
            (<Col sm={12} md={6} lg={6} key={index}>
                <h3>{item.title}</h3>
                <div className="image-zoom">
                    <img src={`${item.imageUrl}`} />
                </div>
                <br />
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <p className="fs-2">${item.price}</p>
                    <Button 
                    onClick={() => { 
                        const isIteminCart = ctx.cartElements.some((Cartitem)=>Cartitem.title === item.title);
                        if(!isIteminCart){
                            ctx.setCartElements((previousState) => [...previousState, { "title": item.title, "imageUrl": `${item.imageUrl}`, "price": item.price ,"quantity":item.quantity}])
                        }
                        else if(isIteminCart){
                            ctx.setCartElements((previousState)=>previousState.map((CartItem)=>{
                               return CartItem.title === item.title?{...CartItem,"quantity":CartItem.quantity+1}:CartItem}))
                            alert("Do You want to increase the quantity");
                        }
                        
                     }}>Add to Cart</Button>
                </div>
                <br />
            </Col>
            ))}

        </Row>}
    </Container>
}

export default CustomItems;
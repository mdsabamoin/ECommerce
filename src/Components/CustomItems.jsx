import React, { useContext, useEffect, useState } from "react";
import { Button, Container, Image } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Context } from "../Store/ContextProvider";
import "./CustomItems.css";
import axios from "axios";
// import Image from "react-bootstrap"

const CustomItems = () => {
    const ctx = useContext(Context);
    // const [arrofids, setarrofids] = useState([]);
    console.log(ctx.cartElements);

    // useEffect(() => {
    //     const fetchingKey = async () => {
    //         const response = await axios.get(`https://ecommerce-react-bootstrap-default-rtdb.firebaseio.com/users.json`);
    //         console.log((response.data));
    //         const arr = Object.keys(response.data);
    //         setarrofids(arr);
    //     }

    //     fetchingKey();
    // }, [])

    const email = localStorage.getItem("Token");

    const sanitisedmail = email.replace(/[@.]/g, "");

    useEffect(() => {
        const fetchData = async () => {

            try {
                const allData = [];
                ctx.setIsLoading(true);
                ctx.setError(null);

                const response = await axios.get(`https://crudcrud.com/api/aabe6bbbf42e4ed996f8de6f87cb51d1/ecommerce`)


                const data = response.data;

                ctx.setProductsArr(data);
                ctx.setIsLoading(false);



            } catch (error) {
                ctx.setError(error.message)
                ctx.setIsLoading(false);
            }

        }
        fetchData()
    }, [])
    
    useEffect(()=>{
        const fetchCart = async () =>{
            try{
                const response = await axios.get(`https://crudcrud.com/api/041b3c9c520f4c7386cdbcf28df85c3b/cart${sanitisedmail}`);
                const data = response.data;
                ctx.setCartElements(data);
            }
            catch(error){
                alert("Cannot fetch cart item")
            }
        }
        fetchCart();
    },[])

    


    const AddToCartHandler = async (item) => {


        try {

            const isItemIncart = ctx.cartElements.find((CartItem) => CartItem.title === item.title)

            if (!isItemIncart) {

                const obj = { "title": item.title, "url": item.imageUrl, "price": item.price, "quantity": 1 }
                // console.log(obj);
                const response = await axios.post(`https://crudcrud.com/api/041b3c9c520f4c7386cdbcf28df85c3b/cart${sanitisedmail}`, obj)
                const data = response.data
                // const newCartItem = {"id":id,...obj};
                ctx.setCartElements((previousState) => [...previousState, obj]);
                alert("Item Added to Cart");
            }
            else {
                alert("Do you want to increase the Quantity");
                // const obj = { "title": isItemIncart.title, "url": isItemIncart.imageUrl, "price": isItemIncart.price, "quantity": isItemIncart.quantity + 1 }
                // const response = await axios.put(`https://crudcrud.com/api/041b3c9c520f4c7386cdbcf28df85c3b/cart${sanitisedmail}/${isItemIncart._id}`, obj)

                // const updatedCart = ctx.cartElements.map((Cartitem) => {
                //     return Cartitem.title === isItemIncart.title ? { ...isItemIncart, "quantity": obj.quantity } : Cartitem;
                // })
                // ctx.setCartElements((previousState) => [{...previousState, updatedCart}]);
                alert("One User can Buy only 1 Quantity");
            }


        }
        catch (error) {
            alert("There is an Error in adding the item to cart");
        }
    }

    // ctx.setProductsArr(arr);

    return <Container>
        {ctx.error !== null && <p>{ctx.error}</p>}
        {ctx.isLoading && ctx.ProductsArr.length == 0 && ctx.error == null && <h1>Loading....</h1>}
        {!ctx.isLoading && ctx.ProductsArr.length > 0 && ctx.error == null && <h2 bg="light" className="fs-1">Music</h2>}
        {!ctx.isLoading && ctx.ProductsArr.length > 0 && ctx.error == null && <Row className="mt-5">
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
                        onClick={() => { AddToCartHandler(item) }}>Add to Cart</Button>
                </div>
                <br />
            </Col>
            ))}

        </Row>}
    </Container>
}

export default CustomItems;
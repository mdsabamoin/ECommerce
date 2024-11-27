import React, { useState } from "react";
// import ReactDom from "react-dom";
const Context = React.createContext({
    ProductsArr: [],
    Token:null,
    login:false,
    cartElements:[
        {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        },
        {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        },
        {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',    
        } 
        ],
     isCart:false,
     isLoading:false,
     error:null,
     details:[],
     quantity:0,
     price:0,
     setToken:()=>{},
     setPrice:()=>{},
     setDetails:()=>{},
     setIsLoading:()=>{},
     setError:()=>{},
     setQuantity:()=>{},
     setIsCart:()=>{},   
    setProductsArr: () => {},
    setCartElements:()=>{},
    setLogin:()=>{}

})


const ContextProvider = (props) => {
     const [isCart,setIsCart] = useState(false);
     const [login,setLogin] = useState(false);
    const [price,setPrice] = useState(0);
    const [ProductsArr, setProductsArr] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(null);
    const [cartElements,setCartElements] = useState([]);
    const [quantity,setQuantity] = useState(1);
    const [details,setDetails] = useState([]);
    const [Token,setToken] = useState(null);

    return <Context.Provider value={{ ProductsArr,login,isLoading,error,cartElements,Token,isCart,details,quantity,price,setLogin,setToken,setDetails,setIsLoading,setError,setPrice,setQuantity,setIsCart,setCartElements,setProductsArr }}>{props.children}</Context.Provider>

}
export  { Context, ContextProvider };


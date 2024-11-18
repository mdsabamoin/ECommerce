import React, { useState } from "react";
// import ReactDom from "react-dom";
const Context = React.createContext({
    ProductsArr: [{
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
    },
    {
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

    }],
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
     quantity:0,
     price:0,
     setPrice:()=>{},
     setQuantity:()=>{},
     setIsCart:()=>{},   
    setProductsArr: () => { },
    setCartElements:()=>{}

})


const ContextProvider = (props) => {
     const [isCart,setIsCart] = useState(false);
    const [price,setPrice] = useState(0);
    const [ProductsArr, setProductsArr] = useState( [{
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        quantity:1
    },
    {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        quantity:1
    },
    {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        quantity:1
    },
    {
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        quantity:1

    }]);

    const [cartElements,setCartElements] = useState([]);
    const [quantity,setQuantity] = useState(1);

    return <Context.Provider value={{ ProductsArr,cartElements,isCart,quantity,price,setPrice,setQuantity,setIsCart,setCartElements,setProductsArr }}>{props.children}</Context.Provider>

}
export  { Context, ContextProvider };


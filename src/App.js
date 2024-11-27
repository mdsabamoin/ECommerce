import logo from './logo.svg';
import './App.css';
import CustomNavbar from './Components/CustomNavbar';
import CustomItems from './Components/CustomItems';
import {createBrowserRouter,Outlet,RouterProvider, useNavigate} from "react-router-dom";
import CustomAbout from './Components/CustomAbout';
import Stored from './Components/Stored';
import Card from 'react-bootstrap/Card';
import { Button, CardText } from 'react-bootstrap';
import CustomContact from './Components/CustomContact';
import CustomForm from './Components/CustomForm';
import CustomProduct from './Components/CustomProduct';
import CustomTshirt from './Components/CustomTshirt';
import CustomHoodie from './Components/Customhoodie';
import CustomJeans from './Components/CustomJeans';
import LoginNavbar from './Components/LoginNavbar';
import CustomLogForm from './Components/CustomLogForm';
import CustomProfile from './Components/CustomProfile';
import { useContext, useEffect } from 'react';
import { Context } from './Store/ContextProvider';
// import { Outlet } from 'react-router-dom';
function App() {
    
      const ctx = useContext(Context);
      // const navigate = useNavigate();
      useEffect(() => {
        const initialToken = localStorage.getItem("Token");
        if (initialToken) {
          ctx.setToken(initialToken);
          ctx.setLogin(true);
        } else {
          ctx.setLogin(false);
        }
      }, []); 
      
      useEffect(()=>{
        if(ctx.login){
          setTimeout(() => {
            localStorage.removeItem("Token");  
          ctx.setToken(null);
          ctx.setLogin(false);
          window.location.replace("/")
          }, 300000);
        }
      })

      

  const AlwaysDisplay = <div><CustomNavbar/><h1  className="bg-secondary text-light glowing-text" style={{height:"130px",fontSize: '6rem'}}>The Generics</h1></div>
  const LastContent=   <Card.Footer className="bg-info text-dark glowing-text" style={{height:"60px",position:"fixed",width:"100%",padding:"10px 0",bottom:0,left:0,fontSize:"2rem"}}>Dummy Footer</Card.Footer>
       const logNavbar = <div><LoginNavbar/></div>
   const router = createBrowserRouter([
    {path:"/" , element:<div>{!ctx.login && <div>{logNavbar}<CustomLogForm/>{LastContent}</div>}</div>},
    {path:"/about" , element:<div>{ctx.login && <div>{AlwaysDisplay}<CustomAbout/>{LastContent}</div>}</div>},
    {path:"/contact" , element:<div>{ctx.login && <div>{AlwaysDisplay}<CustomContact/>{LastContent}</div>}</div>},
    {path:"/home",element:<div>{ctx.login && <div>{AlwaysDisplay}<CustomItems/>{LastContent}</div>}</div>},
    {path:"/store",element:<div>{ctx.login && <div>{AlwaysDisplay}<Stored/>{LastContent}</div>}</div>},
    // {path:"/form",element:<div>{AlwaysDisplay}<CustomForm/>{LastContent}</div>},
    {path:"/profile",element:<div>{ctx.login && <div>{AlwaysDisplay}<CustomProfile/>{LastContent}</div>}</div>},
    {path:"/product", element:<div>{ctx.login && <div>{AlwaysDisplay}<CustomProduct/>{LastContent} </div>}</div>},
    {path:"/tshirt", element:<div>{ctx.login && <div>{AlwaysDisplay}<CustomTshirt/>{LastContent} </div>}</div>},
    {path:"/hoodie", element:<div>{ctx.login && <div>{AlwaysDisplay}<CustomHoodie/>{LastContent} </div>}</div>},
    {path:"/jeans", element:<div>{ctx.login && <div>{AlwaysDisplay}<CustomJeans/>{LastContent} </div>}</div>}
    // {path:"*", element:ctx.login?<div>Hi Am Login</div>:<div>I am not login</div>}
      
 ])

    
    
 
  
   

   
   
 
  
  return (<div className='App'>
    <RouterProvider router={router}>
    {/* {AlwaysDisplay} */}
      {/* <CustomItems></CustomItems> */}
    </RouterProvider>
  </div>
    
  );
}

export default App;

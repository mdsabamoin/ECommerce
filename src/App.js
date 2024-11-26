import logo from './logo.svg';
import './App.css';
import CustomNavbar from './Components/CustomNavbar';
import CustomItems from './Components/CustomItems';
import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom";
import CustomAbout from './Components/CustomAbout';
import Stored from './Components/Stored';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import CustomContact from './Components/CustomContact';
import CustomForm from './Components/CustomForm';
import CustomProduct from './Components/CustomProduct';
import CustomTshirt from './Components/CustomTshirt';
import CustomHoodie from './Components/Customhoodie';
import CustomJeans from './Components/CustomJeans';
import LoginNavbar from './Components/LoginNavbar';
import CustomLogForm from './Components/CustomLogForm';
// import { Outlet } from 'react-router-dom';
function App() {
     
  const AlwaysDisplay = <div><CustomNavbar/><h1  className="bg-secondary text-light glowing-text" style={{height:"130px",fontSize: '6rem'}}>The Generics</h1></div>
  const LastContent=   <Card.Footer className="bg-info text-dark glowing-text" style={{height:"60px",position:"fixed",width:"100%",padding:"10px 0",bottom:0,left:0,fontSize:"2rem"}}>Dummy Footer</Card.Footer>
       const logNavbar = <div><LoginNavbar/></div>
   const router = createBrowserRouter([
    {path:"/" , element:<div>{logNavbar}<CustomLogForm/>{LastContent}</div>},
    {path:"/about" , element:<div>{AlwaysDisplay}<CustomAbout/>{LastContent}</div>},
    {path:"/contact" , element:<div>{AlwaysDisplay}<CustomContact/>{LastContent}</div>},
    {path:"/home",element:<div>{AlwaysDisplay}<CustomItems/>{LastContent}</div>},
    {path:"/store",element:<div>{AlwaysDisplay}<Stored/>{LastContent}</div>},
    {path:"/form",element:<div>{AlwaysDisplay}<CustomForm/>{LastContent}</div>},
    {path:"/product", element:<div>{AlwaysDisplay}<CustomProduct/>{LastContent} </div>},
    {path:"/tshirt", element:<div>{AlwaysDisplay}<CustomTshirt/>{LastContent} </div>},
    {path:"/hoodie", element:<div>{AlwaysDisplay}<CustomHoodie/>{LastContent} </div>},
    {path:"/jeans", element:<div>{AlwaysDisplay}<CustomJeans/>{LastContent} </div>}
     
    
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

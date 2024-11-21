import logo from './logo.svg';
import './App.css';
import CustomNavbar from './Components/CustomNavbar';
import CustomItems from './Components/CustomItems';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import CustomAbout from './Components/CustomAbout';
import Stored from './Components/Stored';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import CustomForm from './Components/CustomForm';
function App() {
     
  const AlwaysDisplay = <div><CustomNavbar/><h1  className="bg-secondary text-light glowing-text" style={{height:"130px",fontSize: '6rem'}}>The Generics</h1></div>
  const LastContent=   <Card.Footer className="bg-info text-dark glowing-text" style={{height:"60px",position:"fixed",width:"100%",padding:"10px 0",bottom:0,left:0,fontSize:"2rem"}}>Dummy Footer</Card.Footer>
       
   const router = createBrowserRouter([
    {path:"/about" , element:<div>{AlwaysDisplay}<CustomAbout/>{LastContent}</div>},
    {path:"/",element:<div>{AlwaysDisplay}<CustomItems/>{LastContent}</div>},
    {path:"/store",element:<div>{AlwaysDisplay}<Stored/>{LastContent}</div>},
    {path:"/form",element:<div>{AlwaysDisplay}<CustomForm/>{LastContent}</div>}
 ])
  
  return (<div className='App'>
    <RouterProvider router={router}>
    {AlwaysDisplay}
      <CustomItems></CustomItems>
    </RouterProvider>
  </div>
    
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import CustomNavbar from './Components/CustomNavbar';
import CustomItems from './Components/CustomItems';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import CustomAbout from './Components/CustomAbout';
function App() {
     
  const AlwaysDisplay = <div><CustomNavbar/><h1  className="bg-secondary text-light glowing-text" style={{height:"130px",fontSize: '6rem'}}>The Generics</h1></div>

       
   const router = createBrowserRouter([
    {path:"/about" , element:<div>{AlwaysDisplay}<CustomAbout/></div>},
    {path:"/",element:<div>{AlwaysDisplay}<CustomItems/></div>},
    {path:"/store",element:<div>{AlwaysDisplay}<div>This is a store</div></div>}
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

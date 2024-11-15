import logo from './logo.svg';
import './App.css';
import CustomNavbar from './Components/CustomNavbar';
import CustomItems from './Components/CustomItems';
function App() {
  return (
    <div className="App">
      <CustomNavbar/>
      <h1  className="bg-secondary text-light glowing-text" style={{height:"130px",fontSize: '6rem'}}>The Generics</h1>
      <CustomItems></CustomItems>
    </div>
  );
}

export default App;

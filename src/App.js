//import logo from './logo.svg';
import './App.css';
import Countries from './Component/Countries';
import Navbar from './Component/Navbar';
import world from "./Images/world.png"
import placeholder from "./Images/placeholder.png"
import Data from "./Data/Data";

function App() {

  const datatravel = Data.map(DataCountry)

  function DataCountry(dataItems){
    return (
      <Countries
    placeholder={placeholder}
    details = {dataItems}
    />
    ) 
  }
  return (
    <div className="App">
     <div className="appcontainer">
      <div className="navwrapper">
        <Navbar img={world}/>
      </div>
      <div className="datawrapper">
       {datatravel}
      </div>

     </div>
    </div>
  );
}

export default App;

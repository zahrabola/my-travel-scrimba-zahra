//import logo from './logo.svg';
import './App.css';
import Countries from './Component/Countries';
import Navbar from './Component/Navbar';
import world from "./Images/world.png"
import placeholder from "./Images/placeholder.png"
import Data from "./Data/Data";

function App() {
  return (
    <div className="App">
     <div className="appcontainer">
      <div className="navwrapper">
        <Navbar img={world}/>
      </div>
      <div className="datawrapper">
        <Countries />
      </div>

     </div>
    </div>
  );
}

export default App;

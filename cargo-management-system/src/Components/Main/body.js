import { useState } from "react";
import '../../App.css';
import Navigation_li from '../../Components/Navigation/Navigation_li';
import Navigation from '../../Components/Navigation/Navigation';
import Main from './Main'
import ShipRoute from '../../Components/Main/details/shipRoute'


function App() {
  const [navToggle, setNavToggle] = useState("navigation active");
  const [mainSizeUpdate, setMainSizeUpdate] = useState("main active");
  const [navActive, setNaveActive] = useState(1);
  const [appState, setAppState] = useState(1);
  function handleNavToggle(){
    if(navActive){
      setNavToggle("navigation active");
      setMainSizeUpdate("main active");
      setNaveActive(0);
    }else{
      setNavToggle("navigation");
      setMainSizeUpdate("main");
      setNaveActive(1);
    }
  }
  return (
    <div className="App">
      <Navigation navToggle={navToggle} setAppState={setAppState}/>
      <Main handleNavToggle={handleNavToggle} mainSizeUpdate={mainSizeUpdate} appState = {appState}/>
    </div>
  );
}

export default App;

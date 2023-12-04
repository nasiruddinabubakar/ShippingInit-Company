import { useState } from "react";
import Navigation_li from './Navigation_li';
import { useNavigate } from "react-router-dom";


function Navigation(props) {
  const [clickedLi, setClickedLi] = useState(0);
  const liBodyArray = ["Dashboard", "Ships", "Add Ships", "View Summary", "Sign out"];
  const liClassArray = ["home-outline", "person-outline", "add-circle-outline", "eye-outline", "settings-outline", "logout-outline"];
  const links = ["", "/ships", "/addShips", "/orders"]
  const navigate = useNavigate();
  function liClickHandle(index){
    if(index==4){
      localStorage.clear();
      navigate('/login')
    }else{
      setClickedLi(index);
    props.setAppState(index+1);
    navigate(links[index])
    }

  }

  return (
    <div className = {props.navToggle}>
      <ul>
          <Navigation_li iconName = "logo-youtube" liBody = "Shipping init"/>

          {liBodyArray.map((element, index) => {
          return(
          <Navigation_li key = {index} id = {index} liClickHandle = {liClickHandle} iconName = {liClassArray[index]} liBody = {element} liClass = {(clickedLi==index)?"hovered":""}/>
          );
          })}
          
      </ul>
    </div>
  );
}

export default Navigation;

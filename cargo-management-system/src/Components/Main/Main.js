import './Main.css';
import TopBar from './TopBar';
import Card from './Card';
import Details from './details/Details';
import Ships from './ships';
import AddShip from './addShip';
import Summary from './summary';
import RouteIcon from '@mui/icons-material/Route';
import TodayIcon from '@mui/icons-material/Today';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import * as icons from '@mui/icons-material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDetails } from '../../app/features/company/companySlice';

function Main(props){
    const dispatch = useDispatch();
    async function getDetail(){
        const response = await fetch("http://127.0.0.1:5000/api/company/getdetails",{
          headers:{
            authorization:localStorage.getItem('company')
          }
        });
        const data = await response.json();
        dispatch(getDetails(data));
        console.log(data);
      }
      useEffect( ()=>{
        getDetail();
      },[])
    return(
        <div className={props.mainSizeUpdate}>
            <TopBar handleNavToggle = {props.handleNavToggle} appState={props.appState}/>
            {props.appState ==1 || props.appState == 2 ?<Card />:<></>}
            {/* {props.appState ==1 || props.appState == 2 ?
                <>
                    <Card />
                </>
                :<></>}
            {props.appState==1?<Details />:props.appState==2?<Ships />:props.appState==3?<AddShip />:<Summary />} */}
            <Outlet />
        </div>
    );
}

export default Main
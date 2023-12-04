import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Ships from './Components/Main/FeaturedShip';
import Details from './Components/Main/details/Details';
import AddShip from './Components/Main/addShip'
import Summary from './Components/Main/summary'
import Order from './Components/Main/details/order'
import {Login} from './Components/login/login'
import {RegisterData} from './Components/signup/signUpData'
import Body from './Components/Main/body'
import { Provider } from 'react-redux';
import {store} from './app/store';
import { toast ,ToastContainer} from "react-toastify";
import ShipInfo from './Components/Main/ShipInfo';



const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<App />}>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<RegisterData/>}/>
        <Route path='/' element={<Body />}>
          <Route path='' element={<Details />} />
          <Route path='/ships' element={<Ships />} />
          <Route path='/ships/:id' element={<ShipInfo />} />
          <Route path='/addShips' element={<AddShip />} />
          <Route path='/summary' element={<Summary />} />
          <Route path='/orders' element={<Order />} />
        </Route>
      </Route>
  )
)
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

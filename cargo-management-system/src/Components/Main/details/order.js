import React, { useState } from "react";
import OrderDetail from './orderDetail'
import { useEffect } from "react";

function Details() {
  const [hoverValue, setHoverValue] = useState(1);
    const [orders, setOrders] = useState([]);
  async function getDetail(){
    const response = await fetch("http://127.0.0.1:5000/api/orders/companyhistory",{
      headers:{
        authorization:localStorage.getItem('company')
      }
    });
    const data = await response.json();
    setOrders(data.orders);
    console.log(data);
  }
  useEffect( ()=>{
    getDetail();
  },[])
  
  function handleRowHover(index) {
    setHoverValue(index);
  }
  useEffect(() => {
    handleRowHover(0);
  }, [0]);
  return (
    <div className="orders">
      <div className="recentOrders">
        <div className="cardHeader">
          <h2>Orders</h2>
        </div>
        <table>
          <thead>
            <tr>
              <td>Booking Date</td>
              <td>Delivery Date</td>
              <td>Pick Up</td>
              <td>Drop Off</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            {orders.map((element, index) => {
              return (
                <OrderDetail
                  hoverValue={hoverValue}
                  id={index}
                  element={element}
                  handleRowHover={() => {
                    handleRowHover(index);
                  }}
                  stop={element.stop}
                />
              );
            })}
          </tbody>
          </table>
      </div>
    </div>
  );
}

export default Details;
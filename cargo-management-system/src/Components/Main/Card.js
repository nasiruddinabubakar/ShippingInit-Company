import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
// 

function Card(){
    const user = useSelector(state=>state.companyDetails)
    console.log(user);
    const cards = [
        {cardNumber: user.data?.noShips, cardName: "Total Ships", iconName: "checkmark-done-outline"},
        {cardNumber: user.data?.noShips, cardName: "Ships on Route", iconName: "swap-horizontal-outline"},
        {cardNumber: user.data?.noOrders, cardName: "Delivery Requests", iconName: "eye-outline"},
        {cardNumber: user.data?.noCustomers, cardName: "Customers", iconName: "today-outline"}
    ];
    
    return(
        <div className='cardBox'>
            {cards.map((element)=>{
                return(
                <div className='card'>
                    <div>
                        <div className='numbers'>
                            {element.cardNumber}
                        </div>
                        <div className='cardName'>
                            {element.cardName}
                        </div>
                    </div>
                    <div className='iconBox'>
                        <ion-icon name={element.iconName}></ion-icon>
                    </div>
                </div>)
            })}
        </div>
    );
}


export default Card;
import React from "react";
import moment from "moment";

function ShipDetail(props){

    return(
        <tr className = {props.hoverValue==props.id?"hover":""} onMouseEnter={props.handleRowHover}>
            <td>{moment(props.element.booking_date).utc().format('YYYY-MM-DD')}</td>
            <td>{moment(props.element.delivery_date).utc().format('YYYY-MM-DD')}</td>
            <td>{props.element.pickup}</td>
            <td>{props.element.dropoff}</td>
            <td>
                <span className={props.element.Delivered?"status full":"status low"}>
                    {props.element.Delivered?"Delivered":"On-Route"}
                </span>
            </td>
        </tr>
    )
}

export default ShipDetail;
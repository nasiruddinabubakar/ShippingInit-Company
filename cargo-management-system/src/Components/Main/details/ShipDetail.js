import React from "react";

function ShipDetail(props){
    return(
        <tr className = {props.hoverValue==props.id?"hover":""} onMouseEnter={props.handleRowHover}>
            <td>{props.element.name}</td>
            <td>{props.element.route[props.stop - 1]}</td>
            <td>{props.element.route[props.stop]}</td>
            <td>
                <span className={props.element.load<=25?"status low":props.element.load<=75?"status half":"status full"}>
                    {props.element.load + "%"}
                </span>
            </td>
        </tr>
    )
}

export default ShipDetail;
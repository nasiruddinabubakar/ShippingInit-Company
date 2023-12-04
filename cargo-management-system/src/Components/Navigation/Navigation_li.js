import './Navigation_li.css';

function Navigation_li(props){
    return(
        <>
            <li onClick = {()=>props.liClickHandle(props.id)} className={`${props.liClass} li-cl`}>
                <a href="#">
                <span className = "icon">
                    <ion-icon name={props.iconName} />
                </span>
                <span className = "title">
                    {props.liBody}
                </span>
                </a>
            </li>
        </>
    );
}

export default Navigation_li;
import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function TopBar(props){
    
    
    const date = new Date();
    
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();


    let currentDate = `${day}-${month}-${year}`;
    return(
        <div className="topbar">
            <div className="toggle" onClick={props.handleNavToggle}>
                <ion-icon name="menu-outline"></ion-icon>
            </div>
            {props.appState==3?
            <Toolbar variant="dense">
                <Typography variant="h6" color="inherit" component="div">
                    Add Ships
                </Typography>
            </Toolbar>:
            <div className="search">
                <label>
                    <input type="text" placeholder="Search here" />
                    <ion-icon name="search-outline"></ion-icon>
                </label>
            </div>}
            <div className="user">
                <h3>
                    {currentDate}
                </h3>
            </div>
        </div>

    );
}

export default TopBar;
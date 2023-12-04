import React, { useState } from "react";
import ShipRoute from './shipRoute';
function loadRadial(props){
    return(
        <div className='radialBarContainer'>
            <div className="container">
                <div className="cardHeader">
                        <h2>
                            Ship Load
                        </h2>
                </div>
                <div className='radialBar'>
                    <div className='outer'>
                        <div className='inner'>
                            <div className='number'>
                                {props.ship.load + '%'}
                            </div>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                        <defs>
                            <linearGradient id="GradientColor">
                            <stop offset="0%" stop-color="#e91e63" />
                            <stop offset="100%" stop-color="#673ab7" />
                            </linearGradient>
                        </defs>
                        <circle cx="80" cy="80" r="70" stroke-linecap="round" className="animation"/>
                    </svg>
                </div>
            </div>
            <div className="container route">
                <div className="cardHeader">
                        <h2>
                            Ship Route
                        </h2>
                </div>
                <ShipRoute shipRoute = {props.ship.route} shipStop = {props.ship.stop}/>
            </div>
        </div>
    );
}

export default loadRadial;
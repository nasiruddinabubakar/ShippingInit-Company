import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import './shipRoute.css';
const active = "active";
const done = "done";
const defaultClass = "md-step";


export default function HorizontalLinearAlternativeLabelStepper(props) {
    const steps = props.shipRoute;
    function getClass(index){
        if(index<props.shipStop-1){
            return "md-step active done"
        }else if(index>props.shipStop-1){
            return "md-step"
        }else{
            return "md-step active"
        }
    }
  return (
    <div class="md-stepper-horizontal">
        {steps.map((element, index)=>{
            return(
            <div class={getClass(index)}>
                <div class="md-step-circle"><span>{index+1}</span></div>
                <div class="md-step-title">{element}</div>
                <div class="md-step-bar-left"></div>
                <div class="md-step-bar-right"></div>
            </div>)
            })
        }
    </div>
  );
}
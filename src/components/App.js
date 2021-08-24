import React from 'react'
import Call from "./Call"
import Body from "./Body"
import Comp from './Comp';
import Div from './Div';
import Life from './Life';
import Articles from './Articles';
import Ready from './Ready'; 
//import Caurosal from './Caurosal'
export default function App() {
   
    return(
        <div>
       
        <Body />
        <Call />
        
        <Div />
        <Comp />
        {/*<Caurosal />*/}
        <Life />
        <Articles />
        <Ready />
        
        </div>
    );
}
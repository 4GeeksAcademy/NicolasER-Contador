//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application

let unidad = 0
let decimal = 0
let centenas = 0
let miles = 0
let diezMiles = 0
let cienMiles = 0

setInterval(()=>{
    unidad ++
    if (unidad > 9) {
        unidad = 0
        decimal ++
    }
    if (decimal > 9) {
        decimal = 0
        centenas ++
    }
    if (centenas > 9) {
        centenas = 0
        miles ++
    } 
    if (miles > 9) {
        milels = 0
        diezMiles ++
    }
    if (diezMiles > 9) {
        diezMiles = 0
        cienMiles ++
    }
    ReactDOM.render(<Home unidad={unidad} decimal={decimal} centenas={centenas} miles={miles} diezMiles={diezMiles} cienMiles={cienMiles}/>, document.querySelector("#app"));
}, 1000)


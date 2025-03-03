//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types"


// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import { SecondCounter }  from "./component/SecondCounter.jsx";


SecondCounter.propTypes = {
    // You can declare that a prop is a specific JS primitive. By default, these
    // are all optional.
    digitSix: PropTypes.number,
    digitFive: PropTypes.number,
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number,
};

let counter = 0;

setInterval(function(){
    const Six = Math.floor(counter / 100000) % 10
    const five = Math.floor(counter / 10000) % 10
    const four = Math.floor(counter / 1000) % 10
    const three = Math.floor(counter / 100) % 10
    const two = Math.floor(counter / 10) % 10
    const one = Math.floor(counter / 1) % 10
    
    console.log(four, three, two, one)
    
    counter++;
    
    ReactDOM.render(<SecondCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} digitSix={Six}/>, 
    document.querySelector("#app")
    );
}, 
1000);

import React from 'react';
import ReactDOM from "react-dom";

export let SecondCounter = function (props) {
  return (
    <div className="bigCounter" style={{ backgroundColor: 'black', color: 'white', display: 'flex', fontSize: '150px', justifyContent: 'space-evenly' }}>
      <div className="calendar"><i className="fa-regular fa-clock"></i></div>
      <div className="four">{props.digitSix}</div>
      <div className="four">{props.digitFive}</div>
      <div className="four">{props.digitFour}</div>
      <div className="three">{props.digitThree}</div>
      <div className="two">{props.digitTwo}</div>
      <div className="one">{props.digitOne}</div>
    </div>
  );
};

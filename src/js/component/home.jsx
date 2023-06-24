import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	const valorQueCambia = useState()
	const [color, setColor] = useState("green")

	console.log("Retorno de useState:", valorQueCambia)

	function generateRandomColor(){
		const colors= ["red", "white", "pink", "black"]
		const randomNumber= Math.floor(Math.random() * colors.length)
		return colors[randomNumber]
	}
	
	return (
		<div className="w-100 vh-100 justify-content-center align-items-center d-flex" style={{background: color}}>
			<button className="btn btn-primary"
				onClick={() =>{
					const newColor = generateRandomColor()
					setColor(newColor)
				}}
			>Cambiar color</button>
		</div>
	)
};

export default Home;

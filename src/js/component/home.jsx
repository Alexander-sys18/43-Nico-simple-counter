import React from "react";

//include images into your bundle
import {SecondCounter} from "./SecondCounter.jsx"

//create your first component
export const Home = () => {
	return (
		<div className="container-fluid p-0">
			<SecondCounter/>
		</div>
		);
};




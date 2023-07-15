import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {

	return (
		<div className="d-inline-flex flex-rowtext-center">
			<p></p>
			<p className="p-2">{props.cienMiles}</p>
			<p className="p-2">{props.diezMiles}</p>
			<p className="p-2">{props.miles}</p>
			<p className="p-2">{props.centenas}</p>
			<p className="p-2">{props.decimal}</p>
			<p className="p-2">{props.unidad}</p>
		</div>
	);
};

export default Home;

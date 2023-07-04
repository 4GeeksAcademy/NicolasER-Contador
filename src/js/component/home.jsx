import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {

	return (
		<div className="text-center">
			<p>{props.unidad}</p>
			<p>{props.decimal}</p>
			<p>{props.centenas}</p>
		</div>
	);
};

export default Home;

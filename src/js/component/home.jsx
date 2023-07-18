import React from "react";



//create your first component
const Home = (props) => {

	return (
		<div className="d-inline-flex flex-rowtext-center text-center position-absolute top-0 start-50 translate-middle-x">
			<p><i class="fa fa-clock-o" aria-hidden="true"></i></p>
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

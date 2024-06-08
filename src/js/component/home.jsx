import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Footer from "./Footer.jsx";
const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
			</div>
			<Footer />
		</div>
	);
};

export default Home;

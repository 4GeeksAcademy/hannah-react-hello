import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card_title.jsx";
import Footer from "./Footer.jsx";


const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<Card/>
			</div>
			<Footer />
		</div>
	);
};

export default Home;

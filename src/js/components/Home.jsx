import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import { Jumbotron } from "./Jumbotrom";
import { CardList } from "./CardList";
import Footer from "./Footer";
//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<Jumbotron />
			<CardList />
			<Footer />

		</>
	);
};

export default Home;
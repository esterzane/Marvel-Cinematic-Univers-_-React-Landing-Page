import React from "react";
import Navbar from "./component/Navbar";
import Head from "./component/Head";
import Card from "./component/Card";
import Footer from "./component/Footer";

const Home = () => {

	return (
		<div>
			<Navbar />
			<Head />
			<div className="Containar-Card container-fluid">
				<div className="row">
					<div className="col-sm-12 col-md-12 col-lg-3">
						<Card
							imageUrl="https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/generations/545a20ba-bc78-4a39-9eb7-790c2eb64919-0.png"
							title="X-Men Universe"
							description="Why do the X-Men always excel in spelling bees? Because they have a real Magneto when it comes to finding the right words!"
							buttonText="⊗ Danger room"
						/>
					</div>
					<div className="col-sm-12 col-md-12 col-lg-3">
						<Card
							imageUrl="https://chat-gpt.photos/image-proxy/35581523-cab8-4a72-971c-24cc80eb743a-0.png"
							title="The Infinity Saga"
							description="Why did Marvel's Infinity Saga feel like the longest road trip ever? Because they took more detours than a GPS with a sense of adventure!"
							buttonText=" ⍟ Infinity Stones"
						/>
					</div>
					<div className="col-sm-12 col-md-12 col-lg-3">
						<Card
							imageUrl="https://chat-gpt.photos/image-proxy/aed9ca4e-80a1-43c8-b917-b51dc8575a3c-2.png"
							title="The Multiverse Saga"
							description="I am Groot! Translating - In the Multiverse Saga, it's like a forest of possibilities, but with more capes and fewer leaves!"
							buttonText="४ Cosmic Nexus"
						/>
					</div>
					<div className="col-sm-12 col-md-12 col-lg-3">
						<Card
							imageUrl="https://chat-gpt.photos/image-proxy/2bfb6584-55b8-4793-893f-f4e6ea7270c0-1.png"
							title="Future"
							description="In the future universe, Iron Man and Spider-Man started a superhero-themed restaurant, but their `webbed-wings` and `iron skewers` didn't quite make the cut on the menu!"
							buttonText=" ◊ Genius Minds"
						/>
					</div>
				</div>
			</div>
			<div className="col-sm-12 col-md-12 col-lg-12">
				<Footer
					footerText="Copyright Marvel & zeg & OG & AI © 2023" />
			</div>
		</div>
	);
};
export default Home; 

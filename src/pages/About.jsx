import { Link } from "react-router-dom";
import earth from "../assets/earth.png";

const About = () => {
	return (
		<div className="text-ligh-text dark:text-dark-tex flex flex-col items-center justify-between font-light md:flex-row">
			<div className="max-w-lg space-y-3 text-center text-base leading-relaxed md:max-w-2xl md:text-start lg:text-lg">
				<h2 className="mb-4 text-3xl font-bold text-light-300 dark:text-dark-100">
					About Us
				</h2>
				<p>
					Where in the World is a website that provides information about
					countries around the globe. Our mission is to help users explore and
					learn more about various nations, including their geography, history,
					culture, and more.
				</p>
				<p>
					Whether you&apos;re a traveler, student, researcher, or simply curious
					about the world, Where in the World is here to satisfy your thirst for
					knowledge about different countries.
				</p>
				<Link
					to="/countries"
					className="mt-4 inline-block rounded-md px-4 py-2 font-semibold dark:bg-dark-200"
				>
					Explore Countries
				</Link>
			</div>
			<div className="mt-4 flex md:mt-0">
				<img src={earth} alt="earth image" className="w-full" />
			</div>
		</div>
	);
};

export default About;

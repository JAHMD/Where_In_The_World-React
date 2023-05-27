import countries from "../assets/countries-screen.png";

const Home = () => {
	return (
		<div className="flex flex-col items-center justify-center gap-6 text-base lg:flex-row lg:text-lg">
			<div className="text-center lg:text-start">
				<h2 className="mb-4 text-3xl font-extrabold text-light-300 dark:text-dark-100">
					Welcome to <br />
					Where In The World!
				</h2>
				<div className="max-w-2xl space-y-3 leading-relaxed text-light-text dark:text-dark-text">
					<p>
						Discover fascinating details about different countries around the
						world.
					</p>
					<p>
						From the majestic wonders of nature to vibrant cities brimming with
						culture and history, Where in the World allows you to embark on a
						virtual journey and uncover the richness of our planet.
					</p>
				</div>
			</div>
			<div className="mt-10 rounded-lg bg-light-100 p-6 dark:bg-dark-200 lg:max-w-xl">
				<img src={countries} alt="countries image" className="rounded-md" />
			</div>
		</div>
	);
};

export default Home;

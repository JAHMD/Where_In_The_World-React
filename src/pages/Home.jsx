import { useEffect, useState } from "react";
import Card from "../components/Card";
import { fetchCountries } from "../utils/api";

function Home() {
	const [countries, setCountries] = useState(null);
	const countriesCards = countries?.map((country) => {
		return <Card key={country.id} country={country} />;
	});

	useEffect(() => {
		async function getCountries() {
			const countries = await fetchCountries();
			setCountries(countries);
			console.log(countries);
		}
		getCountries();
	}, []);

	return (
		<div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{countriesCards}
		</div>
	);
}

export default Home;

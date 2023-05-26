import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../../components/Card";
import Filter from "../../components/Filter";
import { fetchCountries } from "../../utils/api";

export async function countriesLoader() {
	const countries = await fetchCountries();
	return countries;
}

function Countries() {
	const countries = useLoaderData();
	const [desplayedCountries, setDesplayedCountries] = useState(countries);
	const countriesCards = desplayedCountries?.map((country) => {
		return <Card key={country.flag} country={country} />;
	});

	return (
		<>
			<Filter
				countries={countries}
				setDesplayedCountries={setDesplayedCountries}
			/>
			{desplayedCountries === null || desplayedCountries.length === 0 ? (
				<div className="space-y-3 rounded-md bg-light-100 p-8 dark:bg-dark-200">
					<h2 className="text-2xl font-extrabold capitalize text-light-300 dark:text-dark-100">
						No countries found
					</h2>
					<p className="text-base text-light-text dark:text-dark-text md:text-lg">
						There are no countries that match your filters
					</p>
				</div>
			) : (
				<div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{countriesCards}
				</div>
			)}
		</>
	);
}

export default Countries;

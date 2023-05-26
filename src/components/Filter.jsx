/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

function Filter({ countries, setDesplayedCountries }) {
	const [regionFilter, setRegionFilter] = useState("All");
	const [searchVal, setSearchVal] = useState("");
	const filters = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

	useEffect(() => {
		setDesplayedCountries(countries);
	}, [countries, setDesplayedCountries]);

	function handleInputChange({ target }) {
		const search = target.value;
		const filteredCountries = filterCountries({ search });
		setSearchVal(search);
		setDesplayedCountries(filteredCountries);
	}

	function handleRegionChange({ target }) {
		const filter = target.value;
		const filteredCountries = filterCountries({ filter });
		setRegionFilter(filter);
		setDesplayedCountries(filteredCountries);
	}

	function filterCountries({ search = searchVal, filter = regionFilter }) {
		const filteredCountries = countries?.filter(
			({ region, name: { common } }) =>
				common?.toLowerCase().includes(search) &&
				(region === filter || filter === "All")
		);
		return filteredCountries;
	}

	return (
		<div className="mb-8 mt-2">
			<form
				onSubmit={(e) => e.preventDefault()}
				className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
			>
				<div className="relative">
					<FaSearch className="absolute top-1/2 -translate-y-1/2 translate-x-4" />
					<input
						placeholder="Search for countries"
						type="search"
						name="search"
						className="w-full rounded-md px-6 py-4 pl-12 text-light-text dark:bg-dark-200 dark:text-dark-text sm:w-[300px]"
						value={searchVal}
						onChange={handleInputChange}
					/>
				</div>
				<select
					name="select"
					id="select"
					className="max-w-fit cursor-pointer rounded-md bg-light-100 px-6 py-4 font-semibold text-light-text dark:bg-dark-200 dark:text-dark-text"
					onChange={handleRegionChange}
					defaultValue="Filter By Region"
				>
					{filters.map((filter) => (
						<option key={filter} value={filter}>
							{filter}
						</option>
					))}
				</select>
			</form>
		</div>
	);
}

export default Filter;

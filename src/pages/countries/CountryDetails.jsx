import { Link, useLoaderData } from "react-router-dom";
import GeneralCountryDetails from "../../components/GeneralCountryDetails";
import { fetchCountries } from "../../utils/api";

export async function countryLoader({ params }) {
	const countries = await fetchCountries();
	const countryName = params?.country.replace(/[-]/g, " ");
	const country = countries.find(
		({ name: { common } }) => common.toLowerCase() === countryName
	);
	return country;
}

function CountryDetails() {
	const country = useLoaderData();
	const { name, flags, tld, currencies, languages, subregion, borders } =
		country;
	console.log(country);

	return (
		<div className="mt-14 flex flex-col justify-center gap-8 md:flex-row md:items-center md:gap-20">
			<div className="flex w-full overflow-hidden rounded-md md:max-w-md">
				<img src={flags.png} alt="country flag" className="w-full" />
			</div>
			<div className="flex-shrink-0">
				<h2 className="mb-4 text-2xl font-extrabold text-light-300 dark:text-dark-100">
					{name.common}
				</h2>
				<div className="flex flex-col justify-between gap-6 text-base sm:flex-row">
					<div className="sub-details max-w-[250px]">
						<p className="detail">
							Top Level Domain: <span>{`(${tld.join(", ")})`}</span>
						</p>
						<p className="detail">
							Currencies:{" "}
							<span className="">
								{Object.values(currencies)
									.map((value) => value.name)
									.join(", ")}
							</span>
						</p>
						<p className="detail">
							Languages: <span>{Object.values(languages).join(", ")}</span>
						</p>
						<p className="detail">
							Subregion: <span>{subregion}</span>
						</p>
					</div>
					<GeneralCountryDetails country={country} />
				</div>
				{borders ? (
					<div className="mt-6 text-light-300 dark:text-dark-100">
						<h3 className="text-lg">Border Countries:</h3>
						<div className="mt-4 flex gap-4">
							{borders.map((border) => {
								return (
									<Link
										to={`../${""}`} //TODO: WE ARE HERE.
										key={border}
										className="rounded-md bg-light-200 px-6 py-2 text-sm font-semibold dark:bg-dark-200"
									>
										{border}
									</Link>
								);
							})}
						</div>
					</div>
				) : null}
			</div>
		</div>
	);
}

export default CountryDetails;

import { Link, useLoaderData } from "react-router-dom";
import GeneralCountryDetails from "../../components/GeneralCountryDetails";
import { fetchCountries } from "../../utils/api";

export async function countryLoader({ params }) {
	const countries = await fetchCountries();
	const countryName = params?.country.replace(/[-]/g, " ");
	const country = countries.find(
		({ name: { common } }) => common.toLowerCase() === countryName
	);
	return { country, countries };
}

function CountryDetails() {
	const { country, countries } = useLoaderData();
	const { name, flags, tld, currencies, languages, subregion, borders } =
		country;

	function getBorderCountryName(borderContryCode) {
		const borderCountryName = countries.find(
			({ cca3 }) => cca3 === borderContryCode
		).name.common;

		return borderCountryName;
	}

	return (
		<div className="mt-14 flex flex-col justify-center gap-8 md:flex-row md:items-center md:gap-20">
			<div className="flex w-full flex-shrink-0 overflow-hidden rounded-md md:max-w-sm">
				<img
					src={flags.png}
					alt="country flag"
					loading="lazy"
					className="w-full"
				/>
			</div>
			<div className="">
				<h2 className="mb-4 text-2xl font-extrabold text-light-300 dark:text-dark-100">
					{name.common}
				</h2>
				<div className="flex flex-wrap gap-6 text-base">
					<div className="sub-details max-w-[250px]">
						<p className="detail">
							Top Level Domain: <span>{`(${tld.join(", ")})`}</span>
						</p>
						{currencies ? (
							<p className="detail">
								Currencies:{" "}
								<span className="">
									{Object.values(currencies)
										.map((value) => value.name)
										.join(", ")}
								</span>
							</p>
						) : null}
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
						<div className="mt-4 flex max-w-lg flex-wrap gap-4">
							{borders.map((border) => {
								const borderyCountryName = getBorderCountryName(border);
								const pathName = borderyCountryName
									.toLowerCase()
									.replace(/\s/g, "-");

								return (
									<Link
										to={`../${pathName}`} //TODO: WE ARE HERE.
										key={border}
										className="rounded-md bg-light-100 px-6 py-2 text-sm font-semibold shadow-sm transition-colors duration-200 hover:bg-light-100/70 dark:bg-dark-200 hover:dark:bg-dark-200/70"
									>
										{borderyCountryName}
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

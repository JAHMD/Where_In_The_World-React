/* eslint-disable react/prop-types */
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import GeneralCountryDetails from "./GeneralCountryDetails";

function Card({ country }) {
	const { flags, name } = country;
	const countryPathname = name.common.toLowerCase().replace(/\s/g, "-");

	return (
		<article className="overflow-hidden rounded-lg bg-light-100 shadow-sm dark:bg-dark-200">
			<div className="group relative flex min-h-fit sm:h-52">
				<Link
					to={countryPathname}
					className="absolute left-0 top-0 flex h-full w-full cursor-pointer items-center justify-center bg-black/60 text-2xl text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
				>
					<div>
						<BsSearch />
					</div>
				</Link>
				<img
					src={flags.png}
					alt={flags.alt}
					loading="lazy"
					className="h-full w-full object-cover"
				/>
			</div>
			<div className="p-6">
				<h2 className="mb-4 text-2xl font-extrabold text-light-300 dark:text-dark-100">
					{name.common}
				</h2>
				<GeneralCountryDetails country={country} />
			</div>
		</article>
	);
}

export default Card;

function Card({ country }) {
	const { flags, name, population, capital, region } = country;

	return (
		<article className="overflow-hidden rounded-md bg-light-100 dark:bg-dark-200">
			<div className="flex h-48">
				<img
					src={flags.png}
					alt={flags.alt}
					loading="lazy"
					className="h-full w-full object-cover"
				/>
			</div>
			<div className="sub-details p-6">
				<h2 className="mb-4 text-2xl font-extrabold text-light-300 dark:text-dark-100">
					{name.common}
				</h2>
				<p className="detail">
					Population: <span>{population}</span>
				</p>
				<p className="detail">
					Capital: <span>{capital?.join(", ") || "No capital"}</span>
				</p>
				<p className="detail">
					Region: <span>{region}</span>
				</p>
			</div>
		</article>
	);
}

export default Card;

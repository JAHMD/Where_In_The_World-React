/* eslint-disable react/prop-types */
function GeneralCountryDetails({ country }) {
	const { population, capital, region } = country;

	return (
		<div className="sub-details">
			<p className="detail">
				Population: <span>{population}</span>
			</p>
			<p className="detail">
				Capital: <span>{capital ? capital?.join(", ") : "No capital"}</span>
			</p>
			<p className="detail">
				Region: <span>{region}</span>
			</p>
		</div>
	);
}

export default GeneralCountryDetails;

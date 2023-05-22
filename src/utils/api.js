import axios from "axios";

export async function fetchCountries() {
	const data = JSON.parse(localStorage.getItem("countries"));
	if (data) return data;
	try {
		const { data } = await axios.get("https://restcountries.com/v3.1/all");
		localStorage.setItem("countries", JSON.stringify(data));
		return data;
	} catch (e) {
		throw new Error(e.message);
	}
}

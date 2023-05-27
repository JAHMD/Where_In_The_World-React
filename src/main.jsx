import React from "react";
import ReactDOM from "react-dom/client";
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import Countries, { countriesLoader } from "./pages/countries/Countries.jsx";
import CountryDetails, {
	countryLoader,
} from "./pages/countries/CountryDetails.jsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route index element={<Home />} />
			<Route path="about" element={<About />} />
			<Route path="countries">
				<Route index element={<Countries />} loader={countriesLoader} />
				<Route
					path=":country"
					element={<CountryDetails />}
					loader={countryLoader}
				/>
			</Route>
			<Route path="*" element={<NotFound />} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

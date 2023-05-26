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
import Countries, { countriesLoader } from "./pages/countries/Countries.jsx";
import CountryDetails from "./pages/countries/CountryDetails.jsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route index element={<Home />} />
			<Route path="about" element={<About />} />
			<Route
				path="countries"
				element={<Countries />}
				loader={countriesLoader}
			/>
			<Route path="country">
				<Route path=":id" element={<CountryDetails />} />
			</Route>
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

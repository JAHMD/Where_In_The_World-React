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
import CountryDetails from "./pages/CountryDetails.jsx";
import Home from "./pages/Home.jsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route index element={<Home />} />
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

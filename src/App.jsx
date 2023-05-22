import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
	return (
		<>
			<Navbar />
			<main className="min-h-screen bg-light-200 dark:bg-dark-300">
				<section className="container py-6">
					<Outlet />
				</section>
			</main>
		</>
	);
}

export default App;

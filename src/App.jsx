import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
	return (
		<>
			<Navbar />
			<main className="bg-light-200 dark:bg-dark-300">
				<section className="container relative min-h-[calc(100vh-88px)] py-8">
					<Outlet />
				</section>
			</main>
		</>
	);
}

export default App;

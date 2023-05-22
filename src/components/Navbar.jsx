import { useState } from "react";

function Navbar() {
	const [isOnDarkMode, setIsOnDarkMode] = useState(() => {
		const isDark = JSON.parse(localStorage.getItem("mode")) || false;
		if (isDark) {
			document.documentElement.classList.add("dark");
		}
		return isDark;
	});

	const toggleDarkMode = () => {
		const isDark = !isOnDarkMode;
		setIsOnDarkMode(isDark);
		localStorage.setItem("mode", isDark);
		document.documentElement.classList.toggle("dark");
	};

	return (
		<header className="dark:bg-dark-200">
			<div className="container flex items-center justify-between gap-4 py-4 dark:text-dark-100">
				<h1 className="text-xl font-bold sm:text-2xl">Where in the world?</h1>
				<button
					className="flex-shrink-0 rounded-md bg-light-200 px-4 py-2 text-sm font-semibold dark:bg-dark-300"
					onClick={toggleDarkMode}
				>
					{isOnDarkMode ? "Light" : "Dark"}
				</button>
			</div>
		</header>
	);
}

export default Navbar;

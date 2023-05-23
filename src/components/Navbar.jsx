import { useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi";

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
		<header className="bg-light-100 dark:bg-dark-200">
			<div className="container flex items-center justify-between gap-4 py-6 dark:text-dark-100">
				<h1 className="text-xl font-bold sm:text-3xl">Where in the world?</h1>
				<button
					className="flex-shrink-0 rounded-md bg-light-200 p-3 text-2xl font-semibold transition-colors duration-200 hover:bg-dark-text/50 dark:bg-dark-300 hover:dark:bg-[#343853]"
					onClick={toggleDarkMode}
				>
					{isOnDarkMode ? <HiSun /> : <HiMoon />}
				</button>
			</div>
		</header>
	);
}

export default Navbar;

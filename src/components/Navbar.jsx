import { useEffect, useState } from "react";
import { HiMenu, HiMoon, HiSun } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
	const [toggleMenu, setToggleMenu] = useState(false);
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);
	const [isOnDarkMode, setIsOnDarkMode] = useState(() => {
		const isDark = JSON.parse(localStorage.getItem("mode")) || false;
		if (isDark) {
			document.documentElement.classList.add("dark");
		}
		return isDark;
	});
	console.log(screenWidth);

	useEffect(() => {
		window.addEventListener("resize", () => {
			setScreenWidth(window.innerWidth);
		});

		return () => {
			window.addEventListener("resize", () => {
				setScreenWidth(window.innerWidth);
			});
		};
	}, []);

	const toggleDarkMode = () => {
		const isDark = !isOnDarkMode;
		setIsOnDarkMode(isDark);
		localStorage.setItem("mode", isDark);
		document.documentElement.classList.toggle("dark");
	};

	return (
		<header className="relative bg-light-100 text-light-300 dark:bg-dark-200 dark:text-dark-100">
			<div className="container flex flex-wrap items-center justify-between gap-4 py-6">
				<h1 className="mr-auto text-xl font-bold sm:text-3xl">
					<Link to=".">Where in the world?</Link>
				</h1>
				<nav
					className={`${
						toggleMenu && screenWidth <= 768 ? "active" : "hidden md:flex"
					}`}
				>
					<ul className="flex items-center gap-4 font-semibold">
						<li>
							<NavLink to="." end>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to="/about">About</NavLink>
						</li>
						<li>
							<NavLink to="/countries">Countries</NavLink>
						</li>
					</ul>
				</nav>
				<div className="flex items-center gap-1">
					<button
						onClick={() => setToggleMenu((oldState) => !oldState)}
						className="block flex-shrink-0 rounded-md p-2 text-2xl font-semibold transition-colors duration-200 hover:bg-light-200 hover:dark:bg-dark-300  md:hidden"
					>
						<HiMenu className="text-xl hover:bg-light-200 hover:dark:bg-dark-300" />
					</button>
					<button
						className="flex-shrink-0 rounded-md p-2 text-2xl font-semibold transition-colors duration-200 hover:bg-light-200  hover:dark:bg-dark-300"
						onClick={toggleDarkMode}
					>
						{isOnDarkMode ? <HiSun /> : <HiMoon />}
					</button>
				</div>
			</div>
		</header>
	);
}

export default Navbar;

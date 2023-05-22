/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			container: {
				padding: "1.5rem",
				center: true,
			},
			fontSize: {
				home: "14px",
				details: "16px",
			},
			fontFamily: {
				NunitoSans: ["Nunito Sans", "sans-serif"],
			},
			colors: {
				dark: {
					text: "hsl(228, 34%, 80%)",
					100: "hsl(228, 34%, 100%)",
					200: "hsl(229, 27%, 20%)",
					300: "hsl(232, 19%, 15%)",
				},
				light: {
					text: "hsl(229, 12%, 30%)",
					100: "hsl(0, 0%, 100%)",
					200: "hsl(228, 50%, 96%)",
					300: "hsl(229, 12%, 20%)",
				},
			},
		},
	},
	plugins: [],
};

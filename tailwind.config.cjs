/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				primary: ["Montserrat", "sans-serif"],
			},
			colors: {
				primary: "#2EBAC1",
				border: "#00B4AA",
				light: "#E7ECF3",
				dark: "#292D32",
			},
			boxShadow: {
				sd1: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;",
			},
		},
	},
	plugins: [],
};

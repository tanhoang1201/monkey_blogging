/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				primary: ["Poppins", "sans-serif"],
			},
			colors: {
				primary: "#2EBAC1",
				border: "#00B4AA",
				light: "#E7ECF3",
				dark: "#292D32",
			},
		},
	},
	plugins: [],
};

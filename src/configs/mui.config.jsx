import { createTheme } from "@mui/material";

const theme = createTheme({
	typography: {
		fontFamily: ["Montserrat", "sans-serif"].join(","),
	},
	spacing: 4,
	breakpoints: {
		values: {
			xs: 480,
			sm: 640,
			md: 768,
			lg: 1024,
			xl: 1280,
		},
	},
});

export default theme;

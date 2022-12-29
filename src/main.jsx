import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "@mui/material";

import App from "./App";
import "./index.scss";
import store, { persistor } from "./redux/store";
import theme from "./configs/mui.config";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<PersistGate persistor={persistor} loading={null}>
					<ThemeProvider theme={theme}>
						<App />
					</ThemeProvider>
				</PersistGate>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);

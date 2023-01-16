import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Container from "./pages/Container";
import DashBoardLayout from "./layouts/Dashboard";
import AddPostPage from "./pages/AddPostPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import PrivatePages from "./pages/PrivatePages";

function App() {
	return (
		<div className=" ">
			<Routes>
				<Route path="/" element={<Container />}>
					<Route index element={<Home />} />
				</Route>
				<Route element={<PrivatePages />}>
					<Route element={<DashBoardLayout />}>
						<Route path="/add-post" element={<AddPostPage />} />
					</Route>
				</Route>
				<Route path="/signup" element={<SignUpPage />} />
				<Route path="/signin" element={<SignInPage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<ToastContainer autoClose={2000} theme="colored" />
		</div>
	);
}

export default App;

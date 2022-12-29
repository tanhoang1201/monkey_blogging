import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SignUpForm from "./layouts/SignUpForm";
import SignInForm from "./layouts/SignInForm";
import AuthenticationPage from "./pages/AuthenticationPage";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Container from "./pages/Container";
import DashBoardLayout from "./layouts/Dashboard";
import DashboardAddPost from "./pages/DashboardAddPost";

function App() {
	return (
		<div className=" ">
			<Routes>
				<Route path="/" element={<Container />}>
					<Route index element={<Home />} />
				</Route>
				<Route element={<DashBoardLayout />}>
					<Route path="/add-post" element={<DashboardAddPost />} />
				</Route>
				<Route
					path="/signup"
					element={
						<AuthenticationPage>
							<SignUpForm />
						</AuthenticationPage>
					}
				/>
				<Route
					path="/signin"
					element={
						<AuthenticationPage>
							<SignInForm />
						</AuthenticationPage>
					}
				/>
				<Route path="*" element={<NotFound />} />
			</Routes>
			<ToastContainer autoClose={2000} theme="colored" />
		</div>
	);
}

export default App;

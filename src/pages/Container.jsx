import { Outlet } from "react-router-dom";
import Header from "../layouts/Header";

const Container = () => {
	return (
		<div>
			<Header />
			<Outlet />
		</div>
	);
};

export default Container;

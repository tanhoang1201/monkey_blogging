import { Outlet } from "react-router-dom";
import Header from "../layouts/Header";

const Container = () => {
	return (
		<div className="max-w-[1212px] px-4 mx-auto w-full">
			<Header />
			<Outlet />
		</div>
	);
};

export default Container;

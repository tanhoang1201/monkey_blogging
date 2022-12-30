import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivatePages = () => {
	const currentUser = useSelector((state) => state.auth.userLogin);
	return currentUser ? <Outlet /> : <Navigate to={"/signin"} />;
};

export default PrivatePages;

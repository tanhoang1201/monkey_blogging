import { useDispatch } from "react-redux";

import { logout } from "../../redux/authSlide";

const Menu = () => {
	const dispatch = useDispatch();
	const handleSignOut = () => {
		dispatch(logout());
	};
	return (
		<ul className="w-[150px]">
			<li className="p-1 px-2 hover:bg-slate-100 cursor-pointer" onClick={handleSignOut}>
				Sign Out
			</li>
		</ul>
	);
};

export default Menu;

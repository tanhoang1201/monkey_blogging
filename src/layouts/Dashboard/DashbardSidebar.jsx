import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import {
	DbIcon,
	LogoutIcon,
	PostIcon,
	TagIcon,
	UserGroupIcon,
	UserIcon,
} from "../../components/icons";

const sideBarRoutes = [
	{
		title: "Dashboard",
		icon: <DbIcon />,
	},
	{
		title: "Posts",
		icon: <PostIcon />,
	},
	{
		title: "Category",
		icon: <TagIcon />,
	},
	{
		title: "Users",
		icon: <UserGroupIcon />,
	},
	{
		title: "Logout",
		icon: <LogoutIcon />,
	},
];

const DashboardSidebar = ({ className }) => {
	return (
		<nav className={`py-8 ${className}`}>
			<ul className="shadow-lg rounded-lg">
				{sideBarRoutes.map((route, index) => (
					<li key={index}>
						<Link className="flex items-center gap-3 text-primary hover:bg-light rounded-lg p-3 transition-colors">
							<span>{route.icon}</span> <span className="font-semibold">{route.title}</span>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

DashboardSidebar.propTypes = {
	className: PropTypes.string,
};

export default DashboardSidebar;

import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";

import Button from "../../components/Button/Button";
import images from "../../assets/images";

const DashboardHeader = () => {
	return (
		<header className="flex items-center px-4 py-3 shadow-md">
			<Link to={"/"}>
				<img src={images.logo} alt="" className="w-12" />
			</Link>
			<Button className="ml-auto h-[56px] mr-3" style="p-0 text-xl ">
				Add new post
			</Button>
			<Avatar sx={{ backgroundColor: "#666" }}>TB</Avatar>
		</header>
	);
};

export default DashboardHeader;

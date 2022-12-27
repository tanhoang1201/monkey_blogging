import { Link } from "react-router-dom";
import images from "../../assets/images";
import Button from "../../components/Button";
import { SearchIcon } from "../../components/icons";
import Home from "../../pages/Home";

const navigation = [
	{
		title: "Home",
		to: "/",
		element: <Home />,
	},
	{
		title: "Blog",
		to: "/blog",
		// element: <Blog />,
	},
	{
		title: "Contact",
		to: "/contact",
		// element: <Contact />,
	},
];

const Header = () => {
	return (
		<header className="flex items-center py-2">
			<Link>
				<img src={images.logo} alt="" className="w-14 object-cover" />
			</Link>
			<nav className="ml-6 flex gap-10">
				{navigation.map((item, index) => (
					<Link key={index} to="#" className="text-lg font-semibold text-dark">
						{item.title}
					</Link>
				))}
			</nav>
			<div className="ml-auto border border-primary rounded-lg flex items-center  mr-5 w-[320px]">
				<input
					type="text"
					name=""
					id=""
					className="outline-none p-4 bg-transparent flex-1"
					placeholder="Search posts..."
				/>
				<button className="px-4 ">
					<SearchIcon />
				</button>
			</div>
			<Button elementType={Link} to="/signin" className={"h-[58px] leading-[58px]"}>
				Sign In
			</Button>
		</header>
	);
};

export default Header;

import { useEffect } from "react";
import Banner from "../layouts/home/Banner";
import PostFeature from "../layouts/home/PostFeature";
import PostNewest from "../layouts/home/PostNewest";

const Home = () => {
	useEffect(() => {
		document.title = "Home";
	});
	return (
		<div>
			<Banner className="mt-4 mb-[60px]" />
			<PostFeature className="mb-[50px]" />
			<PostNewest />
		</div>
	);
};

export default Home;

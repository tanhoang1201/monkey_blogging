import { Link } from "react-router-dom";
import images from "../assets/images";
import Button from "../components/Button";

const NotFound = () => {
	return (
		<div className="text-center w-1/2 mx-auto">
			<img src={images.notFound} alt="" className="inline-block mb-10" />
			<Button className={"py-4"} elementType={Link} to="/">
				Back to home
			</Button>
		</div>
	);
};

export default NotFound;

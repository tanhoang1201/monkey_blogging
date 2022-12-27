import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import images from "../assets/images";

const AuthenticationPage = ({ children }) => {
	return (
		<div>
			<div className="w-[832px] mx-auto py-6 px-4">
				<Link to={"/"} className="text-center mb-6 block">
					<img src={images.logo} alt="" className="inline-block" />
				</Link>
				<h1 className="font-semibold text-primary text-4xl mb-24 text-center">Monkey Blogging</h1>
				{children}
			</div>
		</div>
	);
};

AuthenticationPage.propTypes = {
	children: PropTypes.node.isRequired,
};

export default AuthenticationPage;

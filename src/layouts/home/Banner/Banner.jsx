import Button from "../../../components/Button";
import images from "../../../assets/images";
import { Link } from "react-router-dom";

const Banner = ({ className }) => {
	return (
		<section
			className={`pt-[50%] bg-gradient-to-br from-primary to-[#A4D96C] rounded-lg relative ${className}`}
		>
			<div className="absolute right-6 top-1/2 -translate-y-1/2">
				<img src={images.bannerImg} alt="Banner Image" />
			</div>
			<div className="absolute left-6 top-1/2 w-[40%] -translate-y-1/2 text-white">
				<h2 className="font-bold text-5xl mb-6">Monkey Blogging</h2>
				<p className="mb-12 leading-7">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi.
				</p>
				<Button elementType={Link} to="/signup" theme="text-primary bg-white">
					Get Started
				</Button>
			</div>
		</section>
	);
};

export default Banner;

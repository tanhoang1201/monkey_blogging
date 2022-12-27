import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Button({ children, className, elementType = "button", ...props }) {
	let Com = elementType;
	return (
		<Com
			className={`${
				props.disabled ? "opacity-50 disabled:pointer-events-none" : ""
			} font-semibold px-8 bg-gradient-to-br from-primary to-[#A4D96C] rounded-md text-white hover:opacity-80 transition-colors ${className}`}
			{...props}
		>
			{children}
		</Com>
	);
}

Button.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};

export default Button;

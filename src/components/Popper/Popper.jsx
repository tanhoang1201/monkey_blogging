import PropTypes from "prop-types";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/animations/scale.css";

const Popper = ({ children, content, ...props }) => {
	return (
		<Tippy
			{...props}
			interactive
			delay={[300]}
			render={(attrs) => (
				<div className="box" tabIndex="-1" {...attrs}>
					<div className="shadow-sd1 rounded-md py-2">{content}</div>
				</div>
			)}
		>
			{children}
		</Tippy>
	);
};

Popper.propTypes = {
	children: PropTypes.node.isRequired,
	content: PropTypes.node.isRequired,
};

export default Popper;

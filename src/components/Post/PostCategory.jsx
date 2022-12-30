import PropTypes from "prop-types";

const PostLabel = ({ className, children }) => {
	return (
		<label
			htmlFor=""
			className={`text-primary font-semibold py-1 px-2 rounded-md text-sm mb-3 inline-block ${className}`}
		>
			{children}
		</label>
	);
};

PostLabel.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
};

export default PostLabel;

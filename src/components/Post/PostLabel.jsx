import PropTypes from "prop-types";

const PostLabel = ({ className }) => {
	return (
		<label
			htmlFor=""
			className={`text-primary font-semibold py-1 px-2 rounded-md text-sm mb-3 inline-block ${className}`}
		>
			Kiến thức
		</label>
	);
};

PostLabel.propTypes = {
	className: PropTypes.string,
};

export default PostLabel;

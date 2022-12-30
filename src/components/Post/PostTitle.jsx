import PropTypes from "prop-types";

const PostContent = ({ className, children }) => {
	return <p className={`font-semibold text-lg ${className}`}>{children}</p>;
};

PostContent.propTypes = {
	className: PropTypes.string,
	content: PropTypes.string,
};

export default PostContent;

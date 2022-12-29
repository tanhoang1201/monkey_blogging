import PropTypes from "prop-types";

const PostMore = ({ className }) => {
	return (
		<p className={`font-semibold text-sm flex items-center gap-2 ${className}`}>
			<span>Mar 23</span>
			<span className="h-1 w-1 rounded-full inline-block bg-white"></span>
			<span>Andiez Le</span>
		</p>
	);
};

PostMore.propTypes = {
	className: PropTypes.string,
};

export default PostMore;

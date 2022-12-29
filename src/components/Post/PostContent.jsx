import PropTypes from "prop-types";

const PostContent = ({ className }) => {
	return (
		<p className={`font-semibold text-lg ${className}`}>
			Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
		</p>
	);
};

PostContent.propTypes = {
	className: PropTypes.string,
};

export default PostContent;

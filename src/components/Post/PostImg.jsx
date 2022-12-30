import PropTypes from "prop-types";

const PostImg = ({ className, src }) => {
	return <img src={src} alt="" className={`object-cover ${className}`} />;
};

PostImg.propTypes = {
	className: PropTypes.string,
	src: PropTypes.string,
};

export default PostImg;

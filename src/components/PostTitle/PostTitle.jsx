import PropTypes from "prop-types";

const PostTitle = ({ children, className }) => {
	return (
		<h2
			className={`font-semibold text-[28px] text-[#3A1097] before:content-[''] before:absolute relative before:top-0 before:left-0 before:h-1 before:w-1/2 before:bg-[#3A1097] inline-block mb-[30px] ${className}`}
		>
			{children}
		</h2>
	);
};

PostTitle.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};

export default PostTitle;

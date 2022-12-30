import PropTypes from "prop-types";

import PostTitle from "../../../components/SectionHeading/SectionHeading";
import PostFeatureItem from "./PostFeatureItem";

const PostFeature = ({ className, data }) => {
	return (
		<section className={`${className}`}>
			<PostTitle className="">Feature</PostTitle>
			<div className="grid grid-cols-3 gap-10">
				{data.map((value) => (
					<PostFeatureItem key={value.id} value={value} />
				))}
			</div>
		</section>
	);
};

PostFeatureItem.propTypes = {
	className: PropTypes.string,
	data: PropTypes.array,
};

export default PostFeature;

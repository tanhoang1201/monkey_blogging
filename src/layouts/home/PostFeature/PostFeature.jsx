import PostTitle from "../../../components/PostTitle/PostTitle";
import PostFeatureItem from "./PostDeatureItem";

const PostFeature = ({ className }) => {
	return (
		<section className={`${className}`}>
			<PostTitle className="">Feature</PostTitle>
			<div className="grid grid-cols-3 gap-10">
				<PostFeatureItem />
				<PostFeatureItem />
				<PostFeatureItem />
			</div>
		</section>
	);
};

export default PostFeature;

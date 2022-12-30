import PostTitle from "../../../components/SectionHeading/SectionHeading";
import PostContent from "../../../components/Post/PostTitle";
import PostImg from "../../../components/Post/PostImg";
import PostLabel from "../../../components/Post/PostCategory";
import PostMore from "../../../components/Post/PostMore";
import PostNewestItem from "./PostNewstItem";
import PostNewestItemRow from "./PostNewestItemRow";

const PostNewest = () => {
	return (
		<section>
			<PostTitle>Newest Post</PostTitle>
			<div className="grid grid-cols-2 gap-10 mb-14">
				<PostNewestItem />
				<div className="px-5 bg-light rounded-xl">
					<PostNewestItemRow />
					<PostNewestItemRow />
					<PostNewestItemRow noBorder />
				</div>
			</div>
			<div className="grid grid-cols-4 gap-9">
				<PostNewestItem />
				<PostNewestItem />
				<PostNewestItem />
				<PostNewestItem />
			</div>
		</section>
	);
};

export default PostNewest;

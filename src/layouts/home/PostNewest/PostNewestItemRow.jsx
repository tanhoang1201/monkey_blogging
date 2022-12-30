import PostContent from "../../../components/Post/PostTitle";
import PostImg from "../../../components/Post/PostImg";
import PostLabel from "../../../components/Post/PostCategory";
import PostMore from "../../../components/Post/PostMore";

const PostNewestItemRow = ({ noBorder }) => {
	return (
		<div className={`flex gap-5  py-5  ${!noBorder ? "border-b border-border" : ""}`}>
			<div className="">
				<PostImg
					className="rounded-lg"
					src="https://s3-alpha-sig.figma.com/img/301b/dd86/c746f39b29d279d30158df2e5471dcc7?Expires=1673222400&Signature=Fuq6YUuZDahi4SBj1eDPsJAE1Y98dAoLvVa7vVW4LNrOXmfsDtvnDLKu-KgHh4o~usj1bhtgStlvgA4FZyMZg8NqB9E13fUGGXmMy~SVdLnn8yq5ir4Xrmdch0Wua8q7J-kBAYP80hozDWO7JABPodSKjRa8Tl45~mvSb6rG3KI~hCT5gGKfJy-U6x88sQuma94X2oTwVLgu9OnGDb2HDN2LcJEmzM5dpfo4NQ3qAnzzdIxYTvs~xUNwjA-UeIug681QiWdAs-lsUH1geyvKCVCyx8yuEqTQHEPQRTSYe-EDom0FVywP4g2L8QY7dXO25RYmmjmur7HkidA4TvZwvw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
				/>
			</div>
			<div className="">
				<PostLabel className="mb-3 bg-white" />
				<PostContent className="text-dark mb-3" />
				<PostMore className="text-primary" />
			</div>
		</div>
	);
};

export default PostNewestItemRow;

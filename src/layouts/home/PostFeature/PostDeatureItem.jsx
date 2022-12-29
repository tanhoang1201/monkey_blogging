import PostContent from "../../../components/Post/PostContent";
import PostImg from "../../../components/Post/PostImg";
import PostLabel from "../../../components/Post/PostLabel";
import PostMore from "../../../components/Post/PostMore";

const PostFeatureItem = () => {
	return (
		<div className="rounded-lg overflow-hidden relative ">
			<div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.1)] z-10"></div>
			<div className="pt-[50%]">
				<PostImg
					className="absolute top-0 left-0 w-full h-full"
					src="https://s3-alpha-sig.figma.com/img/f862/2bb2/58aa272e7f59d5910f2a8b8a4da46c32?Expires=1673222400&Signature=PUgBQhScgo8v4YHQ1bmOJoUiab~96pvxfGS-8ecC~Cm9TnwfZb4WT0OTkko6W-7XDT6BQkFcnDQungFakxow0mxWYjLh5lyUn8glrAIxM940QYjGud4jnWR617xTdv6HImmhewQgdf6CNHP7G7tT1LyANpj7BH1PDn9uO-PUzqEoNYgKL5gRacspNqjx-NAZrCCUxvF9sU6jxKGe9YhhCi--3NH0BdJV9M6-zXhrhsrkynQeavpBLRxC0RGEVWChiNNETuDkbvU-fAYo0wSVVv5o~d8JbjcRogFcarMW49I7SgyGYJ3OWE~mBbPkc6DxzGDdTompOiKFKmxCxkukqQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
				/>
			</div>
			<div className="absolute top-4 left-4 right-1 z-20">
				<PostLabel className="bg-light" />
				<PostContent className="text-white" />
				<PostMore className="absolute top-0 right-0 text-white" />
			</div>
		</div>
	);
};

export default PostFeatureItem;

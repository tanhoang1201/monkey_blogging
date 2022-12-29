import PostContent from "../../../components/Post/PostContent";
import PostImg from "../../../components/Post/PostImg";
import PostLabel from "../../../components/Post/PostLabel";
import PostMore from "../../../components/Post/PostMore";

const PostNewestItem = () => {
	return (
		<div className="rounded-lg overflow-hidden relative ">
			<div className="mb-7">
				<PostImg
					className="rounded-lg"
					src="https://s3-alpha-sig.figma.com/img/e6a5/d086/f4dd62df84a598b10d0d0400bab268f7?Expires=1673222400&Signature=RzSqJRc0d9GdORh9VvSi7uMPwPU6MfR~909MiAWE4Wt8CUaJML9qv0CRDMg2ccX~IYcRbBnburkbGkQCYkcuHK0grmucWQRVPq0ERTqW7Zp3usI3XQOgMf8hlNuLLJoACtIehOX1yoR4DUab1EQEu-KzGwOqun0FG9S6xDYtx1pYf~pTV7koRDOyp0eIwemzDgi43buvRra41ggvg9DVW2FPNlTmWSO81Hir47imJdZcO28JkVERHrU4KUo1PRL-8tl9m88SRPDuQvJXHlKK0EeHHCgHKhztrUxwhgyfR2IbeC3jFjiDpp7Np2PQrQLRMcwg5-EDgqKOPIpCQLsjgQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
				/>
			</div>
			<div className="">
				<PostLabel className="mb-3 bg-light" />
				<PostContent className="mb-3 text-dark" />
				<PostMore className="text-primary" />
			</div>
		</div>
	);
};

export default PostNewestItem;

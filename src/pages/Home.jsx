import { onSnapshot, query, where } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { postInstance } from "../configs/firebase.config";
import Banner from "../layouts/home/Banner";
import PostFeature from "../layouts/home/PostFeature";
import PostNewest from "../layouts/home/PostNewest";

const Home = () => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		document.title = "Home";
		const queries = query(postInstance, where("status", "==", "1"), where("hot", "==", true));
		onSnapshot(queries, (res) => {
			const result = res.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
			setPosts(result);
		});
	}, []);
	return (
		<div>
			<Banner className="mt-4 mb-[60px]" />
			<PostFeature className="mb-[50px]" data={posts} />
			<PostNewest />
		</div>
	);
};

export default Home;

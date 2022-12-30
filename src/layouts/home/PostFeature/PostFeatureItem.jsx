import { doc, getDoc, onSnapshot, query, where } from "@firebase/firestore";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import PostContent from "../../../components/Post/PostTitle";
import PostImg from "../../../components/Post/PostImg";
import PostLabel from "../../../components/Post/PostCategory";
import PostMore from "../../../components/Post/PostMore";
import { categoriesInstance, userInstance } from "../../../configs/firebase.config";

const PostFeatureItem = ({ value }) => {
	const [category, setCategory] = useState("");
	const [author, setAuthor] = useState("");
	useEffect(() => {
		const categoryRef = doc(categoriesInstance, value.categoryId);
		getDoc(categoryRef).then((doc) => {
			setCategory(doc.data().name);
		});

		const authorRef = query(userInstance, where("id", "==", value.userId));
		onSnapshot(authorRef, (res) => {
			setAuthor(res.docs[0].data().name);
		});
	}, []);
	return (
		<div className="rounded-lg overflow-hidden relative ">
			<div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.1)] z-10"></div>
			<div className="pt-[60%]">
				<PostImg className="absolute top-0 left-0 w-full h-full" src={value.image} />
			</div>
			<div className="absolute top-4 left-4 right-1 z-20">
				<PostLabel className="bg-light">{category}</PostLabel>
				<PostContent className="text-white">{value.title}</PostContent>
				<PostMore
					className="absolute top-0 right-0 text-white"
					author={author}
					createAt={"Jan 12"}
				/>
			</div>
		</div>
	);
};

PostFeatureItem.propTypes = {
	value: PropTypes.object.isRequired,
};

export default PostFeatureItem;

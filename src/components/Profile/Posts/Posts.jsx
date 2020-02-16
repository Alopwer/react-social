import React, { useRef } from "react";
import s from "./Posts.module.scss";
import Post from "./Post/Post";

const Posts = props => {
	const postEl = useRef();
	const postsElements = props.posts.map(post => (
		<Post message={post.message} likes={post.likes} key={post.id}/>
	));

	const onAddPost = () => {
		props.addPost()
	};

	const onPostChange = () => {
		const text = postEl.current.value;
		props.updateNewPostText(text)
	};

	return (
		<div className={s.posts}>
			Posts
      		<div>
				<textarea
					ref={postEl}
					onChange={onPostChange}
					value={props.newPostText}
				></textarea>
				<button onClick={onAddPost}>Add post</button>
			</div>
			{postsElements}
		</div>
	);
};

export default Posts;

import React from "react";
import s from "./Profile.module.scss";
import PostsContainer from "./Posts/PostsContainer";
import ProfileInfo from "./PropfileInfo/ProfileInfo";

const Profile = props => {
	return (
		<section className={s.profile}>
			<ProfileInfo />
			<PostsContainer
				store={props.store}
			/>
			<div className={s.news}>News</div>
		</section>
	);
};

export default Profile;

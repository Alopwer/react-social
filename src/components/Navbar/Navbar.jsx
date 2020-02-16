import React from "react";
import s from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';

const Navbar = (props) => {
	const friendsElements = props.friends.map(friend => (
		<li className={s.item} key={friend.id}>
			<NavLink className={s.link} to="">
				{friend.name}
			</NavLink>
		</li>
	))

	return (
		<nav className={s.nav}>
			<ul className={s.menu}>
				<li className={s.item}>
					<NavLink
						to="/profile"
						className={s.link}
						activeClassName={s["link_active"]}
					>
						Profile
					</NavLink>
				</li>
				<li className={s.item}>
					<NavLink
						to="/dialogs"
						className={s.link}
						activeClassName={s["link_active"]}
					>
						Messages
					</NavLink>
				</li>
				<li className={s.item}>
					<NavLink
						to="/news"
						className={s.link}
						activeClassName={s["link_active"]}
					>
						News
					</NavLink>
				</li>
				<li className={s.item}>
					<NavLink
						to="/music"
						className={s.link}
						activeClassName={s["link_active"]}
					>
						Music
					</NavLink>
				</li>
				<li className={s.item}>
					<NavLink
						to="/settings"
						className={s.link}
						activeClassName={s["link_active"]}
					>
						Settings
					</NavLink>
				</li>
			</ul>
			<ul className={s.menu}>{friendsElements}</ul>
		</nav>
	)
};

const mapStateToProps = (state) => {
	return {
		friends: state.sidebar.friends
	}
}

export default connect(mapStateToProps)(Navbar);

import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import "./App.scss";
import { Route } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

function App() {
	return (
		<div className="app container">
			<HeaderContainer />
			<Navbar />
			<div className="app-content-wrapper">
				<Route
					exact
					path="/dialogs"
					render={() => <DialogsContainer />}
				/>
				<Route
					path="/profile/:userId?"
					render={() => (
						<ProfileContainer />
					)}
				/>
				<Route
					path="/users"
					render={() => (
						<UsersContainer />
					)}
				/>
				<Route
					path="/login"
					render={() => (
						<Login />
					)}
				/>
			</div>
		</div>
	);
}

export default App;

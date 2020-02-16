import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import "./App.scss";
import { Route } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";

function App() {
	return (
		<div className="app container">
			<Header />
			<Navbar />
			<div className="app-content-wrapper">
				<Route
					exact
					path="/dialogs"
					render={() => <DialogsContainer />}
				/>
				<Route
					path="/profile"
					render={() => (
						<Profile />
					)}
				/>
				<Route
					path="/users"
					render={() => (
						<UsersContainer />
					)}
				/>
			</div>
		</div>
	);
}

export default App;

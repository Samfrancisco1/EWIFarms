import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";

import LandingPage from "./views/LandingPage";
import Auth from "./views/Auth";
import Dashboard from "./views/Dashboard";

function App() {
	return (
		<div className="App">
			<Router>
				<Route exact path="/" component={LandingPage} />
				<Switch>
					<Route exact path="/auth" component={Auth} />
					<Route exact path="/dashboard" component={Dashboard} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;

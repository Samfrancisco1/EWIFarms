import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";

import LandingPage from "./views/LandingPage";
import Auth from "./views/Auth";
import Dashboard from "./views/Dashboard";
import About from "./views/About";
import Media from "./views/Media";

function App() {
	return (
		<div className="App">
			<Router>
				<Route exact path="/" component={LandingPage} />
				<Switch>
					<Route exact path="/auth" component={Auth} />
					<Route exact path="/dashboard" component={Dashboard} />
					<Route exact path="/about" component={About} />
					<Route exact path="/media" component={Media} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;

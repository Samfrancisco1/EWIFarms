import React, { Component } from "react";
import { Tabs } from "antd";

import "./index.css";
import Videos from "./Videos";
import Images from "./Images";
import Navbar from "../../components/Banner/NavBar"

export default class Media extends Component {
	render() {
		const { TabPane } = Tabs;
		return (
			<>
				<div className="media">
          <Navbar />
					<Tabs style={{marginTop: "10px"}} type="card">
						<TabPane tab="Images" key="1">
							<Images />
						</TabPane>
						<TabPane tab="Videos" key="2">
            <Videos />
						</TabPane>
					</Tabs>
				</div>
			</>
		);
	}
}

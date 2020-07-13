import React from "react";
import { Layout, Menu, Avatar } from "antd";
import { BrowserRouter as Router, Route, Link, useLocation } from "react-router-dom";
import {
	MenuUnfoldOutlined,
	CalculatorOutlined,
	DollarOutlined,
	BellOutlined,
	UserOutlined,
	LoginOutlined,
} from "@ant-design/icons";
import "./index.css";
import Footer from "./Footer";
import Logo from "../../assets/images/logo2.png";
import Logo3 from "../../assets/images/logo.png";

import Home from "./Home";
import Profile from "./Profile";
import Notification from "./Notification";
import Calculator from "./Calculator";
import Deposit from "./Transaction/Deposit";
import History from "./Transaction/History";
import Withdraw from "./Transaction/Withdraw";

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

export default class Dashboard extends React.Component {
	state = {
		collapsed: false,
	};

	onCollapse = (collapsed) => {
		console.log(collapsed);
		this.setState({ collapsed });
	};

	returnLocation = () => {
		let location = useLocation();
		location.toUpperCase();
		console.log(location);
		
		return location;
	}

	render() {
		
		return (
			<Router>
				<Layout style={{ minHeight: "100vh" }}>
					<Sider
						collapsible
						collapsed={this.state.collapsed}
						onCollapse={this.onCollapse}
					>
						<div className="logo">
							<img
								src={this.state.collapsed === false ? Logo : Logo3}
								alt="Logo"
							/>
						</div>
						<Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
							<Avatar
								size={80}
								style={{
									color: "#f56a00",
									backgroundColor: "#fde3cf",
									margin: "auto",
									display: "block",
									paddingBottom: "10px",
								}}
							>
								Y
							</Avatar>
							<h4
								style={{
									fontWeight: "bold",
									marginTop: "10px",
									textAlign: "center",
									fontSize: "20px",
									color: "#fff",
								}}
							>
								Yabi Francis
							</h4>
							<Menu.Item key="1" icon={<MenuUnfoldOutlined />}>
								<Link to="./dashboard">Dashboard</Link>
							</Menu.Item>
							<SubMenu key="sub1" icon={<DollarOutlined />} title="Investments">
								<Menu.Item key="6">
									<Link to="./history">History</Link>
								</Menu.Item>
								<Menu.Item key="7">
									<Link to="./deposit">Deposit</Link>
								</Menu.Item>
								<Menu.Item key="8">
									<Link to="./withdraw">Withdraw</Link>
								</Menu.Item>
							</SubMenu>

							<Menu.Item key="2" icon={<CalculatorOutlined />}>
								<Link to="./calculator">Calculator</Link>
							</Menu.Item>
							<Menu.Item key="3" icon={<BellOutlined />}>
								<Link to="./notification">Notification</Link>
							</Menu.Item>
							<Menu.Item key="4" icon={<UserOutlined />}>
								<Link to="./profile">Profile</Link>
							</Menu.Item>
							<Menu.Item key="5" icon={<LoginOutlined />}>
								Logout
							</Menu.Item>
						</Menu>
					</Sider>
					<Layout className="site-layout">
						<Header className="site-layout-background" style={{ padding: 0 }} >
								<h3>{ this.returnLocation }</h3>
						</Header>
						<Content style={{ margin: "0 16px" }}>
							<div
								className="site-layout-background"
								style={{
									padding: 24,
									minHeight: 360,
									marginTop: 20,
								}}
							>
								<Route exact path="/dashboard" component={Home} />
								<Route exact path="/profile" component={Profile} />
								<Route exact path="/notification" component={Notification} />
								<Route exact path="/calculator" component={Calculator} />
								<Route exact path="/deposit" component={Deposit} />
								<Route exact path="/withdraw" component={Withdraw} />
								<Route exact path="/History" component={History} />
							</div>
						</Content>
						<Footer />
					</Layout>
				</Layout>
			</Router>
		);
	}
}

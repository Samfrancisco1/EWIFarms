import React from "react";
import "./index.css";
import { Nav, Navbar } from "react-bootstrap";

import logo2 from "../../../assets/images/logo2.png";

export default function NabBar() {
	const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");

	React.useEffect(() => {
		const updateNavbarColor = () => {
			if (
				document.documentElement.scrollTop > 299 ||
				document.body.scrollTop > 299
			) {
				setNavbarColor("navbar-transparent");
			} else if (
				document.documentElement.scrollTop < 300 ||
				document.body.scrollTop < 300
			) {
				setNavbarColor("");
			}
		};

		window.addEventListener("scroll", updateNavbarColor);

		return function cleanup() {
			window.removeEventListener("scroll", updateNavbarColor);
		};
	});

	return (
		<div className="navigation">
			<Navbar
				id={navbarColor}
				style={{ color: "#fff" }}
				collapseOnSelect
				expand="lg"
				fixed="top"
			>
				<Navbar.Brand href="#home">
					<img
						style={{ width: "150px", height: "30px" }}
						src={logo2}
						alt="NavBrand"
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse className="justify-content-end">
					<Nav className="navlinks" variant="pills" defaultActiveKey="#home">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#how">How to invest</Nav.Link>
						<Nav.Link href="/media">Our Media</Nav.Link>
						<Nav.Link href="/about">About us</Nav.Link>
						<Nav.Link href="#contact">Contact us</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}

import React from "react";
import "./index.css";
import { Nav, Navbar } from "react-bootstrap";

import logo from "../../../assets/images/logo.png";

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
			<Navbar id={ navbarColor } style={{color: "#fff"}} collapseOnSelect expand="lg" fixed="top">
				<Navbar.Brand href="#home">EWIFARMS</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse className="justify-content-end">
					<Nav className="navlinks" variant="pills" defaultActiveKey="#home">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#how">How it works</Nav.Link>
						<Nav.Link href="#calculator">Investment Calculator</Nav.Link>
						<Nav.Link href="#about">About us</Nav.Link>
						<Nav.Link href="#testimony">Testimony</Nav.Link>
						<Nav.Link href="#contact">Contact us</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}

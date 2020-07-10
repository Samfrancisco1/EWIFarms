import React, { Component } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

import "./index.css";

export default class Contact extends Component {
	render() {
		return (
			<>
				<section className="contact">
					<div className="contact-container">
						<h2>Get in touch</h2>
						<Container>
							<Row>
								<Col sm={8}>
									<div className="contact-form">
										<Card style={{ width: "100%" }}>
											<Card.Title style={{ textAlign: "center" }}>
												Lets hear from you
											</Card.Title>
											<Card.Body>
												<Form>
													<Form.Row>
														<Form.Group as={Col} controlId="name">
															<Form.Label>Name</Form.Label>
															<Form.Control
																type="text"
																placeholder="Enter Name"
															/>
														</Form.Group>

														<Form.Group as={Col} controlId="email">
															<Form.Label>Email</Form.Label>
															<Form.Control
																type="email"
																placeholder="Emaill Address"
															/>
														</Form.Group>
													</Form.Row>

													<Form.Row>
														<Form.Group as={Col} controlId="number">
															<Form.Label>Phone Number</Form.Label>
															<Form.Control
																type="number"
																placeholder="Enter Phone Number"
															/>
														</Form.Group>

														<Form.Group as={Col} controlId="location">
															<Form.Label>Location</Form.Label>
															<Form.Control
																type="text"
																placeholder="Emaill Location"
															/>
														</Form.Group>
													</Form.Row>

													<Form.Group controlId="message">
														<Form.Label>Message</Form.Label>
														<Form.Control as="textarea" rows="5" />
													</Form.Group>

													<Button variant="primary" type="submit">
														Submit
													</Button>
												</Form>
											</Card.Body>
										</Card>
									</div>
								</Col>
								<Col sm={4}>
									<div className="contact-address"></div>
								</Col>
							</Row>
						</Container>
					</div>
				</section>
			</>
		);
	}
}

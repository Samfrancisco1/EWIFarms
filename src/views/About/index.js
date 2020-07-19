import React, { Component } from "react";
import Navbar from "../../components/Banner/NavBar";
import { Col, Row, Container } from "react-bootstrap";

import "./index.css";

export default class About extends Component {
	render() {
		return (
			<>
				<div className="about">
					<div className="nav-bar">
						<Navbar />
					</div>
					<Container>
						<Row>
							<Col sm={12}>
								<div className="about-content">
									<h3 style={{ color: "rgb(185, 29, 115)", marginTop: "50px" }}>
										WHO WE ARE
									</h3>
									<p style={{ textAlign: "left" }}>
										The World we live in today is a world where our foundation
										is no longer important, our culture, tradition and morals
										are gradually going into extinction as we have thrown every
										good ethics and landmark of our forefathers to the “winds of
										civilization and modern lifestyle”. This happens everywhere
										in the world today, but Ethel Women initiative is saying No;
										Nigerian Women all over the world MUST be different and live
										differently from women in other countries of the world.
										Ethel Women Initiative is initiated to assist the Nigerian
										female child understand and know who she really is in the
										society and also her role in building a Home, breeding
										nation builders and also her contribution towards nation
										building. Ethel Women Initiative is initiated to enlighten,
										educate and empower the Nigerian female child to see beyond
										her physical beauty, embrace her inner beauty and abilities,
										moulding her into a #NailjaVirtuousWoman and
										#NaijaNobleWoman.
									</p>

									<h3 style={{ color: "rgb(185, 29, 115)", marginTop: "50px" }}>
										VISION
									</h3>
									<p style={{ textAlign: "left" }}>
										To Embark on an awareness and Enlightenment campaign to
										groom the Nigeria female child into a Virtuous Woman who
										will be able to stand up, live right and become the pillar
										she is originally created to be in her immediate environment
										and the country at large.
									</p>

									<h3 style={{ color: "rgb(185, 29, 115)", marginTop: "50px" }}>
										MISSION
									</h3>
									<p style={{ textAlign: "left" }}>
										Giving the encouragement, motivation and support these women
										need to achieve their dreams and goals. Empower them with
										the basic information and materials they will need if
										possible to bring about this great transformation.
									</p>

									<h3 style={{ color: "rgb(185, 29, 115)", marginTop: "50px" }}>
										AIMS AND OBJECTIVES
									</h3>
									<p style={{ textAlign: "left" }}>
										1. To Create Awareness and Enlightenment campaign to groom
										the Nigeria female child into a Virtuous Woman <br />
										2. To be able to stand up, live right and become the pillar
										that she is originally created to be in her individual
										environment and society
										<br />
										3. To empower the Nigerian Female Child through skills
										acquisition, intellectual training and resources to setup
										their own establishments
										<br />
										4. To Educate them on how to live responsibly as ladies in
										the society
									</p>

									<h3 style={{ color: "rgb(185, 29, 115)", marginTop: "50px" }}>
										ABOUT ETHEL WOMEN INITIATIVE FARMS
									</h3>
									<p style={{ textAlign: "left" }}>
										Ethel Women Initiative farms (EWI Farms) is established to
										help alleviate hunger, poverty and unemployment in Nigerian
										homes.
										<br />
										We have limited supply of farm produce in Nigeria,
										especially cash crops and livestock, due to the high demand
										from consumers of over 150milliom people. We at Ethel Women
										Initiative decided to invest in Agriculture and also
										encourage other investors to join us.
										<br />
										Our farming interest will also extend to training,
										production and processing. We would give opportunities to
										youths all over Nigeria to learn several farming skills from
										our farms, empower those (as much as we can) who are
										interested in farming but have no funds to begin.
										<br />
										Production and processing of most of our farm produce from
										Palm fruits into Palm oil to Plantain powder, yam powder,
										etc. Our profits will be shared among investors according to
										their capital investments, while we spend the other part on
										charitable works.
									</p>

									<h3 style={{ color: "rgb(185, 29, 115)", marginTop: "50px" }}>
										POULTRY FARMING
									</h3>
									<p style={{ textAlign: "left" }}>
										Our poultry farm is focused on the production of eggs and
										meat for the fast growing Nigerian population. EWI farms is
										aware of the health implication of red meat and decided to
										create a business to meet the increasing demand for white
										meat and eggs in the Nigerian market. Chickens happens to be
										a great source of white meat and are also largely known for
										egg production. <br />
										One of our reasons for this initiative, is to create
										employment, provide meat and eggs for the teaming population
										and also, support the less privilege from our profit and
										earnings.
										<br />
										We plan on supplying our meat and eggs to restaurants,
										homes, delivery food centres, hotels, schools, clubs, bakery
										and catering businesses and supermarkets. Our chickens and
										eggs are sold at very affordable prices, so as to not only
										sell out fast, but also make our poultry available for every
										category of individuals in the country.
										<br />
										Our Poultry farm project will give investors opportunity to
										invest a minimum of two hundred and fifty thousand naira
										(250,000) per investor. This plan is meant to articulate the
										vision and future of our poultry farm, to appeal to
										investors and external stakeholders to get involve and grow
										our poultry business, through their capital investments, as
										poultry farming, is a capital intensive business.
										<br />
										Our investors’ funds, including EWI funds, will be used to
										buy and breed day old broilers of the curb5 specie from
										their brooding (day old chicks) stage to adulthood, where
										they will be sold to consumers within a 7week circle. This
										circle continues for a period of one year, then investors
										who are no longer interested in our investment plan, can
										withdraw their investment capital.
										<br />
									</p>

									<h3 style={{ color: "rgb(185, 29, 115)", marginTop: "50px" }}>
										POULTRY FARM OFFERS
									</h3>
									<p style={{ textAlign: "left" }}>
										These are our offers at EWI Poultry farm:
										<br />
										1. Turn in profits for both the organization and our
										respected investors every 120days.
										<br />
										2. We will maintain our promise of 20% Return on Investment
										(ROI) every 120days, which will span three times in a year.
										<br />
										3. A minimum of two hundred and fifty thousand (250,000) is
										what each investor needs, to join EWI farms profit making
										venture.
										<br />
									</p>

									<h3 style={{ color: "rgb(185, 29, 115)", marginTop: "50px" }}>
										POULTRY FARM MISSION
									</h3>
									<p style={{ textAlign: "left" }}>
										EWI poultry’s mission is to provide customers with quality,
										fresh, and valuable products. Quality and service are our
										number one priority. To provide investors the opportunity to
										receive a nice return on investment and high-quality growth.
										<br />
										We plan on contributing our profits to teenage girls, who
										are single mothers, homeless and extremely poor.
									</p>
								</div>
							</Col>
						</Row>
					</Container>
				</div>
			</>
		);
	}
}

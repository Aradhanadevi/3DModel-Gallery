import React from "react";
import { NavLink } from "react-router-dom"; 
import {
	Box,
	FooterContainer,
	Row,
	Column,
	FooterLink,
	Heading,
} from "./FooterStyles";

const Footer = () => {
	return (
		<Box style={{ background: "transparent"}}>
			<h1 style={{ color: "black", textAlign: "center", marginTop: "10px" }}>Models Gallary</h1>
			<FooterContainer >
				<Row>
					<Column>
						<Heading>About Us</Heading>
						<FooterLink as={NavLink} to="/about">Aim</FooterLink>
						<FooterLink as={NavLink} to="/about">Vision</FooterLink>
						<FooterLink as={NavLink} to="/about">Testimonials</FooterLink>
					</Column>
					<Column>
						<Heading>Services</Heading>
						<FooterLink as={NavLink} to="/contact">Animation</FooterLink>
						<FooterLink as={NavLink} to="/contact">Game Development</FooterLink>
						<FooterLink as={NavLink} to="/contact">CGI</FooterLink>
						<FooterLink as={NavLink} to="/contact">Teaching Blender</FooterLink>
					</Column>
					<Column>
						<Heading>Social Media</Heading>
						<FooterLink href="https://www.linkedin.com/in/aradhanadevi-jadeja-58a10226a">
							<i className="fab fa-linkedin-in">
								<span style={{ marginLeft: "10px" }}>LinkedIn</span>
							</i>
						</FooterLink>
						<FooterLink href="https://www.youtube.com/@aradhanajadeja5783">
							<i className="fab fa-youtube">
								<span style={{ marginLeft: "10px" }}>Youtube</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-facebook-f">
								<span style={{ marginLeft: "10px" }}>Facebook</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-instagram">
								<span style={{ marginLeft: "10px" }}>Instagram</span>
							</i>
						</FooterLink>
					</Column>
					<Column>
						<Heading>Navigate</Heading>
						<FooterLink as={NavLink} to="/que">
							FAQ
						</FooterLink>
						<FooterLink as={NavLink} to="/blog">
							Blog
						</FooterLink>
					</Column>
				</Row>
				
			</FooterContainer>
		</Box>
	);
};
export default Footer;

import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import "./about.css";
import mainImg from'./me.jpg';
function About() {
	return (
		<Container>
			<Row>
				<div className="jumbotron jumbotron-fluid mb-0">
					<Container>
						<h1 className="display-4 pb-0 pb-sm-0 pb-md-0 mb-2 text-center">About Me</h1>
					</Container>
				</div>
			</Row>
			<Row>
				<Col xs={10} sm={8} md={8} lg={4} className="center mx-auto mb-lg-10 mb-m-8 mb-8">
					<img src={mainImg} alt="Me" className="img-fluid rounded-circle"
					/>
				</Col>

				<Col xs={12} sm={6} md={6} className="text-center my-auto" id="about">
					<p>
						Hi, I'm Umer Abdullah, a Full Stack Developer who specializes in JavaScript Techniques, MERN Stack(MongoDB, Express, React, and Node. js). Learning Web Application Development with Backend API system.
					</p>
					<p>
						I have experience in front-end web development, working with technologies like React.js, Sass, Tailwind, Bootstrap,
						CSS, HTML, JavaScript, JSON, Tailwind.css, Node.JS, and various other modern development
						media.
					</p>
				</Col>
			</Row>
		</Container>
	);
}

export default About;

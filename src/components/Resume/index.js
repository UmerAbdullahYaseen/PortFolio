import React from "react";
import { Container, Row, Col, Accordion, ListGroup, Button } from "react-bootstrap";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";


const skillTypes = [
	{
		name: "Frontend Development",
		skills: [
			"HTML5",
			"CSS3",
			"JavaScript",
			"React",
			"Redux",
			"Bootstrap",
			"Git",
			"Responsive Design",
			"React Native(beginner)"
		]
	}, {
		name: "Development Tools",
		skills: [
			"Git",
			"npm",
		]
	}, {
		name: "Database Skills",
		skills: [
			"MySQL",
			"Sequelize",
			"MongoDB",
			"Mongoose"
		]
	},
];

	function Resume() {
		return (
			<Container>
				<Row>
					<Col>
					<div className="jumbotron jumbotron-fluid">
						<Container>
							<h1 className="display-4 text-center">Resume</h1>
						</Container>
					</div>
					</Col>
				</Row>
				<Row>
					<Col className="text-center mb-3">
						<Button href="https://drive.google.com/file/d/1Q8KYMcVSvoe9v7xZPbkjJGs491eRi44R/view?usp=sharing">Download My Resume</Button>
					</Col>
				</Row>
				<Row>
					<Col>
						<Accordion>
							{skillTypes.map((skillCategory, evtKey) => {
								return(
								<Accordion.Item eventKey={evtKey}>
									<AccordionHeader>{skillCategory.name}</AccordionHeader>
									<Accordion.Body>
									<ListGroup>
										{skillCategory.skills.map((skill) => {
											return (
											<ListGroup.Item>{skill}</ListGroup.Item>
											);
										})}
									</ListGroup>
									</Accordion.Body>
								</Accordion.Item>)
							})}
						</Accordion>
					</Col>
				</Row>
			</Container>
		);
	}

export default Resume;

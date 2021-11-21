import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SocialIcon } from 'react-social-icons';
import "./footer.css";

function Footer() {
	return (
		<Container className="footer text-center my-auto py-auto">
			<Row id="social-icons">
				<Col>
				<SocialIcon url="https://github.com/UmerAbdullahYaseen" target="_blank" rel="noopener noreferrer" />
				</Col>
			<Col>
				<SocialIcon url="https://www.linkedin.com/in/umer-abdullah-yaseen-6811b3177/" target="_blank" rel="noopener noreferrer" />
			</Col>
			
			</Row>
		</Container>
	);
}

export default Footer;

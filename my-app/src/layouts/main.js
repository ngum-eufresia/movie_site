import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./Header";
import Main from "./main";
import Footer from "./footer";
import Container from "react-bootstrap/Container";


export default function main() {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={4}>
                        <img
                            src="https://m.media-amazon.com/images/M/MV5BMjAxMzcwMTEzNl5BMl5BanBnXkFtZTcwMTA2MzM3MQ@@._V1_SX300.jpg"
                            alt="example"
                        />
                    </Col>

                    <Col md={4}>
                        <Main />
                    </Col>

                    <Col md={4}>
                        <Footer />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

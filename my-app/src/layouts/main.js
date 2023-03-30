import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./Header";

import Footer from "./Footer";
import Container from "react-bootstrap/Container";
import { useEffect } from "react";

export default function Main() {
    const getPoster = () => {
        for (let i = 1; i <= 100; i++) {
            fetch(`https://www.omdbapi.com/?apikey=98441902&s=man&page=${i}`)
                .then((response) => {
                    return response.json();
                })
                .then((res) => {
                    console.log("Heloo America ================");
                    console.log("res", res);
                    res.Search.forEach((element) => {
                        console.log(element.Title);
                        console.log(element.Poster);
                    });
                });
        }
    };

    useEffect(() => {
        getPoster();
        // return () => {
        //   second
        // }
    }, []);

    return (
        <div>
            <Container className="movie-body pt-5">
                <Row>
                    <Col md={4}>
                        <img
                            src={
                                require("../Assets/Images/edit.svg")
                                    .default
                            }
                            className="pt-4 pe-4 ms-2 img-fluid"
                            rel=""
                            alt=""
                        />
                    </Col>

                    <Col md={4}>
                        <img
                            src="./Assets/Images/interestingman.jpg"
                            className="pt-4 pe-4 ms-2 img-fluid"
                            rel=""
                            alt=""
                        />
                    </Col>

                    <Col md={4}>hi there</Col>
                </Row>
            </Container>
        </div>
    );
}

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

export default function Header() {
    return (
        <div>
            <Container fluid className="pt-4 head">
                <Row>
                    <Col md={3} className=" ps-3 ms-5 text-center">
                        hey
                    </Col>
                    <Col md={3}>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="search"
                                aria-label="search"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </Col>
                    <Col md={1} className="ms-5">
                        dhueods
                    </Col>
                    <Col md={1}>dhueods</Col>
                    <Col md={1}>dhueods</Col>
                    <Col md={1}>dhueods</Col>
                </Row>

                <div className="title text-start pt-5 pb-3">
                    <h2> FILM & TV </h2>

                    <h6> jssh ksjssi ksdjdssjshshsosl </h6>
                </div>

                <Row>
                    <Col md={2} className = "text-end ">
                        <Button variant="outline-primary">dfggdserr</Button>
                    </Col>
                    <Col md={2}>
                        <Button variant="outline-primary">ssjdjffj wejrhr djjff</Button>
                    </Col>
                    <Col md={2}>
                        <div className="d-flex">
                            <p>286</p>
                            <p>wkerrbrrrb</p>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className="d-flex">
                            <p>286</p>
                            <p>wkerrbrrrb</p>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className="d-flex">
                            <p>286</p>
                            <p>wkerrbrrrb</p>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className="d-flex">
                            <p>286</p>
                            <p>wkerrbrrrb</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

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
            </Container>

            <Container>
                <p className="ps-3 fw-bolder">hjfjfhfhfg</p>
                <Row>
                    <Col md={4} className="text-start ps-4 pe-0 ">
                        <div className="d-flex gap-4">
                            <Button variant="outline-primary">dfggdserr</Button>
                            <Button variant="outline-primary">
                                ssjdjffj wejrhr djjff
                            </Button>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className="d-flex">
                            <p className="pe-3 fw-bolder fs-2">286</p>
                            <p>wkerrbrrrb</p>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className="d-flex">
                            <p className="pe-3 fw-bolder fs-2">286</p>
                            <p>wkerrbrrrb</p>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className="d-flex">
                            <p className="pe-3 fw-bolder fs-2">286</p>
                            <p>wkerrbrrrb</p>
                        </div>
                    </Col>
                    <Col md={2} className="">
                        <div className="d-flex">
                            <p className="pe-3 fw-bolder fs-2 text-align-center">286</p>
                            <p>wkerrbrrrbfffff</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

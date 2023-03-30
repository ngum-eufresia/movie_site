
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"

export default function Body () {

    return <div>
        
        <Row>
          <Col md = {12}>
            <Header/>

          </Col> 

          <Col md= {12}>
            <Main/>

         </Col>

         <Col md= {12}>
            <Footer/>
         </Col>  
       </Row>
    </div>;
}

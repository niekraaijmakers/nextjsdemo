import {Container, Nav, Navbar} from "react-bootstrap";
import Link from 'next/link';
import {NAV_ITEMS} from "../../lib/constants";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LogoAndTagLine from "./logo-and-tag-line";

const Navigation = () => {
    return (
        <Navbar expand="lg" className={"justify-content-end"} >

            <Container className={"d-block d-lg-none"} >

                <Row>
                    <Col md={4} xs={10}>
                        <LogoAndTagLine/>
                    </Col>

                    <Col md={8} xs={2}>
                        <Container className={"justify-content-end"}>
                            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        </Container>
                    </Col>
                </Row>

            </Container>

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto justify-content-end">

                    { NAV_ITEMS.map( ({id,title}, index) =>
                        <Link key={'navigation-item-' + id} href={'/' + id}>
                            <a className={`nav-link nav-item-${id}`}>{title}</a>
                        </Link>
                    )}

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;

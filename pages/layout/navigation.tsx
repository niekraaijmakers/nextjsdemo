import Link from 'next/link';
import {NAV_ITEMS} from "../../lib/constants";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LogoAndTagLine from "./logo-and-tag-line";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar"

const Navigation = () => {
    return (
        <Navbar expand="lg" className={"justify-content-end nopad-xs"} >

            <Container className={"d-block d-lg-none"} >

                <Row>
                    <Col md={4} xs={9}>
                        <LogoAndTagLine/>
                    </Col>

                    <Col md={8} xs={3} className={"nopad-x-xs text-align-right"}>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    </Col>
                </Row>

            </Container>

            <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="mr-auto justify-content-end nopad-x-xs" >

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

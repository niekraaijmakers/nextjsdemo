import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const LogoAndTagLine = () => {
    return (
        <Container>
            <Row>
                <Col xs={0} md={4} >
                    <Link href={'/'}>
                            <img className={'mw-100 my-2 cp logo-img show-md'} src={'/logo-small.jpg'} srcSet={'/logo-big.jpg 2x'}/>
                    </Link>
                </Col>
                <Col xs={10} md={6} className={'my-auto'}>
                    <img src={'/logo-text-small.jpg'} className={""} srcSet={'/logo-text-big.jpg 2x'}/>
                </Col>
            </Row>
        </Container>
    );
}

export default LogoAndTagLine;
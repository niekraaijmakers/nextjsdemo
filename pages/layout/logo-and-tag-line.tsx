import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const LogoAndTagLine = () => {
    return (
        <Container>
            <Row>
                <Col xs={4}>
                    <Link href={'/'}>
                        <img className={'mw-100 my-2'} src={'/logo-small.png'} srcSet={'/logo-big.png 2x'}/>
                    </Link>
                </Col>
                <Col xs={6} className={'my-auto'}>
                    <span className={'logo-text-left'}>Palmy</span> <span className={'logo-text-right'}>Fitness</span>
                </Col>
            </Row>
        </Container>
    );
}

export default LogoAndTagLine;
import Container from "react-bootstrap/Container";
import Layout from "./layout";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Button, Card} from "react-bootstrap";

const services = [
    {
        title: 'Overal Fit program',
        img: '/cards/card-1.png',
        ctaText: 'More Info'
    },
    {
        title: 'Weightlifting',
        img: '/cards/card-2.png',
        ctaText: 'More Info'
    },
    {
        title: 'Life coaching',
        img: '/cards/card-3.png',
        ctaText: 'More Info'
    },
]

function ServiceCards() {
    return (
        <Container>

            <Row>
                {
                    services.map((service, index) =>
                        <Col key={'col-' + index}>
                            <Card>
                                <Card.Img variant="top" src={service.img}/>
                                <Card.Body className={"bg-dark"}>
                                    <Card.Title style={{textAlign:'center'}}> {service.title}</Card.Title>
                                    <Button className={"mx-auto"} variant="primary">{service.ctaText}</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
            </Row>

        </Container>
    );
}

export default ServiceCards;
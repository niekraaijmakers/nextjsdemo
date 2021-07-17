import {Button, Carousel, Jumbotron} from "react-bootstrap";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const items = [
    {
        img: 'https://media.istockphoto.com/photos/woman-working-out-at-home-picture-id1203043225',
        title: 'First slide label',
        description: 'Test1',
        posCssClasses: 'top left '
    },
    {
        img: 'https://media.istockphoto.com/photos/beautiful-happy-girl-with-closed-eyes-practicing-yoga-in-lotus-in-picture-id1184595440',
        title: 'First slide label',
        description: 'Test2',
        posCssClasses:  'x-center y-center odd'
    },
    {
        img: 'https://media.istockphoto.com/photos/having-a-laugh-while-limbering-up-picture-id962529334',
        title: 'First slide label',
        description: 'Test3',
        posCssClasses: 'bottom right'
    }
]

function HomeCarousel() {
    return (
        <Carousel className={"my-4 home-carousel"} interval={null} >
            {
                items.map((item, index) =>
                    <Carousel.Item key={'carousel-' + index} className={'mh-100'} >
                        <img
                            alt={""}
                            className="d-block w-100"
                            src={item.img}
                        />
                        <Carousel.Caption className={item.posCssClasses}>
                            <Container>
                                <Row xs={12}>
                                    <Col>
                                        <h3>{item.title}</h3>
                                    </Col>
                                </Row>
                                <Row xs={12}>
                                    <Col>
                                        <p>{item.description}</p>
                                    </Col>
                                </Row>

                            </Container>

                        </Carousel.Caption>
                    </Carousel.Item>
                )
            }
        </Carousel>

    );
}

export default HomeCarousel;
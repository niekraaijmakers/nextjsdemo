import {Button, Carousel, Jumbotron} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {CarouselModel, getCarouselItemsById} from "../lib/carousel";
import Image from "next/image";


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

export interface JumboCarouselProps {
    id:string
}

function JumboCarousel(props:CarouselModel) {

    return (
        <Carousel className={"my-4 jumbo-carousel"} interval={null} >
            {
                props.items.map((item, index) =>
                    <Carousel.Item key={'carousel-' + index} className={'mh-100'} >

                        {
                            item.backgroundImage && (
                                <div className={"image-wrap"}>
                                    <Image
                                        className="d-block w-100"
                                        layout={"fill"}
                                        objectFit={'cover'}
                                        src={item.backgroundImage.url}
                                        />
                                </div>
                            )
                        }

                        <Carousel.Caption className={item.cssLocation}>
                            <Container>
                                <Row xs={12}>
                                    <Col>
                                        <h3>{item.heading}</h3>
                                    </Col>
                                </Row>
                                <Row xs={12}>
                                    <Col>
                                        <div dangerouslySetInnerHTML={{__html: item.description.html}}/>
                                    </Col>
                                </Row>

                                {
                                    !!item.cta && (
                                        <Row xs={12}>
                                            <Col>
                                                <Button href={item.cta.url} variant={item.cta.isSecondary ? 'secondary' : 'primary'} >
                                                    <span>{item.cta.text}</span>
                                                </Button>
                                            </Col>
                                        </Row>
                                    )
                                }

                            </Container>

                        </Carousel.Caption>
                    </Carousel.Item>
                )
            }
        </Carousel>

    );
}

export async function getStaticProps({ params, preview = false }) {
    const data = await getCarouselItemsById(params.slug)
    return {
        props: {
            preview,
            carousel: data
        },
    }
}

export default JumboCarousel;
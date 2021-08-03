import {Button, Carousel, Jumbotron} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {CarouselModel, getCarouselItemsById} from "../lib/carousel";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import SwiperCore, {
    Pagination
} from 'swiper/core';
SwiperCore.use([Pagination]);



function JumboCarousel(props:CarouselModel) {

    return (

        <Swiper pagination={true} className="mySwiper">
            {
                props.items.map((item, index) =>
                    <SwiperSlide key={"swiperslide="+ index}>

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

                        <Container className={"carousel-caption " + item.cssLocation}>
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

                    </SwiperSlide>
                )
            }
         </Swiper>

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
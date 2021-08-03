import {TextImageModel} from "../lib/textimage";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "./container";

export default function textImage(props: TextImageModel) {
    return (
        <Container>
            <Row>
                <Col md={4}>
                    <Image src={props.image.url} alt={props.image.fileName} fluid/>
                </Col>

                <Col>
                    <div dangerouslySetInnerHTML={{__html: props.text.html}}/>
                </Col>

            </Row>
        </Container>
    );
}
import {Button, Jumbotron} from "react-bootstrap";
import Image from "next/image";
import Container from "react-bootstrap/Container";

function HeroBanner() {
    return (
        <Jumbotron className={"main-hero min-vh-10"}>

            <Image src={"https://redaktion.original-boot.camp/site/assets/files/21839/outdoor-bootcamp-training-essen.jpg"} layout={"fill"}/>
            <div className={"img-overlay"}></div>
            <Container className={"main-hero-container"}>
                <p>Start living up to your potential!</p>
                <p>
                    <Button variant="primary">Get Started</Button>
                </p>
            </Container>

        </Jumbotron>
    );
}

export default HeroBanner;
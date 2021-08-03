import Image from "next/image";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
function HeroBanner() {
    return (
        <Jumbotron className={"hero main-hero min-vh-10"}>

            <Image src={"https://redaktion.original-boot.camp/site/assets/files/21839/outdoor-bootcamp-training-essen.jpg"} layout={"fill"}/>
            <div className={"img-overlay"}/>
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
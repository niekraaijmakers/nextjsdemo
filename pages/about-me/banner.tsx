import {Button, Jumbotron} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Image from "next/image";

export default function Banner(){
    return (
        <Jumbotron className={"hero small-hero min-vh-5"}>
            <div className={"img-overlay"}/>
                <Image src={"https://redaktion.original-boot.camp/site/assets/files/21839/outdoor-bootcamp-training-essen.jpg"} layout={"fill"}/>
                <Container className={"main-hero-container"}>

                </Container>
        </Jumbotron>
    )
}

export async function getStaticProps({ preview = false }) {
    return {
        props: { preview },
    }
}

import Image from "next/image";

import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import CTA from "./cta";
import {BannerModel} from "../lib/banner";


function HeroBanner(props:BannerModel) {
    return (
        <Jumbotron className={"hero main-hero min-vh-10"}>

            <Image src={props.backgroundImage.url} layout={"fill"}/>
            <div className={"img-overlay"}/>
            {
                (props.text || props.cta) &&
                <Container className={"main-hero-container"}>
                    {
                        props.text && <div dangerouslySetInnerHTML={{__html: props.text.html}}/>
                    }
                    {
                        props.cta && <CTA {...props.cta}/>
                    }
                </Container>
            }

        </Jumbotron>
    );
}

export default HeroBanner;
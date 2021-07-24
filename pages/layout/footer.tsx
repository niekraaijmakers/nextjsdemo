import Container from "react-bootstrap/Container";


const Footer = ():JSX.Element => {

    return (
        <Container fluid className={'footer d-flex bg-dark justify-content-center'} >

                <div>
                    <a className="fab fa-linkedin"></a>
                </div>
               <div>
                   <a className="fab fa-instagram"></a>
               </div>

        </Container>
    )
};

export default Footer;
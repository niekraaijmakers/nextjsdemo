import Container from 'react-bootstrap/Container';
import Navigation from './navigation';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LogoAndTagLine from "./logo-and-tag-line";
const TopContainer = ():JSX.Element => {

  return (
      <Container fluid className={'bg-dark top-container nopad-x-xs'}>
          <Container className={'mx-auto bg-secondary nopad-x-xs'}>
              <Row>
                  <Col className='d-none d-lg-block' md={4} xs={12}>
                      <LogoAndTagLine/>
                  </Col>
                  <Col lg={8} xs={12} className={"nopad-x-xs"}  >
                      <Navigation/>
                  </Col>
              </Row>
          </Container>

      </Container>
  )
};

export default TopContainer;

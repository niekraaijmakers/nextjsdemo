import Container from 'react-bootstrap/Container';
import Navigation from './navigation';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LogoAndTagLine from "./logo-and-tag-line";
const TopContainer = ():JSX.Element => {

  return (
      <Container fluid className={'bg-dark'}>
          <Container className={'mx-auto bg-white'}>
              <Row>
                  <Col className='d-none d-lg-block' md={4} xs={12}>
                      <LogoAndTagLine/>
                  </Col>
                  <Col lg={8} xs={12}  >
                      <Navigation/>
                  </Col>
              </Row>
          </Container>

      </Container>
  )
};

export default TopContainer;

import ContactForm from '../../ContactForm/ContactForm';
import styles from './Footer.module.css'
import { Row, Col, Container } from 'react-bootstrap';
const Footer: React.FC = () => {
    return (
      <Container fluid className="m-0 p-0">
        <footer className="container-fluid text-white bg-dark">
          <Row className="align-items-center">
            <Col>
              <div className="pt-3">
                <h1>Craig Kubinec</h1>
                <p className="text-muted">Software Developer
                <br/>Calgary, Alberta</p>
              </div>
            </Col>
            <Col className="pt-3">
              <div>
                <p className='my-0'>Socials</p>
                <span>
                  <a
                    href="https://www.facebook.com/craig.kubinec/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <i className="bi bi-facebook fs-1"></i>
                  </a>
                </span>
                <span>
                  <a
                    href="https://www.instagram.com/kuby40/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <i className="bi bi-instagram fs-1" />
                  </a>
                </span>
                <span>
                  <a
                    href="https://discord.com/users/Kuby40#0759"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <i className="bi bi-discord fs-1" />
                  </a>
                </span>
                <span>
                  <a
                    href="https://github.com/kuby40"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <i className="bi bi-github fs-1" />
                  </a>
                </span>
                <span>
                  <a
                    href="https://www.linkedin.com/in/craigkubinec/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <i className="bi bi-linkedin fs-1" />
                  </a>
                </span>
              </div>
            </Col>
          </Row>
        </footer>
      </Container>
    );
}

export default Footer;
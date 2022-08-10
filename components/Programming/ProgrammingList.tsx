import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import styles from './ProgrammingList.module.css'
const ProgrammingList: React.FC = () => {
    return (
      <Container fluid className={styles.list + " d-flex h-25 w-50"}>
        <Carousel
          interval={1500}
          controls={false}
          variant="dark"
          className="mx-auto my-auto"
        >
          <Carousel.Item>
            <Image
              className=""
              src="/pics/Bootstrap_logo.png"
              alt=""
              width={200}
              height={200}
            />
            <Carousel.Caption as='h3'>Bootstrap</Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className=""
              src="/pics/CSS-Logo.png"
              alt=""
              width={400}
              height={200}
            />
            <Carousel.Caption as='h3'>
              Cascading Style Sheets
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    );
}

export default ProgrammingList;
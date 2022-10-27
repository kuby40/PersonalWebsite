import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import styles from "./ProgrammingList.module.css";
import { useState } from "react";
const ProgrammingList = () => {
  const obj: Array<string> = ['Java', 'Python','HTML','CSS', 'Bootstrap','Javascript', 'Typescript', 'NodeJS', 'ExpressJS', 'ReactJS', 'NextJS', 'MySQL', 'MongoDB', 'Oracle PL/SQL' ];
  const [index, setIndex] = useState(0);
  const [title, setTitle] = useState('Java');

  interface IndexData {
    index: number;
  }
  const handleSelect = (selectedIndex: number) => {
    setTitle(obj[selectedIndex])
    if (!(index > 12)) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };
  return (
    <Container fluid className={styles.list + " w-50"}>
      <Row className="mb-5">
        <h1 className="text-black">My Tech Stack</h1>
      </Row>
      <Row className="mb-5">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          interval={1000}
          controls={false}
          indicators={false}
          variant="dark"
          className="mx-auto my-auto"
        >
          <Carousel.Item>
            <Image
              src="https://res.cloudinary.com/drscfsenq/image/upload/v1661889537/Website/JavaLogo_lyj5ie.png"
              alt="Java"
              height={200}
              width={200}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="https://res.cloudinary.com/drscfsenq/image/upload/v1661890769/Website/1200px-Python-logo-notext.svg_rxgxof.png"
              alt="Python"
              height={200}
              width={200}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="https://res.cloudinary.com/drscfsenq/image/upload/v1661890856/Website/HTML5_Logo_w3qjyp.svg"
              alt="HTML5"
              height={200}
              width={200}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="https://res.cloudinary.com/drscfsenq/image/upload/v1661890181/Website/CSS-3-logo-vector-01_ldf9k0.svg"
              alt="CSS"
              height={200}
              width={200}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="https://res.cloudinary.com/drscfsenq/image/upload/v1661891123/Website/bootstrap-logo_p9avcq.png"
              alt="Bootstrap"
              height={200}
              width={200}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className=""
              src="https://res.cloudinary.com/drscfsenq/image/upload/v1661891333/Website/JavaScript-logo_dgdwlo.png"
              alt="Javascript"
              height={200}
              width={200}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className=""
              src="https://res.cloudinary.com/drscfsenq/image/upload/v1661891357/Website/1024px-Typescript_logo_2020.svg_if7cef.png"
              alt="Typescript"
              height={200}
              width={200}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className=""
              src="https://res.cloudinary.com/drscfsenq/image/upload/v1661891443/Website/nodejs-2_eda8qe.svg"
              alt="NodeJS"
              height={200}
              width={200}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className=""
              src="https://res.cloudinary.com/drscfsenq/image/upload/v1661891400/Website/st_small_507x507-pad_600x600_f8f8f8.u2_k5nhjy.jpg"
              alt="ExpressJS"
              height={200}
              width={200}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className=""
              src="https://res.cloudinary.com/drscfsenq/image/upload/v1661891508/Website/React.js_logo-512_bscx8q.png"
              alt="ReactJS"
              height={200}
              width={200}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className=""
              src="https://res.cloudinary.com/drscfsenq/image/upload/v1661891529/Website/nextjs-boilerplate-logo_tymesz.png"
              alt="NextJS"
              height={200}
              width={200}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className=""
              src="https://res.cloudinary.com/drscfsenq/image/upload/v1661891881/Website/mysql_PNG23_fs0ibe.png"
              alt="MySQL"
              height={200}
              width={200}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className=""
              src="https://res.cloudinary.com/drscfsenq/image/upload/v1661891977/Website/mongodb-logo_ip1q0h.svg"
              alt="MongoDB"
              height={200}
              width={200}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className=""
              src="https://res.cloudinary.com/drscfsenq/image/upload/v1661892050/Website/pl-sql_idutbs.svg"
              alt="Oracle PL/SQL"
              height={200}
              width={200}
            />
          </Carousel.Item>
        </Carousel>
      </Row>
      <Row>
        <h3 className="text-black">{title}</h3>
      </Row>
    </Container>
  );
};
export default ProgrammingList;

import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import styles from './ProgrammingList.module.css'
import { MongoClient, ServerApiVersion } from "mongodb";
import { GetStaticProps } from "next";
const ProgrammingList: React.FC = (props) => {
  console.log(props);
    return (
      <Container fluid className={styles.list + " d-flex h-50 w-50"}>
        <span className="position-absolute w-50">
          <h1 className="text-black top-0 start-100">My Tech Stack</h1>
        </span>
        <Carousel
          interval={1500}
          controls={false}
          indicators={false}
          variant="dark"
          className="mx-auto my-auto"
        >
          <Carousel.Item>
            <Image
              className=""
              src="https://res.cloudinary.com/drscfsenq/image/upload/v1661889537/Website/JavaLogo_lyj5ie.png"
              alt="Java"
              width={350}
              height={350}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className=""
              src="https://res.cloudinary.com/drscfsenq/image/upload/v1661890769/Website/1200px-Python-logo-notext.svg_rxgxof.png"
              alt="Python"
              width={350}
              height={350}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className=""
              src="https://res.cloudinary.com/drscfsenq/image/upload/v1661890856/Website/HTML5_Logo_w3qjyp.svg"
              alt="HTML5"
              width={350}
              height={350}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className=""
              src="https://res.cloudinary.com/drscfsenq/image/upload/v1661890181/Website/CSS-3-logo-vector-01_ldf9k0.svg"
              alt="CSS"
              width={350}
              height={350}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className=""
              src="https://res.cloudinary.com/drscfsenq/image/upload/v1661891123/Website/bootstrap-logo_p9avcq.png"
              alt="Bootstrap"
              width={350}
              height={350}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className=""
              src="https://res.cloudinary.com/drscfsenq/image/upload/v1661891333/Website/JavaScript-logo_dgdwlo.png"
              alt="Javascript"
              width={350}
              height={350}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className=""
              src="https://res.cloudinary.com/drscfsenq/image/upload/v1661891357/Website/1024px-Typescript_logo_2020.svg_if7cef.png"
              alt="Typescript"
              width={350}
              height={350}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className=""
              src="https://res.cloudinary.com/drscfsenq/image/upload/v1661891443/Website/nodejs-2_eda8qe.svg"
              alt="NodeJS"
              width={350}
              height={350}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className=""
              src="https://res.cloudinary.com/drscfsenq/image/upload/v1661891400/Website/st_small_507x507-pad_600x600_f8f8f8.u2_k5nhjy.jpg"
              alt="ExpressJS"
              width={350}
              height={350}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className=""
              src="https://res.cloudinary.com/drscfsenq/image/upload/v1661891508/Website/React.js_logo-512_bscx8q.png"
              alt="ReactJS"
              width={350}
              height={350}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className=""
              src="https://res.cloudinary.com/drscfsenq/image/upload/v1661891529/Website/nextjs-boilerplate-logo_tymesz.png"
              alt="NextJS"
              width={350}
              height={350}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className=""
              src="https://res.cloudinary.com/drscfsenq/image/upload/v1661891881/Website/mysql_PNG23_fs0ibe.png"
              alt="MySQL"
              width={350}
              height={350}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className=""
              src="https://res.cloudinary.com/drscfsenq/image/upload/v1661891977/Website/mongodb-logo_ip1q0h.svg"
              alt="MongoDB"
              width={350}
              height={350}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className=""
              src="https://res.cloudinary.com/drscfsenq/image/upload/v1661892050/Website/pl-sql_idutbs.svg"
              alt="Oracle PL/SQL"
              width={350}
              height={350}
            />
          </Carousel.Item>
        </Carousel>
      </Container>
    );
}

export default ProgrammingList;
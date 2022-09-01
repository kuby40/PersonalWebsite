import Head from "next/head";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import styles from "./Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import Intro from "./Intro";

const HomePage: React.FC = () => {
    useEffect(() => {
      document.body.classList.add("text-center");
      document.body.classList.add("text-white");
      document.body.classList.add("fBackground");
    }, []);
  return (
    <Container fluid>
      <Intro />
      <Head>
        <title>Craig Kubinec</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta name="keywords" content="Craig, Kubinec"></meta>
        <meta name="author" content="Craig Kubinec"></meta>
        <meta
          name="description"
          content="The landing page for Craig Kubinec's Development and Music showcase Website. Programming, Music links available on the page"
        />
        <link rel="icon" href="/pics/CKLogo.jpg"></link>
      </Head>
      <Row>
        <Link href="/programming">
          <Col md={6} className={styles.col_left}>
            <a>
              <h1 className={styles.title}>Programming</h1>
              <div
                className={
                  styles.anim_l +
                  " position-absolute top-0 start-0 translate-middle"
                }
              >
                <span className={styles.anim_btn}></span>
                <span className={styles.anim_text + " fs-1"}>
                  <i className="bi bi-code"></i>Programming
                  <i className="bi bi-code-slash"></i>
                </span>
              </div>
            </a>
          </Col>
        </Link>
        <Link href="/music">
          <Col md={6} className={styles.col_right}>
            <a>
              <div>
                <h1 className={styles.title}>Music</h1>
              </div>
              <div
                className={
                  styles.anim_r +
                  " position-absolute top-0 start-50 translate-middle"
                }
              >
                <span className={styles.anim_btn}></span>
                <span className={styles.anim_text + " fs-1"}>
                  <i className="bi bi-music-note"></i>Music
                  <i className="bi bi-music-note"></i>
                </span>
              </div>
            </a>
          </Col>
        </Link>
      </Row>
    </Container>
  );
};

export default HomePage;

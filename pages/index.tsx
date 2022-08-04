import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";
import { useEffect } from "react";

const Home: NextPage = () => {
  useEffect(() => {
    // 👇 add class to body element
    document.body.classList.add("text-center");
    document.body.classList.add("text-white");
    document.body.classList.add("fBackground");
    return;
  }, []);
  return (
    <Container fluid>
      <Head>
        <title>Craig Kubinec</title>
        <meta name="description" content="The landing page for Craig Kubinec" />
      </Head>
      <Script></Script>
      <Row auto={true}>
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
            <a href="/music">
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

export default Home;

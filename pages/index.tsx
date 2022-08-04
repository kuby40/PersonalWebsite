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
  const introScene = () => {
    const intro = Array.from(
      document.getElementsByClassName(
        styles.intro
      ) as HTMLCollectionOf<HTMLElement>
    );
    const logoSpan = Array.from(
      document.getElementsByClassName(
        styles.logo
      ) as HTMLCollectionOf<HTMLElement>
    );
    console.log("DOM LOADED");
    
      setTimeout(() => {
        logoSpan.forEach((span, index) => {
          setTimeout(() => {
            console.log('inside timeout')
            span.classList.add(styles.logoActive);
            if (index === 1) {
              span.style.top = "10px";
            }
          }, (index + 1) * 1000);
        });

        setTimeout(() => {
          logoSpan.forEach((span) => {
            setTimeout(() => {
              span.classList.remove(styles.logoActive);
              if (intro[0] != null) {
                intro[0].classList.add(styles.introActive);
              }
            }, 5000);
          });
        }, 1000);

        setTimeout(() => {
          if (intro[0] != null) {
            intro[0].style.top = "200vh";
          }
        }, 7000);
      });
  };
  useEffect(() => {
    // 👇 add class to body element
    document.body.classList.add("text-center");
    document.body.classList.add("text-white");
    document.body.classList.add("fBackground");
    introScene();
    return;
  }, []);
  return (
    <Container fluid>
      {true && (
        <div className={styles.intro} id="intro">
          <h1 className={styles.logo_header}>
            <span className={styles.logo}>Hey,</span>
          </h1>

          <h1 className={styles.logo_header}>
            <span className={styles.logo}>I&apos;m Craig.</span>
          </h1>

          <h1 className={styles.logo_header}>
            <span className={styles.logo}> &lt;- Programmer</span>
          </h1>

          <h1 className={styles.logo_header}>
            <span className={styles.logo}>Musician -&gt; </span>
          </h1>
        </div>
      )}
      <Head>
        <title>Craig Kubinec</title>
        <meta name="description" content="The landing page for Craig Kubinec" />
      </Head>
      <Script></Script>
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

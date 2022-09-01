import Footer from "../UI/Footer/Footer";
import Header from "../UI/Header/Header";
import React, { useEffect } from "react";
import { ParticlesContainer } from "../UI/Particles/Particles";
import ProgrammingList from "./ProgrammingList";
import styles from "./Programming.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Head from "next/head";

const Programming: React.FC = () => {
  useEffect(() => {
    const bodyStyle = ["text-center", "text-white", styles.body];
    bodyStyle.forEach((element) => {
      document.body.classList.add(element);
    });
  });
  return (
    <React.Fragment>
      <Head>
        <title>Craig Kubinec Development</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="keywords" content="Craig, Kubinec, Programming"></meta>
        <meta name="author" content="Craig Kubinec"></meta>
        <meta
          name="description"
          content="Craig Kubinec's Programming showcase page"
        />
        <link rel="icon" href="/pics/CKLogo.jpg"></link>
      </Head>
      <ParticlesContainer />
      <Container
        fluid
        className="d-flex w-100 h-100 flex-column p-0 m-0 justify-content-between"
      >
        <Header />
        <ProgrammingList></ProgrammingList>
        <Footer />
      </Container>
    </React.Fragment>
  );
};

export default Programming;

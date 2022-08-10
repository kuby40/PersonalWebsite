import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import styles from "./Music.module.css";
import Header from "../UI/Header/Header";
import Footer from "../UI/Footer/Footer";
import { Container } from "react-bootstrap";
const Music: React.FC = () => {
    useEffect(() => {
        const bodyStyle: string[] = ['text-center', 'text-white', styles.body];
        bodyStyle.forEach(element => {
            document.body.classList.add(element);           
        });
      
  }, []);
  return (
      <Container fluid className='d-flex w-100 h-100 flex-column p-0 m-0'>
      <Header/>
      <main className={styles.main + " px-3 my-auto mx-auto"}>
        <h1>Music</h1>
        <p className="lead">
          I&apos;m working on a project currently.
          <br />
          I hope to have this out in 2022.
          <br />
          Stay tuned!
        </p>  
      </main>
      <Footer/>
      </Container>
  );
};

export default Music;

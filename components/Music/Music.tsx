import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import styles from "./Music.module.css";
import Header from "../UI/Header/Header";
const Music: React.FC = () => {
    useEffect(() => {
        const bodyStyle = ['text-center', 'text-white', styles.body];
        bodyStyle.forEach(element => {
            document.body.classList.add(element);           
        });
      
  }, []);
  return (
    <div
      className={
        styles["cover-container"] +
        " d-flex w-100 h-100 p-3 mx-auto flex-column"
      }
    >
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
      </div>
      
  );
};

export default Music;

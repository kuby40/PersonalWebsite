import { useEffect, useState, Fragment } from 'react';
import styles from './Intro.module.css'
const Intro = () => {
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

      setTimeout(() => {
        logoSpan.forEach((span, index) => {
          setTimeout(() => {
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
       introScene();
    });
    return (
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
            </div >
    );
}

export default Intro;
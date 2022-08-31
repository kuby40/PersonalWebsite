import React, { useCallback } from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import styles from "./Particles.module.css";

export function ParticlesContainer(props: unknown) {
  const customInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const options: any = {
    background: {
      color: {
        value: "#333",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: false,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      //   color: {
      //     value: "#0000FF",
      //   },
      // links: {
      //     color: "#ffffff",
      //     distance: 150,
      //     enable: true,
      //     opacity: 0.5,
      //     width: 1,
      // },
      collisions: {
        enable: true,
      },
      move: {
        directions: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 500,
        },
        value: 14,
      },
      opacity: {
        value: 0.9,
      },
      shape: {
        type: "image",
        options: {
          image: [
            {
              src: "https://res.cloudinary.com/drscfsenq/image/upload/v1661892050/Website/pl-sql_idutbs.svg",
              replaceColor: false,
            },
            {
              src: "https://res.cloudinary.com/drscfsenq/image/upload/v1661891977/Website/mongodb-logo_ip1q0h.svg",
              replaceColor: false,
            },
            {
              src: "https://res.cloudinary.com/drscfsenq/image/upload/v1661891881/Website/mysql_PNG23_fs0ibe.png",
              replaceColor: false,
            },
            {
              src: "https://res.cloudinary.com/drscfsenq/image/upload/v1661891529/Website/nextjs-boilerplate-logo_tymesz.png",
              replaceColor: false,
            },
            {
              src: "https://res.cloudinary.com/drscfsenq/image/upload/v1661891508/Website/React.js_logo-512_bscx8q.png",
              replaceColor: false,
            },
            {
              src: "https://res.cloudinary.com/drscfsenq/image/upload/v1661891443/Website/nodejs-2_eda8qe.svg",
              replaceColor: false,
            },
            {
              src: "https://res.cloudinary.com/drscfsenq/image/upload/v1661891400/Website/st_small_507x507-pad_600x600_f8f8f8.u2_k5nhjy.jpg",
              replaceColor: false,
            },
            {
              src: "https://res.cloudinary.com/drscfsenq/image/upload/v1661891357/Website/1024px-Typescript_logo_2020.svg_if7cef.png",
              replaceColor: false,
            },
            {
              src: "https://res.cloudinary.com/drscfsenq/image/upload/v1661891333/Website/JavaScript-logo_dgdwlo.png",
              replaceColor: false,
            },
            {
              src: "https://res.cloudinary.com/drscfsenq/image/upload/v1661891123/Website/bootstrap-logo_p9avcq.png",
              replaceColor: false,
            },
            {
              src: "https://res.cloudinary.com/drscfsenq/image/upload/v1661890856/Website/HTML5_Logo_w3qjyp.svg",
              replaceColor: false,
            },
            {
              src: "https://res.cloudinary.com/drscfsenq/image/upload/v1661890769/Website/1200px-Python-logo-notext.svg_rxgxof.png",
              replaceColor: false,
            },
            {
              src: "https://res.cloudinary.com/drscfsenq/image/upload/v1661890181/Website/CSS-3-logo-vector-01_ldf9k0.svg",
              replaceColor: false,
            },
            {
              src: "https://res.cloudinary.com/drscfsenq/image/upload/v1661889537/Website/JavaLogo_lyj5ie.png",
              replaceColor: false,
            },
          ],
        },
      },
      size: {
        random: {
          enable: false,
          minimumValue: 1,
        },
        value: 32,
      },
    },
    detectRetina: true,
  };

  return (
    <Particles options={options} init={customInit} className={styles.index} />
  );
}

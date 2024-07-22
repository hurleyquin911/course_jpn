import React from "react";
import Layout from "./Layout";
import Gambar from "../assets/Logo/Logo4.jpg";
import Logo1 from "../assets/Logo/Logo.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Layout>
      <section className="container">
        <div
          className="container rounded-md"
          style={{ backgroundImage: `url(${Gambar})` }}
        >
          <h1 className="h1 text-center text-white">
            <motion.div
              className="inline-block" // Tambahkan class inline-block di sini
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p>
                {" "}
                <TypeAnimation
                  sequence={["Tentang", 1000, "Check", 1000, "について", 1000]}
                  wrapper="span"
                  speed={30}
                  repeat={Infinity}
                />
              </p>
            </motion.div>
          </h1>
        </div>
      </section>

      <section className="container">
        <div
          className="container rounded-md"
          style={{ backgroundImage: `url(${Gambar})` }}
        >
          <img src={Logo1} alt="" />
        </div>
      </section>
    </Layout>
  );
};

export default About;

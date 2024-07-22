import React from "react";
import Layout from "./Layout";
import Gambar from "../assets/Logo/Logo4.jpg";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Course = () => {
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
                  sequence={["Kursus", 1000, "Course", 1000, "コース", 1000]}
                  wrapper="span"
                  speed={30}
                  repeat={Infinity}
                />
              </p>
            </motion.div>
          </h1>
        </div>
      </section>
    </Layout>
  );
};

export default Course;

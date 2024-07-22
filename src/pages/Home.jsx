import React from "react";
import Layout from "./Layout";

import { FiDownload } from "react-icons/fi";
import { Button, buttonVariants } from "../components/ui/button";
import Social from "../components/Social";
import Photo from "../components/Photo";

const About = () => {
  return (
    <Layout>
      <section className="h-full">
        <div className="container">
          <div
            className="grid grid-cols-1 xl:grid-cols-2 items-center justify-between xl:pt-8 
        xl:pb-24"
          >
            {/*bagian teks*/}
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-xl">"Nihongo Bisa!"</span>
              <h1 className="h1 text-second">
                Develop Your language in a new and unique way
              </h1>
              <p className="max-w-[500px] mb-9 text-black/80">
                Selamat datang di kursus belajar Bahasa Jepang kami! Kursus ini
                dirancang untuk membantu Anda memahami dan menguasai dasar-dasar
                Bahasa Jepang, mulai dari kosakata, tata bahasa, hingga
                keterampilan berbicara dan menulis
              </p>
              {/*Tombol sosial media*/}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <a href="#" download="My_CV.pdf">
                  <Button
                    variant="default"
                    size="lg"
                    className="uppercase flex items-center gap-2"
                  >
                    <span>Our SPAN</span>
                    <FiDownload className="text-xl" />
                  </Button>
                </a>
                <div className="mb-8 xl:mb-0">
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles=" w-14 h-14 border
                border-primary rounded-full flex justify-center items-center text-accent
                text-base hover:bg-second hover:text-primary 
                hover:transition-all duration-500 "
                  />
                </div>
              </div>
            </div>
            {/*bagian photo*/}
            <div className=" xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>
      </section>

      <section className="h-full">
        <div className="container">
          <div
            className="grid grid-cols-1 xl:grid-cols-2 items-center justify-between xl:pt-8 
        xl:pb-24"
          >
            {/*bagian teks*/}
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-xl">"Nihongo Bisa!"</span>
              <h1 className="h1 text-second">
                Develop Your language in a new and unique way
              </h1>
              <p className="max-w-[500px] mb-9 text-black/80">
                Selamat datang di kursus belajar Bahasa Jepang kami! Kursus ini
                dirancang untuk membantu Anda memahami dan menguasai dasar-dasar
                Bahasa Jepang, mulai dari kosakata, tata bahasa, hingga
                keterampilan berbicara dan menulis
              </p>
              {/*Tombol sosial media*/}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <a href="#" download="My_CV.pdf">
                  <Button
                    variant="default"
                    size="lg"
                    className="uppercase flex items-center gap-2"
                  >
                    <span>Our SPAN</span>
                    <FiDownload className="text-xl" />
                  </Button>
                </a>
                <div className="mb-8 xl:mb-0">
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles=" w-14 h-14 border
                border-primary rounded-full flex justify-center items-center text-accent
                text-base hover:bg-second hover:text-primary 
                hover:transition-all duration-500 "
                  />
                </div>
              </div>
            </div>
            {/*bagian photo*/}
            <div className=" xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

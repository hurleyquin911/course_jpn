import React from "react";
import { motion } from "framer-motion";
import gambar from "../assets/Logo/Logo2.png";

const Photo = () => {
  return (
    <div className="flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.7, ease: "easeIn" },
        }}
      >
        {/* Bagian gambar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.4, duration: 0.8, ease: "easeInOut" },
          }}
          className="w-[250px] h-[250px] xl:w-[498px] xl:h-[498px] flex items-center justify-center"
        >
          <img
            src={gambar}
            priority
            quality={100}
            fill
            alt=""
            className="object-contain"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;

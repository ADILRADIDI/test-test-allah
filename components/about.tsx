"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        🌟 Versatile Vue.js / Laravel Developer 🌟<br></br>👋 Hello, I am a
        passionate web developer with a talent for creating dynamic web and
        mobile applications using the power of the Vue.js and Laravel stack.
        <br></br>{" "}
        <span className="font-medium">
          🔍 What I do: Web & Mobile Development:
        </span>{" "}
        Creating reactive and interactive applications that delight users.
        <br></br> 💼
        <span className="font-medium">Skills & Expertise:</span>
        Vue.js Laravel PHP MySQL Agile Methodologies & Collaboration
        <br></br>🚀 My Approach: With a keen eye for detail, I continuously
        contribute to improving infrastructure components and platforms,
        ensuring that every project meets the highest standards of excellence. I
        thrive in dynamic environments where innovation and efficiency are
        paramount.<br></br> 🌐
        <span className="font-medium">Let's Connect:</span>  I am
        always excited to collaborate on exciting projects and connect with
        like-minded professionals. Let's innovate together and bring
        cutting-edge solutions to life.
      </p>    
      </motion.section>
  );
}

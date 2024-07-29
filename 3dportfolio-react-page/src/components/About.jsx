import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        ¡Hello! I specialized in Frontend Programming and UX Design, but my passion lies in creating and supporting interactive, scalable and engaging user experiences by leveraging cutting-edge programming technologies, data-driven insights, management platforms and design specialized tools.
        <br></br>
        <br></br>
        Whether it’s crafting seamless interfaces, optimizing user flows, analyzing key data or developing captivating visual content, I thrive on the intersection of creativity and technical expertise.
<br></br>
<br></br>
Programming Languages:
<br></br>
HTML5 - CSS - JavaScript - Three.JS - Tailwind - JQuery - Node.JS - Redux - Sass - Bootstrap - Vite.JS - Java - C# - React - TS - Angular - Vue.JS - XML/JSON - Django - PHP - Python - SQL
<br></br>
<br></br>
Apps:
<br></br>
Git/GitHub - Eloqua - Postman - MongoDB - Google Cloud/Analytics - EmailJS - Firebase - Docker - phpMyAdmin - NetBeans - MySQL - ChatGPT - PowerBI - Email on Acid - JIRA - Marketo - Vercel - vsCode - vsSuite - MS Office 365
<br></br>
<br></br>
Design Tools:
<br></br>
Figma - Blender - Framer - Sketchfab - Anima - Adobe Illustrator/Photoshop/XD - Wordpress - Elementor - DALL·E - Spline
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

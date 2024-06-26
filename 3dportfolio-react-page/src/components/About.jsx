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
        I specialize in a diverse range of areas, including frontend coding, UX design, technical data analysis, customer service and marketing automation. My passion lies in creating and supporting scalable, intuitive, and engaging user experiences by leveraging cutting-edge programming technologies, customer centric methodologies, data-driven insights, management platforms and design tools.
        <br></br>
        <br></br>
        Whether it’s crafting seamless interfaces, optimizing user flows, analyzing key data or developing captivating visual content, I thrive on the intersection of creativity and technical expertise.
<br></br>
<br></br>
Programming Languages:
<br></br>
HTML5 - CSS - JS - Three.JS - Tailwind - JQuery - NodeJS - Redux - Bootstrap - Vite.JS - Java - C# - React - TS - Angular - XML/JSON - PHP - Python - SQL
<br></br>
<br></br>
Apps:
<br></br>
Git/Github - Postman - MongoDB - Google Cloud/Analytics - EmailJS - Firebase - Docker - phpMyAdmin - MySQL - PowerBI - Marketo - Eloqua - vsCode - vsSuite
<br></br>
<br></br>
Design Tools:
<br></br>
Blender - Spline - Framer - Sketchfab - Figma - Anima - Adobe Illustrator - Wordpress - Elementor - Adobe Photoshop
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

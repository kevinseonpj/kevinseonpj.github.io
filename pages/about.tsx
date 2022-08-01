import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';

export const About = (): JSX.Element => {
  return (
    <motion.div
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1,
        },
      }}
    >
      <Layout
        customMeta={{
          title: 'About',
        }}
      >
        <h1>Hi!</h1>
        <p>
          I am Kevin (Minwoo) Seon, I am currently a Junior studying Computer
          Science and Math at UT Austin.
        </p>
        <p>
          My interests are mostly in SWE and CyberSecurity, but I am still
          exploring things! I love trying to break things (most of the time,
          unintentionally breaking things...) to see how they work. I love
          participating in CTFs or other cybersecurity related competitions ({' '}
          <a href="https://www.nationalccdc.org/">NCCDC</a> 4th Place last
          year!), and creating different type of projects in my free time. Other
          things I love to do in my free time are playing the violin, enjoying
          video games, going to the gym, and playing shogi (Japanese chess, I am
          really rusty... so I am trying to get back into it).
        </p>
        <p>
          In the upcoming Fall semester, I will be working at Silicon Labs as a
          Robotic Process Automation Intern. I am looking for opportunities for
          Summer 2023 so feel free to contact me at{' '}
          <a href="mailto: mwseon@gmail.com">mwseon@gmail.com</a> for any
          opportunities, questions, or resume.
        </p>
        <p className="text-xs">
          This website may or may not be running on vulnerable versions of
          packages... but there&apos;s nothing worth your time I promise!
        </p>
      </Layout>
    </motion.div>
  );
};

export default About;

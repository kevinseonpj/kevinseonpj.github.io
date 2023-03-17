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
        <h1>Ab0ut</h1>
        <p className="mr-12 ">
          I am Minwoo (Kevin) Seon, I am currently a Junior studying Computer
          Science at UT Austin.
        </p>
        <p className="mr-12 ">
          My interests are mostly in SWE and CyberSecurity, and I also love
          playing games. Whenever I feel like I&apos;m not productive enough,
          I&apos;m usually particapating in random cs and math competitions or
          CTFs.
        </p>
        <p className="mr-12 ">
          My email is mwseon@gmail.com and my discord is Apkpj#0930 if you want
          to reach out!
        </p>
        {/* <p className="text-xs mr-12 ">
          I love free food plz lmk if there are any free food anywhere
        </p> */}
      </Layout>
    </motion.div>
  );
};

export default About;

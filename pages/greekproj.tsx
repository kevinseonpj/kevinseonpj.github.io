import { motion } from 'framer-motion';
import React from 'react';
import Layout from '../components/Layout2';
import AnimatedTitle from '../components/AnimatedTitle';
import CardWithGlow from '../components/CardWithGlow';

export const test = (): JSX.Element => (
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
        title: 'Greek Mythology',
      }}
    >
      <h2 className="flex items-center justify-center mb-14">
        <AnimatedTitle text="Heroes" />
      </h2>
      <h2 className="flex items-center">
        <CardWithGlow text="test" />
        {/* <div>
        <CardWithGlow text='test'/>
        <CardWithGlow text='test'/>
        </div>
        <div>
        <CardWithGlow text='test'/>
        <CardWithGlow text='test'/>
        </div>  */}
      </h2>
    </Layout>
  </motion.div>
);
export default test;

import React from 'react';
import Layout from '../components/Layout';

export const About = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'About',
      }}
    >
      <h1>About Page</h1>
      <p>
        I am Kevin Seon, I am currently a Junior studying Computer Science and Math at UT Austin. 
      </p>
      <br></br>
      <p>
        My interests are mostly in CyberSecurity and Software/Backend, but I am still exploring things! 
        I love trying to break things (most of the time, unintentionally breaking things...) to see how they work. I love participating in CTFs or other cybersecurity related competitions ({' '}<a href = "https://www.nationalccdc.org/">NCCDC</a> 4th Place last year!), 
        and creating different type of projects in my free time. Other things I love to do in my free time are playing the violin, enjoying video games,
        going to the gym, and playing shogi (Japanese chess, I am really rusty... so I am trying to get back into it) 
      </p>
      <br></br>
      <p>
        Hopefully once every few decade, I will put up an interesting posts (not long, I am terrible at writing) about things I run into so that
        I can look back and remember and enjoy it again. 
      </p>
    </Layout>
  );
};

export default About;

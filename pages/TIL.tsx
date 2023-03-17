import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import AnimatedTitle from '../components/AnimatedTitle';
import AnimatedText from '../components/AnimatedText';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { getAllPosts } from '../lib/api';
import { PostType } from '../types/post';
import { format, parseISO } from 'date-fns';

type IndexProps = {
  posts: PostType[];
};

export const TIL = ({ posts }: IndexProps): JSX.Element => {
  const filteredPosts = posts.filter((post) => post.slug.includes('TIL'));

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
          title: 'TIL',
        }}
      >
        <h2 className="flex items-center justify-center mb-14">
          <AnimatedTitle text="TIL" />
        </h2>
        <div className="flex items-center justify-center">
          <AnimatedText text="appropriate credits/ft. will be added soon" />
        </div>
        {filteredPosts.map((post) => (
          <article key={post.slug} className="mt-8">
            <div className="flex mb-1 text-sm text-gray-200 dark:text-gray-400 items-center justify-center">
              <AnimatedText
                text={format(parseISO(post.date), 'MMMM dd, yyyy')}
              />
            </div>
            <div className="mb-2 text-xl space-y-100">
              <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
                <a className="flex text-gray-900 dark:text-white dark:hover:text-blue-400 items-center justify-center">
                  {post.title}
                </a>
              </Link>
            </div>
          </article>
        ))}
      </Layout>
    </motion.div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['date', 'description', 'slug', 'title']);

  return {
    props: { posts },
  };
};

export default TIL;

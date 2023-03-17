import { format, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';
import { getAllPosts } from '../lib/api';
import { PostType } from '../types/post';
import ReactTypingEffect from 'react-typing-effect';
import GithubIcon from '@rsuite/icons/legacy/Github';
import InstagramIcon from '@rsuite/icons/legacy/Instagram';
import LinkedinIcon from '@rsuite/icons/legacy/Linkedin';
import { IconButton, ButtonToolbar } from 'rsuite';
import { motion } from 'framer-motion';

type IndexProps = {
  posts: PostType[];
};
// let dateString = new Date().toDateString();
// let LAST_UPDATED = JSON.stringify(dateString)

export const Index = ({ posts }: IndexProps): JSX.Element => {
  const filteredPosts = posts.filter((post) => !post.slug.includes('TIL'));

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
      <Layout>
        <h1 className="mb-1 font-mono text-4xl md:text-6xl tracking-tighter">
          <ReactTypingEffect
            text={["Hi! I'm Kevin"]}
            speed={100}
            eraseDelay={5000000}
          />
        </h1>
        <p className="pb-0 pt-5 mb-2 text-l md:text-l ">
          This is just a place for me to occasionally talk about things that I
          find interesting.
          <br></br>
          There&apos;s literally nothing here yet because I am lazy.
          <br></br>
          Built with Next.js, MDX, TailwindCSS, FramerMotion, and RSuite.
        </p>
        <h1>
          <ButtonToolbar>
            <IconButton
              className="social-icon"
              size="lg"
              icon={<GithubIcon />}
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/kevinseonpj/"
              color="blue"
              appearance="primary"
              circle
            />
            <IconButton
              className="social-icon"
              size="lg"
              icon={<LinkedinIcon />}
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/minwoo-seon-38193922a/"
              color="blue"
              appearance="primary"
              circle
            />
            <IconButton
              className="social-icon"
              size="lg"
              icon={<InstagramIcon />}
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/kevinseonpj/"
              color="blue"
              appearance="primary"
              circle
            />
          </ButtonToolbar>
        </h1>

        {/* redefine the posts so that it only contains posts that don't have the keyword TIl */}

        {/* {posts = filteredPosts} */}
        {/* {posts.map((post) => (
          <article key={post.slug} className="mt-12">
            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
              {format(parseISO(post.date), 'MMMM dd, yyyy')}
            </p>
            <h1 className="mb-2 text-xl">
              <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
                <a className="text-gray-900 dark:text-white dark:hover:text-blue-400">
                  {post.title}
                </a>
              </Link>
            </h1>
            <p className="mb-3">{post.description}</p>
            <p>
              <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
                <a>Read More</a>
              </Link>
            </p>
          </article>
        ))} */}

        {filteredPosts.map((post) => (
          <article key={post.slug} className="mt-12">
            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
              {format(parseISO(post.date), 'MMMM dd, yyyy')}
            </p>
            <h1 className="mb-2 text-xl">
              <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
                <a className="text-gray-900 dark:text-white dark:hover:text-blue-400">
                  {post.title}
                </a>
              </Link>
            </h1>
            <p className="mb-3">{post.description}</p>
            <p>
              <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
                <a>Read More</a>
              </Link>
            </p>
          </article>
        ))}
        <footer className="py-14">
          <div className="pt-40 max-w-5xl mx-auto">
            Inspired from template by{' '}
            <a
              className="text-gray-900 dark:text-gray"
              href="https://github.com/ChangoMan/nextjs-typescript-mdx-blog"
            >
              Hunter Chang
            </a>
          </div>
        </footer>
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

export default Index;

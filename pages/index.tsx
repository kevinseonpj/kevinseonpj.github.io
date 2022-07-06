import { format, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';
import { getAllPosts } from '../lib/api';
import { PostType } from '../types/post';

type IndexProps = {
  posts: PostType[];
};

export const Index = ({ posts }: IndexProps): JSX.Element => {
  return (
    <Layout>
      <h1>Hello! I am Kevin</h1>
      <p>This is just a minimalistic website just to keep some cool things on web :D
      </p>
      <p>
      These are all mix of bunch of random topics so... but it is still heavily in development at the moment... 
      </p>
      <a
        href="https://github.com/kevinseonpj"
        className="inline-block px-7 py-3 rounded-md text-white dark:text-white bg-blue-600 hover:bg-blue-800 hover:text-white dark:hover:text-white"
      >
        My Github
      </a>

      {posts.map((post) => (
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
          <div className="max-w-5xl mx-auto">
            Inspired from template by {' '}
            <a
              className="text-gray-900 dark:text-gray"
              href="https://github.com/ChangoMan/nextjs-typescript-mdx-blog"
            >
              Hunter Chang
            </a>
          </div>
      </footer>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['date', 'description', 'slug', 'title']);

  return {
    props: { posts },
  };
};

export default Index;

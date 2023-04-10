import Link from 'next/link';
import React from 'react';

const Navigation = (): JSX.Element => {
  return (
    <nav>
      <Link href="/">
        <a className="text-gray-900 dark:text-white pr-6 py-4">Home</a>
      </Link>
      <Link href="/about">
        <a className="text-gray-900 dark:text-white px-6 py-4">About</a>
      </Link>
      <Link href="/TIL">
        <a className="rounded-lg bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 text-gray-900 dark:text-white px-6 py-4">
          TIL
        </a>
        {/* <a className="text-gray-900 dark:text-white px-6 py-4">TIL</a> */}
      </Link>
      <Link href="/test">
        <a className="text-gray-900 dark:text-white px-6 py-4">test</a>
      </Link>
    </nav>
  );
};

export default Navigation;

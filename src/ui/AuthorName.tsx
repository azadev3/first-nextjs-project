import Link from 'next/link';
import React from 'react';

const AuthorName: React.FC = () => {
  return (
    <div className="author-name">
      <h3>
        All design and code&nbsp;
        <Link
          target="_blank"
          href="https://www.youtube.com/@azadevv/videos"
          className="author"
        >
          © Azadev
        </Link>
      </h3>
    </div>
  );
};

export default AuthorName;

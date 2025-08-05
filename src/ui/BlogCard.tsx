import { BlogInterface } from '@/hooks/useBlogs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  blog: BlogInterface;
}

const BlogCard: React.FC<Props> = ({ blog }) => {
  return (
    <Link
      href=""
      className="blog-card"
    >
      <div className="image-wrapper">
        <Image
          src={blog?.image}
          alt={blog?.title}
          fill
        />
      </div>
      <div className="description-content">
        <h2 className="title">{blog?.title}</h2>
        <div className="author-content">
          <p>{blog?.author}</p>
          <span>{blog?.date}</span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;

import { BlogInterface, useBlogs } from '@/hooks/useBlogs';
import BlogCard from '@/ui/BlogCard';
import Link from 'next/link';
import React from 'react';
import { BiShow } from 'react-icons/bi';

const Blogs = () => {
  const { BlogData } = useBlogs();
  return (
    <section className="blogs-wrapper">
      <div className="blogs-content">
        <h2>My Blogs</h2>
        <div className="grid-blogs">
          {BlogData?.slice(0, 3)?.map((data: BlogInterface) => (
            <BlogCard
              blog={data}
              key={data?.id}
            />
          ))}
        </div>
        <div className="more-button">
          <Link
            href="/blogs"
            className="show-more"
          >
            <BiShow className="show" />
            <p>Show More</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blogs;

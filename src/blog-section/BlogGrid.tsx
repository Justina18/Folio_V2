import BlogCard from "./BlogCard";
import { blogDetails } from "./blogDetails";

const Blog = () => {
  return (
    <main className="min-h-screen bg-[--color-dark] px-6 pb-32 pt-28 text-[#e4ded7] sm:px-10 lg:px-16">
      <header className="mx-auto mb-16 max-w-7xl">
        <p className="head-font mb-4 text-sm font-bold uppercase tracking-widest text-[--color-turquoise]">Writing</p>
        <h1 className="head-font max-w-5xl text-6xl uppercase leading-[.9] text-white sm:text-8xl md:text-[9rem]">All writings.</h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl">
          Articles, reflections, and rants about learning, building, and figuring things out.
        </p>
      </header>
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogDetails.map((blog, index) => {
          return (
            <BlogCard
              key={index}
              title={blog.title}
              image={blog.image}
              url={blog.url}
              date={blog.date}
              available={blog.available}
              index={index}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Blog;

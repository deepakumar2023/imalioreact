import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://backend.imalio.com/blogs-api.php")
      .then((res) => res.json())
      .then((data) => setBlogs(data.data || []))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="mt-10 bg-gray-50 py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-10">Our Latest Blogs</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {blogs.map((blog) => (
          <Link
            key={blog.id}
            to={`/blogs/${blog.title.toLowerCase().replace(/\s+/g, "-")}`}
            state={{ blog }} // 👈 pass full data via route state
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            <div className="relative w-full h-52">
              <img
                src={`https://backend.imalio.com/${blog.image}`}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p
                className="text-gray-600 text-sm mb-3"
                dangerouslySetInnerHTML={{ __html: blog.description || "" }}
              />
              <p className="text-gray-400 text-xs">
                {new Date(blog.created_at).toDateString()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

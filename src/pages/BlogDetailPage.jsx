import { useParams, useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const location = useLocation();
  const [blog, setBlog] = useState(location.state?.blog || null);

  useEffect(() => {
    if (!blog) {
      fetch("https://backend.imalio.com/blogs-api.php")
        .then((res) => res.json())
        .then((data) => {
          const found = data.data.find(
            (b) =>
              b.title.toLowerCase().replace(/\s+/g, "-") === slug.toLowerCase()
          );
          setBlog(found);
        });
    }
  }, [blog, slug]);

  if (!blog) return <div className="text-center py-12">Loading blog…</div>;

  return (
     <section className="bg-gray-50 py-5 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-20 mt-12 sm:mt-8 md:mt-10">

      <div className=" mx-auto bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
        <div className="relative">
          <img
            src={`https://backend.imalio.com/${blog.image}`}
            alt={blog.title}
            className="w-full h-96  rounded-t-3xl object-contain"
          />
          {/* <h1 className="absolute bottom-6 left-6 text-white text-4xl font-bold drop-shadow-lg">
            {blog.title}
          </h1> */}
        </div>
        <div className="p-8">

           <h1   className="prose prose-lg max-w-none">
            {blog.title}
          </h1>
          <article
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: blog.description || "" }}
          />
          <p className="mt-6 text-sm text-gray-500">
            Published: {new Date(blog.created_at).toDateString()}
          </p>
        </div>
      </div>
    </section>
  );
}

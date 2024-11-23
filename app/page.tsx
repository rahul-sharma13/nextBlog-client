import BlogCard from "@/components/blogCard";
import { BlogPost } from "@/types/types";

interface BlogResponse {
  success: boolean;
  data: BlogPost[];
  message?: string;
}

export default async function Home() {
  try {
    const res = await fetch("http://localhost:8000/api/v1/posts/get", {
      cache: "no-store", // Ensures fresh data on each request
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data : BlogResponse = await res.json();

    return (
      <div className="min-h-screen p-4 md:p-6">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-6 md:mb-10">
          Blog Page
        </h1>

        {data?.data?.length === 0 ? (
          <div className="text-center p-8">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              No blog posts available yet.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
            {data?.data?.map((blog: BlogPost) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data</div>;
  }
}

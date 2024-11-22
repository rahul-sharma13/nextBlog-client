import BlogCard from "@/components/blogCard";
import { BlogPost } from "@/types/types";

export default async function Home() {
  try {
    const res = await fetch("http://localhost:8000/api/v1/posts/get", {
      cache: "no-store", // Ensures fresh data on each request
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();

    return (
      <div className="flex flex-col p-2">
        <h1 className="text-center text-4xl font-bold text-gray-800">Blog Page</h1>
        <div className="flex flex-row gap-3 flex-wrap mx-auto mt-10 max-w-7xl">
            {data?.data?.map((blog: BlogPost) => (
            <BlogCard key={blog._id} blog = {blog}/>
            ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data</div>;
  }
}

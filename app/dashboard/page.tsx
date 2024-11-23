"use client";
import { Button } from "@/components/ui/button";
import { BlogPost } from "@/types/types";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:8000/api/v1/posts/post", {
          withCredentials: true,
        });

        setPosts(res.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, []);

  if (loading) {
    return <h1>please wait</h1>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6 sm:mt-10">
        <h1 className="text-2xl sm:text-3xl font-bold">User Dashboard</h1>
        <Link href="/blog/create">
          <Button>Create Post</Button>
        </Link>
      </div>

      {posts.length === 0 ? (
        <div className="mt-10 text-center p-8 border rounded-lg">
          <p className="text-lg text-gray-600 dark:text-gray-400">
            No blogs written yet. Create your first post to get started!
          </p>
        </div>
      ) : (
        <div className="mt-6 sm:mt-10 overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-4 sm:px-6 py-3 text-left sm:text-center text-sm sm:text-base font-semibold"
                  >
                    Date Added
                  </th>
                  <th
                    scope="col"
                    className="px-4 sm:px-6 py-3 text-left sm:text-center text-sm sm:text-base font-semibold"
                  >
                    Title
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {posts.map((post, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <td className="whitespace-nowrap px-4 sm:px-6 py-3 text-left sm:text-center text-sm sm:text-base">
                      {new Date(post?.createdAt).toLocaleDateString()}
                    </td>
                    <td className="whitespace-nowrap px-4 sm:px-6 py-3 text-left sm:text-center text-sm sm:text-base hover:underline cursor-pointer">
                      {post?.title}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

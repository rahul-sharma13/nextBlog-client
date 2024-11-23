"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-dropdown-menu";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface blogData {
  title: string;
  content: string;
}

export default function CreateBlog() {
  const router = useRouter();
  const [blogData, setBlogData] = useState<blogData>({
    title: "",
    content: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<String | null>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setBlogData((prev) => ({ ...prev, [id]: value }));
  };

  const blogSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/posts/post",
        blogData,
        { withCredentials: true }
      );
      console.log(response);
      if (response.status === 201) {
        router.push(`/blog/${response.data?.data?._id}`);
      }
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        const data = error.response?.data;

        if (status === 409) {
          setError("all fields are required");
        }
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full px-4 py-6">
      <h1 className="text-2xl md:text-3xl my-4 md:my-5 font-bold text-center">
        Create Blog
      </h1>

      <form
        onSubmit={blogSubmit}
        className="flex flex-col gap-4 w-full max-w-[600px] mx-auto px-4 md:px-0"
      >
        <div className="grid w-full gap-1.5">
          <Label className="text-base md:text-lg font-bold">Title</Label>
          <Input
            id="title"
            onChange={handleChange}
            placeholder="Title"
            className="w-full"
          />
        </div>

        <div className="grid w-full gap-1.5">
          <Label className="text-base md:text-lg font-bold">Your Blog</Label>
          <Textarea
            placeholder="Type your message here."
            id="content"
            onChange={handleChange}
            className="min-h-[200px] w-full"
          />
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="w-full md:w-auto md:self-start"
        >
          {loading ? "Please wait" : "Create Post"}
        </Button>
      </form>
    </div>
  );
}

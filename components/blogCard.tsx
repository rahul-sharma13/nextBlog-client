import { BlogPost } from "@/types/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import moment from "moment";

interface BlogCardProps {
  blog: BlogPost;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <Card className="w-full sm:max-w-[350px] md:max-w-[300px] lg:max-w-[350px] h-full">
      <CardHeader>
        <CardTitle className="text-xl line-clamp-2">{blog.title}</CardTitle>
        <CardDescription className="text-sm truncate">
          {blog.authorId?.email}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="line-clamp-4 text-sm md:text-base">{blog.content}</p>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row justify-between gap-3 mt-auto">
        <Button variant="outline" className="w-full sm:w-auto">
          Read More
        </Button>
        <span className="text-sm text-gray-500">
          {moment(blog?.createdAt).fromNow()}
        </span>
      </CardFooter>
    </Card>
  );
}

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

    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>{blog.title}</CardTitle>
        <CardDescription>{blog.authorId?.email}</CardDescription>
      </CardHeader>
      <CardContent>{blog.content}</CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Read More</Button>
        <span>{moment(blog?.createdAt).fromNow()}</span>
      </CardFooter>
    </Card>
  );
}

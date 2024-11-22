import { Types } from "mongoose";

export interface BlogPost {
  _id: string;
  title: string;
  content: string;
  authorId: Author;
  createdAt: string;
}

export interface Author {
    email : string
}
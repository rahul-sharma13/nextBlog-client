import { Types } from "mongoose";

export interface BlogPost {
  _id: string;
  title: string;
  content: string;
  createdAt: string;
  authorId?: {
    email: string;
    _id: string;
  };
}

export interface formDataType {
  email: string;
  password: string;
}

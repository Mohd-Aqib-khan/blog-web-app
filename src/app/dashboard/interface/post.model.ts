import { User } from "src/app/core/interfaces/user.model";

interface BlogPost {
  id: number;
  title: string;
  image: string;
  content: string;
  category: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
}

interface CreatePost {
  title: string;
  content: string;
  category: string;
}

interface PostDetails extends BlogPost  {
  user: User
}

export { BlogPost, CreatePost, PostDetails };
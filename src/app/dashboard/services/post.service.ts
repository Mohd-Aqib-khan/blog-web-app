import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { BlogPost, CreatePost, PostDetails } from '../interface/post.model';

@Injectable()
export class PostService {
  constructor(private http: HttpService) {}

  getPostListByUser() {
    return this.http.get<BlogPost[]>('posts/list');
  }

  createPost(postDetails: CreatePost) {
    return this.http.post<BlogPost>('posts/add', postDetails);
  }

  getPostById(id: number) {
    return this.http.get<PostDetails>(`posts/${id}`);
  }

  getTrendingPosts(isTrending: boolean) {
    return this.http.get<PostDetails[]>('posts/trending', { isTrending });
  }
}

import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { PostDetails } from 'src/app/dashboard/interface/post.model';
import { PostService } from 'src/app/dashboard/services/post.service';

@Component({
  selector: 'app-trending-blogs',
  templateUrl: './trending-blogs.component.html',
  styleUrls: ['./trending-blogs.component.scss'],
  providers: [PostService]
})
export class TrendingBlogsComponent implements OnInit {

  slides: PostDetails[][] = [];
  private readonly CHUNK_SIZE = 2;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.loadTrendingPosts();
  }

  private async loadTrendingPosts(): Promise<void> {
    try {
      const response = await firstValueFrom(this.postService.getTrendingPosts(true));
      const posts = response?.data ?? [];
      this.slides = this.groupIntoChunks(posts, this.CHUNK_SIZE);
    } catch (error) {
      console.error('Failed to load trending posts:', error);
    }
  }

  private groupIntoChunks(arr: PostDetails[], chunkSize: number): PostDetails[][] {
    return Array.from({ length: Math.ceil(arr.length / chunkSize) }, (_, i) =>
      arr.slice(i * chunkSize, i * chunkSize + chunkSize)
    );
  }

  isNonEmptyObject(obj: any): boolean {
    return obj && typeof obj === 'object' && Object.keys(obj).length > 0;
  }

  trackByFn(index: number, item: PostDetails): any {
    return item.id;
  }
}

import { Component } from '@angular/core';
import {  PostDetails } from '../../interface/post.model';
import { PostService } from '../../services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent {
  post!: PostDetails;
  postId!: number;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.route.params.subscribe(params => {
      this.postId = params['id'];
      this.getPostDetail();
    });
  }

  getPostDetail() {
    this.postService.getPostById(this.postId).subscribe(res => {
      if (res.status === 200) {
        console.log("post@#2", res.data);
        this.post = res.data;
      }
    });
  }
}

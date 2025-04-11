import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent {
  postForm: FormGroup;
  categories: string[] = ['Technology', 'Health', 'Education', 'Finance'];

  constructor(private fb: FormBuilder, private postService: PostService, private router: Router) {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      category: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.postForm.valid) {
      console.log('Post data:', this.postForm.value);
      this.postService.createPost(this.postForm.value).subscribe(res => {
        if (res.status == 200) {
          this.router.navigate(['/dashboard/postList']);
        }
      })
      // You can emit, call API, or route to another page
    }
  }
}

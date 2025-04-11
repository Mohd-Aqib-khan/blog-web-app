import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { BlogPost } from '../../interface/post.model';
import { ColumnDefinition } from 'src/app/shared/components/generic-table/generic-table-component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent {
  tableData!: BlogPost[];
  // Column definitions
  columns: ColumnDefinition[] = [
    {
      columnDef: 'title',
      header: 'Title',
      cell: (element: BlogPost) => element.title
    },
    {
      columnDef: 'image',
      header: 'Image',
      cell: (element: BlogPost) => element.image
    },
    {
      columnDef: 'content',
      header: 'Content',
      cell: (element: BlogPost) => element.content.length > 100 ? `${element.content.substring(0, 100)}...` : element.content
    },
    {
      columnDef: 'category',
      header: 'Category',
      cell: (element: BlogPost) => element.category
    },
    {
      columnDef: 'createdAt',
      header: 'Created At',
      cell: (element: BlogPost) => new Date(element.createdAt).toLocaleString()
    },
    {
      columnDef: 'updatedAt',
      header: 'Updated At',
      cell: (element: BlogPost) => new Date(element.updatedAt).toLocaleString()
    }
  ];

  constructor(private postService: PostService, private router: Router) {
    this.getPostListByUser();
  }

  getPostListByUser() {
    this.postService.getPostListByUser().subscribe(res => {
      if (res.status === 200) {
        this.tableData = res.data;
      }
    });
  }

  // Handle row click
  onRowClick(post: BlogPost): void {
    console.log('Row clicked:', post);
    this.router.navigate(["/dashboard/post/", post.id]);
  }
}

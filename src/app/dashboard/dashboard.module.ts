import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { PostListComponent } from './components/post-list/post-list.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { SharedModule } from '../shared/shared.module';
import { PostService } from './services/post.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';


@NgModule({
  declarations: [
    PostListComponent,
    AddPostComponent,
    DashboardComponent,
    PostDetailComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ],
  providers: [PostService],
})
export class DashboardModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { PostDetailComponent } from './components/post-detail/post-detail.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'postList', pathMatch: 'full' },
      { path: 'postList', component: PostListComponent, canActivate: [AuthGuard] },
      { path: 'addPost', component: AddPostComponent, canActivate: [AuthGuard] },
      { path: 'post/:id', component: PostDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}

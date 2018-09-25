import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { PostService } from '../services/post.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { Router } from '@angular/router';
import { Post } from '../models/post.model';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {
 
  posts: Post[];
  postSubscription: Subscription;
  constructor(private postsService: PostService, private router: Router) { }

  ngOnInit() {
    this.postSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postsService.getPosts();
    this.postsService.emitPostSubject();
  }

  onNewPost() {
    this.router.navigate(['/edit'])
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }

}

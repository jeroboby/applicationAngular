import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreatedAt: Date;

  constructor(private postsService: PostService) { 
    
    
  }
  
  ngOnInit() {
    this.postLoveIts = 0;
    this.postCreatedAt = new Date();
  }

  onDeletePost(post: Post) {
    this.postsService.removePost(post);
  }

  onLoveItNumber() {
    this.postLoveIts += 1;
  }

  onDontloveItNumber() {
    this.postLoveIts -= 1;
  }

  getColor () {
    if (this.postLoveIts > 0) {
      return "green";
    }else if (this.postLoveIts < 0) {
      return "red";
    } else {
      return "black";
    }
  }

}

import { Subject } from "rxjs/internal/Subject";
import { HttpClient } from "@angular/common/http";
import * as firebase from 'firebase';
import { Post } from "../models/post.model";
import { Injectable } from "@angular/core";

@Injectable()
export class PostService {
    posts: Post[] = [];
    postsSubject = new Subject<Post[]>();

    constructor(private httpClient: HttpClient) {
        this.getPosts();
    } 

    emitPostSubject() {
        this.postsSubject.next(this.posts.slice());
    }

    savePost() {
        firebase.database().ref('/posts').set(this.posts);
    }
    
    getPosts() {
        firebase.database().ref('/posts')
        .on('value', (data) => {
          this.posts = data.val() ? data.val() : [];
          this.emitPostSubject();
        });
      }
    
      createNewPost(newPost : Post) {
        this.posts.push(newPost);
        this.savePost();
        this.emitPostSubject();
      }
    
      removePost(post: Post) {
        const postIndexToRemove = this.posts.findIndex(
          (postEl) => {
            if(postEl === post) {
              return true;
            }
          }
        );
        this.posts.splice(postIndexToRemove, 1);
        this.savePost();
        this.emitPostSubject();
      }  

    //   onLoveItNumber() {
    //     const loveIts = this.posts;
    //     this.posts.loveIts += 1;
    //   }
    
    //   onDontloveItNumber() {
    //     this.posts.loveIts -= 1;
    //   }
    
    //   getColor () {
    //     if (this.postLoveIts > 0) {
    //       return "green";
    //     }else if (this.postLoveIts < 0) {
    //       return "red";
    //     } else {
    //       return "black";
    //     }
    //   }
}